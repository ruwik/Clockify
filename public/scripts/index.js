const showCreatePopup = () => {
    const doc = document.getElementById("createPopup");
    doc.style.display = "block"
}

const closeCreatePopup = () => {
    const doc = document.getElementById("createPopup");
    doc.style.display = "none"
}

const createProject = async () => {
    const name = document.getElementById("name").innerText
    const client = document.getElementById("client").innerText
    const request = new XMLHttpRequest();
    request.onload = () => {
        console.log(this.responseText)
        document.getElementById("projectName").innerText = JSON.parse(this.responseText).id
    }
    await request.open('post',"/project/create");
    request.send(JSON.stringify({"name":name, "client":client}));
    closeCreatePopup();
}