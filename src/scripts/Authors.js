import { getAuthors } from "./dataAccess.js"


export const Authors = () => { 

    const authors = getAuthors()
    
    return `
        <select class="author">
            <option class="chooseauthor" value="clowns">Choose Author...</option>
            ${authors.map(
                author => { 
                    return `<option value="${author.id}">${author.name}</option>`
            }).join("")}
            </select>`
    
    
    }
       

        




