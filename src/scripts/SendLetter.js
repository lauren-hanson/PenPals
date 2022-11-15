//click event that will send letter to API then render letter below
//printed letter should include author, recipient, date sent, email address of author/recipient & topic of letter -> import getLetter & saveLetter

//similar to REQUEST.JS

import { sendLetter, getCompleteLetter } from "./dataAccess.js"



export const Letter = () => {

   return `<button class="sendletter" id="sendLetter">Send Letter</button>`
    
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


