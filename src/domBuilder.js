import "./localStorage.js"
import edit from "./edit.svg"
export default function domBuilder() {
    const populateDOM = () => {
        const listItems = LocalStorage.getStoredData()
        for (let [index, val] of listItems.entries()) {
            const card = document.createElement("div")
            const cardContainer = document.querySelector(".card-container")
            const sideContainer = document.querySelector(".side-container")
            const newItem = document.createElement("button")
            newItem.textContent = `${val.title}`
            sideContainer.appendChild(newItem)

            card.dataset.index = index
            card.innerHTML = `<div>
                                  <div class="card-title">
                                <p>${val.title}</p>
                                <div>
                                    <button class="blue" id="edit"><img class="icon"
                                            src="${edit}"></button>
                                    <button class="red">X</button>
                                </div>
                            </div>
                            <p>${val.date}</p>
                            <p>${val.descr}</p>
                            <p class="${val.priority}">${val.priority} priority</p>

                        </div>`
            cardContainer.appendChild(card)
        }
    }
    return { populateDOM };
}