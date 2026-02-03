const button_el = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")

let myLeads = []




// Add a check to see if the button was actually found
button_el.addEventListener("click", function(){
    myLeads.push(inputEL.value)
        
    // TEACHING MOMENT: Clear the input box after saving
    const listItem = `
    <li>
        <a target='_blank' href='${inputEL.value}'>
            ${inputEL.value}
        </a>
    </li>
    `    
    ulEL.innerHTML += listItem

    inputEL.value = "" 

})


