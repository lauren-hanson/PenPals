import { getTopics } from "./dataAccess.js"

export const Topics = () => { 

    const topics = getTopics() 

    let html = "<ul>"

    for (const topic of topics) {
        return `<li>${topic.name}</li>`
    }
    
    html += `</ul>`

    return html
}