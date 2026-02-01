const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a",
    "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3",
     "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
     "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generatePasswords() {
    // We grab the elements ONLY when the button is clicked
    let elOne = document.getElementById("password-one")
    let elTwo = document.getElementById("password-two")
    
    // Put them in an array so we can loop through them
    let passwordElements = [elOne, elTwo]

    for (let i = 0; i < passwordElements.length; i++) {
        let newPassword = "" 
        
        for (let j = 0; j < 11; j++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            newPassword += characters[randomIndex]
        }
        
        // This puts the text into the <p> tag
        passwordElements[i].textContent = newPassword
    }
}


function copyToClipboard(id) {
    // 1. Get the element using the ID we passed in
    let element = document.getElementById(id)
    
    // 2. Get the text inside that element
    let textToCopy = element.textContent

    // 3. Safety check: Only copy if there is a password there!
    if (textToCopy === "") {
        return; // Do nothing if it's empty
    }

    // 4. THE COPY ACTION
    navigator.clipboard.writeText(textToCopy).then(function() {
        // 5. THE FEEDBACK (Teaching Moment below)
        alert("Password copied: " + textToCopy)
    })
}