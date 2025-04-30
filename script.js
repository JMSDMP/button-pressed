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
// Add an input field to trigger the keyboard on mobile devices
const inputField = document.createElement("input");
inputField.type = "text";
inputField.style.position = "absolute";
inputField.style.opacity = "0"; // Make it invisible
inputField.style.height = "0";
inputField.style.width = "0";
document.body.appendChild(inputField);

// Focus the input field to open the keyboard
inputField.focus();