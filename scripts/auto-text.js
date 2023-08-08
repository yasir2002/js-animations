const textOutput = document.getElementById("text-output");
const texts = ['console.log("Hello World!")', "sudo apt i life && rm sorrows", "while(!(succeed=try()));", "/* no comment */", "i need a <br>!"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textOutput.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 70); // Adjust the typing speed here
  } else {
    setTimeout(eraseText, 1000); // Delay before erasing text
  }
}

function eraseText() {
  if (charIndex > 0) {
    textOutput.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 40); // Adjust the erasing speed here
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500); // Delay before typing next text
  }
}

// Start the typing effect
typeText();
