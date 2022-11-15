import { getAuthors, setAuthors } from "./dataAccess.js"



export const Authors = () => {

    const authors = getAuthors()

    return `
        <select class="author" id="author">
            <option class="chooseauthor" value="0">Choose Author...</option>
            ${authors.map(
        author => {
            return `<option value="${author.id}">${author.name}</option>`
        }).join("")}
            </select>`

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "change",
    event => {
        if (event.target.id === "author") {

           setAuthors(parseInt(event.target.value))
           
        }

    }
)







