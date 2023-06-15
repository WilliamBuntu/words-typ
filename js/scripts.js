const typingText = document.querySelector(".typing-text p")
const inputField = document.querySelector(".wrapper .input-field")
const mistake = document.querySelector(".mistake")
let charIndex = mistake = 0

function randomParagraph() {
    let randomIndex = Math.floor(Math.random() *paragraphs.length)
   paragraphs[randomIndex].split("").forEach(span =>{
    let spanTag = `<span>${span}</span>`
    typingText.innerHTML += spanTag
   })

   document.addEventListener("keydown", ()=> inputField.focus())
   typingText.addEventListener("click", ()=> inputField.focus())
}

function initTyping() {
    const characters = typingText.querySelectorAll("span")
    let typedChar = inputField.value.split(" ")[charIndex]
    // console.log(typedChar)
    //typer
    if (typedChar == null){
        charIndex--;

        if (characters[charIndex].classList.contains('incorrect')){
           mistake--;
        }
         characters[charIndex].classList.remove("correct","incorrect")

    }else{
        if (characters[charIndex].innerText === typedChar){
        characters[charIndex].classList.add("correct")
    }else{
        mistake++;
        characters[charIndex].classList.add("incorrect")

    }
    charIndex ++;
    }

     characters.forEach(span => span.classList.remove("active"))
     characters[charIndex].classList.add("active")

     mistakeTag.innerText = mistake;
}
randomParagraph()
inputField.addEventListener("input", initTyping)
