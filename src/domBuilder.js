import { getStoredData, addItem, modifyItem } from "./localStorage.js"
// import edit from "./edit.svg"

export default function populateLists() {
    const listItems = getStoredData()
    console.log(listItems)
    for (let index = 0; index < listItems.length; index++) {
        const sideContainer = document.querySelector(".side-container")
        const newList = document.createElement("button")
        newList.textContent = `${listItems[index].listName}`
        newList.dataset.index = index
        sideContainer.prepend(newList)
    }
}

export function populateItems() {
    const card = document.createElement("div")
    const cardContainer = document.querySelector(".card-container")
    card.dataset.index = index
    card.classList.add("card")
    card.innerHTML = `<div>
                              <div class="card-title">
                            <p>${listItems[index]["items"][index].title}</p>
                            <div>
                                <button class="blue" id="edit"><img class="icon"
                                        src="./edit.svg"></button>
                                <button class="red">X</button>
                            </div>
                        </div>
                        <p>${listItems[index]["items"][index].date}</p>
                        <p>${listItems[index]["items"][index].descr}</p>
                        <p class="${listItems[index]["items"][index].priority}">${listItems[index]["items"][index].priority} priority</p>

                    </div>`
    cardContainer.prepend(card)
}

populateLists();
