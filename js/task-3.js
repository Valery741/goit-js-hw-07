const inputRef = document.querySelector("#name-input")
const spanRef = document.querySelector("#name-output")
inputRef.addEventListener("input", handleInput)
function handleInput(event) {
    const value = event.target.value.trim()
    spanRef.innerHTML = value || "Anonymous"
}