// 1. Grab all the elements from the HTML
const button_el = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")

// 2. Initialize the array
let myLeads = []

// 3. Get leads from LocalStorage (The "Unpacking" phase)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Check if there are any leads saved in the "Hard Drive"
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads() // Draw them on the screen immediately
}

// 4. The Function that draws the list on the screen
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Use Template Literals (backticks) for clean clickable links
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems
}

// 5. The SAVE button logic
button_el.addEventListener("click", function() {
    if (inputEL.value) {
        // Add value to the array
        myLeads.push(inputEL.value)
        
        // Clear the input field
        inputEL.value = ""
        
        // Save updated array to LocalStorage (The "Packing" phase)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        
        // Update the screen
        renderLeads()
    }
})

// 6. The DELETE button logic
// We use "dblclick" (double click) to prevent accidental deletions
deleteBtn.addEventListener("dblclick", function() {
    // A. Clear the LocalStorage "Hard Drive"
    localStorage.clear()
    
    // B. Reset the working array to empty
    myLeads = []
    
    // C. Update the screen (it will show an empty list)
    renderLeads()
})