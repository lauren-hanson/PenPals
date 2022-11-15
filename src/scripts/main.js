
import { fetchAuthors, fetchRecipients, fetchTopics, fetchLetters } from "./dataAccess.js"
import {PenPals} from "./PenPals.js"


const mainContainer = document.querySelector("#container")

const render = () => {
        fetchLetters() 
                .then(() => fetchAuthors())
                .then(() => fetchRecipients())
                .then(() => fetchTopics())
                .then(() => { 
                        mainContainer.innerHTML = PenPals()
    
                })
       
}

mainContainer.addEventListener("stateChanged", 
(event) => { 
    render()
})

render()
