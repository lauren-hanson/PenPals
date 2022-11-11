import { getRecipients } from "./dataAccess.js"

export const Recipients = () => { 

    const recipients = getRecipients() 

    return `
    <select class="recipients"> 
        <option value="recipients">Choose Recipient...</option>
        ${recipients.map(recipient => { 
            return `
            <option value="${recipient.id}">${recipient.name}</option>`
        }).join("")}
    
    </select> `
}