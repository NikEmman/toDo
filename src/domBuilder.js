import myLocalStorage from "./localStorage.js"
// import edit from "./edit.svg"
export default function domBuilder() {
    const populateDOM = () => {
        const listItems = myLocalStorage().getStoredData()
        for (let index = 0; index < listItems.length; index++) {
            const card = document.createElement("div")
            const cardContainer = document.querySelector(".card-container")
            const sideContainer = document.querySelector(".side-container")
            const newItem = document.createElement("button")
            newItem.textContent = `${listItems[index].listName}`
            sideContainer.prepend(newItem)

            card.dataset.index = index
            card.innerHTML = `<div>
                                  <div class="card-title">
                                <p>${listItems[index].title}</p>
                                <div>
                                    <button class="blue" id="edit"><img class="icon"
                                            src="./edit.svg"></button>
                                    <button class="red">X</button>
                                </div>
                            </div>
                            <p>${listItems[index].date}</p>
                            <p>${listItems[index].descr}</p>
                            <p class="${listItems[index].priority}">${listItems[index].priority} priority</p>

                        </div>`
            cardContainer.prepend(card)
        }
    }
    return { populateDOM };
}
