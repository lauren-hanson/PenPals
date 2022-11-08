
import {PenPals} from "./PenPals.js"

const mainContainer = document.querySelector("#container")

const render = () => {

        mainContainer.innerHTML = PenPals()
    
}

render()