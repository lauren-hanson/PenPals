import { getTopics } from "./dataAccess.js"

export const Topics = () => { 

    const topics = getTopics() 

    let html = "<ul>"

       html += `${topics.map(topic => {
            return `<input type="radio" id="topic" name="topic" value="topic">
            <label for="topic">${topic.type}</label>`
        }).join("")}`
        
        html += `</ul>`
    
        return html
    }
    
