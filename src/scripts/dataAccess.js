const transientState = {
    authors: [],
    topics: [],
    recipients: [],
    letters: [],
    completeLetter: {

    }

}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const getCompleteLetter = () => { 
    return {...transientState.completeLetter}
}

/*AUTHORS*/
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then((authorData) => {
            transientState.authors = authorData
        })
}

export const getAuthors = () => {
    return transientState.authors.map(author => ({ ...author }))
}

export const setAuthors = (id) => {
    return transientState.completeLetter.authorChoice = id
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
    return transientState.topics.map(topic => ({ ...topic }))
}

export const setTopics = (id) => {
    return transientState.completeLetter.topicChoice = id
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
    return transientState.recipients.map(recipient => ({ ...recipient }))
}

export const setRecipients = (id) => {
    return transientState.completeLetter.recipientChoice = id
}


/* letters */
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then((letterData) => {
            transientState.letters = letterData
        })
}

export const getLetters = () => {
    return transientState.letters.map(letter => ({ ...letter }))
}

export const setLetters = (letterText) => { 
    return transientState.completeLetter.letterContent = letterText
}


// perform POST request to save the completion object to API 
export const sendLetter = (obj) => {

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then((data) => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })


}

// /* SAVE COMPLETIONS */
// export const saveCompletion = (finishedLetter) => { 

//     const fetchOptions= { 
//         method: "POST", 
//         headers: { 
//             "Content-Type": "application/json"
        
//         },
//         body: JSON.stringify(completion)
//     }

//     return fetch(`${API}/completionLetter`, 
//     fetchOptions)
//     .then(response => response.json())
//     .then((data) => { 
//         mainContainer.dispatchEvent(new CustomEvent("stateChanged)"))
//     })
// }


// /* DELETE */
// // function that will delete letter 
// export const deleteLetter = () => { 

//      // DELETE request
//      // need id value because we can only delete singular resources
// }
// *