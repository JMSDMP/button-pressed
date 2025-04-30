let inputEle = document.createElement("input")

if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    document.addEventListener("DOMContentLoaded", () => {
        inputEle.addEventListener("input", (ev) => {
            showButton(ev.target.value.slice(-1));
            ev.target.value = "";
        });
        document.body.appendChild(inputEle);
        inputEle.focus();
    });
} else {
    window.addEventListener("keypress", (ev) => {
        showButton(ev.key);
    });
}


function showButton(key) {
    let newButtonEle = document.createElement("div");
    newButtonEle.innerText = key
    newButtonEle.className = "button"
    document.body.appendChild(newButtonEle)
    setTimeout(()=>{document.body.removeChild(newButtonEle)},1000)
}


