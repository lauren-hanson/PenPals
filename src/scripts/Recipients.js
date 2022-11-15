import { getRecipients, setRecipients } from "./dataAccess.js"

export const Recipients = () => { 

    const recipients = getRecipients() 

    return `
    <select class="recipients" id="recipients"> 
        <option value="recipients">Choose Recipient...</option>
        ${recipients.map(recipient => { 
            return `
            <option value="${recipient.id}">${recipient.name}</option>`
        }).join("")}
    
    </select> `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "change",
    event => {
        if (event.target.id === "recipients") {

           setRecipients(parseInt(event.target.value))
         
        }

    }
)