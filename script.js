window.addEventListener("keypress", (ev) => {
    showButton(ev.key)
})

function showButton(key) {
    let newButtonEle = document.createElement("div");
    newButtonEle.innerText = key
    newButtonEle.className = "button"
    document.body.appendChild(newButtonEle)
    setTimeout(()=>{document.body.removeChild(newButtonEle)},1000)
}