// click event that will send letter to API then render letter below
// printed letter should include author, recipient, date sent, email address of author/recipient & topic of letter

import { sendLetter } from "./dataAccess.js"

export const Letter = (letterInfo) => { 


    const completeLetter = { 

    }

    sendLetter(completeLetter)
}