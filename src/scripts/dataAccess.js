const transientState = { 
    authors: [], 
    recipients: [], 
    topics: [], 
    sentLetters: [] 

}

const API = "http://localhost:8088"

/*AUTHORS*/ 
export const fetchAuthors = () => { 
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then((authorData) => { 
            transientState.authors = authorData
        })
}

export const getAuthors = () => { 
    return transientState.authors.map(author => ({...author}))
}

/*TOPICS*/
export const fetchTopics = () => { 
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then((topicData) => { 
            transientState.topics = topicData
        })
}

export const getTopics = () => {
    return transientState.topics.map(topic => ({...topic}))
}

/*RECIPIENTS*/ 
export const fetchRecipients = () => { 
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then((recipientData) => { 
            transientState.recipients = recipientData
        })
}

export const getRecipients = () => { 
    return transientState.recipients.map(recipient => ({...recipient}))
}