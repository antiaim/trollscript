t_getEventListeners = getEventListeners
async function init() {
    let ufModule = await import("https://unpkg.com/uwuifier@4.0.4/dist/index.js")
    ufModule = ufModule.default        
    let ufInstance = new ufModule()
    ufInstance.actions = ["*blushes*", "*boops your nose*", "*notices bulge*"]
    ufInstance.faces.push("💗")
    ufInstance._spacesModifier.faces = 0.2
    ufInstance._spacesModifier.stutters = 0.2
    ufInstance._spacesModifier.actions = 0.1
    let chatInput = document.querySelector("#chat-input")
    let chatSend = document.querySelector("#chat-send")
    let chatInputListener = t_getEventListeners(chatInput).keypress[0].listener
    let chatSendListener = t_getEventListeners(chatSend).click[0].listener
    chatInput.removeEventListener("keypress", chatInputListener)
    chatSend.removeEventListener("click", chatSendListener)
    function onSendEnter(event) {
        if (event.key === "Enter") {
            chatInput.value = ufInstance.uwuifySentence(chatInput.value)
        }
    }
    function onSendClick(event) {
        chatInput.value = ufInstance.uwuifySentence(chatInput.value)
    }
    chatInput.addEventListener("keypress", onSendEnter)
    chatSend.addEventListener("click", onSendClick)
    chatInput.addEventListener("keypress", chatInputListener)
    chatSend.addEventListener("click", chatSendListener)
}
init()    //////cursed  
