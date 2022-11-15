import { Authors } from "./Authors.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"
import { Letter } from "./SendLetter.js"



export const PenPals = () => { 
    return `
    <div class="container">
        <h1>Pen Pal Society</h1>
            <section class="authors">
                <h2>Author</h2>
                ${Authors()}
            </section>

            <section class="letter_text">
                <h2>Letter</h2>
                <textarea id="textArea" class="input" name="letter" rows="15" cols="80" placeholder="Dear... ">
                </textarea>
            </section>

            <section class="topics">
                <h2>Topics</h2>
                ${Topics()}
            </section>

            <section class="recipient">
            <h2>Recipient</h2>
            ${Recipients()}
            </section>
           
            <div class="letterSubmission">
            ${Letter()}
            </div>
            </div> 
            
    `
                        
}










