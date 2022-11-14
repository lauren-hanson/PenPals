import { getTopics } from "./dataAccess.js"

export const Topics = () => { 

    const topics = getTopics() 

    let html = "<ul>"

       html += `${topics.map(topic => {
            return `
            <div class="topic">
            <input type="radio" id="topic" name="topic" value="topic">
            <label
            for="topic">${topic.type}</label>
            </div>`
        }).join("")}`
        
        html += `</ul>`
    
        return html
    }
    
