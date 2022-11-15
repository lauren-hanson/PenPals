import { getTopics, setTopics } from "./dataAccess.js"

export const Topics = () => { 

    const topics = getTopics() 

    let html = "<ul>"

       html += `${topics.map(topic => {
            return `
            <div class="topic">
            <input type="radio" id="topic" name="topic" value="1">
            <label
            for="topic">${topic.type}</label>
            </div>`
        }).join("")}`
        
        html += `</ul>`
    
        return html
    }
    
    const mainContainer = document.querySelector("#container")

    mainContainer.addEventListener(
        "click",
        event => {
            if (event.target.name === "topic") {

                setTopics(parseInt(event.target.value))
               
            }

    
        }
    )