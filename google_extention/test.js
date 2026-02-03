const button_el = document.getElementById("input-btn")
const inputEL = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")

let myLeads = []

// 1. Check LocalStorage for saved leads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

// 2. Refactored Render Function
function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEL.innerHTML = listItems
}

// 3. Save Manual Input
button_el.addEventListener("click", function() {
    if (inputEL.value) {
        myLeads.push(inputEL.value)
        inputEL.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    }
})

// 4. Save Current Tab URL (Chrome API)
tabBtn.addEventListener("click", function() {
    // This line only works when running as an extension
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

// 5. Delete All (Double Click)
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})