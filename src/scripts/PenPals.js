import { Authors } from "./Authors.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"

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
                    <textarea></textarea>
            </section>

            <section class="topics">
                <h2>Topics</h2>
                ${Topics()}
            </section>

                <section class="recipient">
                    <h2>Recipient</h2>
                    ${Recipients()}
                </section>


            <button class="sendletter">Send Letter</button>

            <div class="letter_save">
                <h2>Letters</h2>
            </div>
        </div>

      
            `
}