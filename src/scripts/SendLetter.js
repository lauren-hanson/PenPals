//click event that will send letter to API then render letter below
//printed letter should include author, recipient, date sent, email address of author/recipient & topic of letter -> import getLetter & saveLetter

//similar to REQUEST.JS

import { sendLetter, getCompleteLetter, getLetters, getAuthors, getTopics, getRecipients } from "./dataAccess.js"



export const Letter = () => {

    const letters = getLetters() 

   let html = `<button class="sendletter" id="sendLetter">Send Letter</button>

  
   
  
   <h2>Letters</h2>
    ${letters.map(PrintLetter).join("")}`

    return html 
    
}

const PrintLetter = (letter) => { 

    const authors = getAuthors() 
    const findAuthor = authors.find(author => 
        author.id === letter.authorId)

    const topics = getTopics() 
    const findTopic = topics.find(topic =>
        topic.id === letter.topicId)

    const recipients = getRecipients()
    const findRecipient = recipients.find(recipient => 
        recipient.id === letter.recipientId)

    
    let html = `<div class="printletter">
            Dear ${findAuthor.name} (${findAuthor.email}),<br><br>
            <div class="letterBody">
            ${letter.letterContent}</div>
            <div class="signature">
            <br>Sincerely, ${findRecipient.name} (${findRecipient.email})<br>
            ${letter.date_created}</div><br>
            <div class="letterTopic">
            ${findTopic.type}</div>
    </div>`
    

    return html 
}




const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    clickEvent => {

        const completeLetter = getCompleteLetter()

        if (clickEvent.target.id === "sendLetter") {
            // need to collect data that has been input
            // create an object with user input to send to API 
            const finishedLetter = {
                authorId: completeLetter.authorChoice,
                topicId: completeLetter.topicChoice,
                recipientId: completeLetter.recipientChoice,
                letterContent: document.querySelector("textArea[name='letter']").value,
                date_created: Date.now()
            }
            // send data to API for permanent storage 
            sendLetter(finishedLetter)

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }

    }
)


