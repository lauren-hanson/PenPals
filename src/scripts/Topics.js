import { getTopics } from "./dataAccess.js"

export const Topics = () => { 

    const topics = getTopics() 

    let html = "<ul>"

    for (const topic of topics) {
        return `<li>
        <input type="radio" id="topic" name="topic" value="topic">
        <label for="topic">${topic.name}</label></li>`
    }
    
    html += `</ul>`

    return html
}