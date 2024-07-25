import { addList } from "./list.js"
import { getStoredData, deleteItem, deleteList, modifyItem } from "./localStorage.js"
// import edit from "./edit.svg"

function populateLists() {
    const lists = getStoredData()
    for (let index = 0; index < lists.length; index++) {
        const sideContainer = document.querySelector(".side-container")
        const newList = document.createElement("button")
        newList.textContent = `${lists[index].listName}`
        newList.dataset.index = index
        newList.addEventListener("click", populateItems)
        sideContainer.prepend(newList)
    }
}
function clearCardContainer() {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = ""

}

function populateItems(e) {
    clearCardContainer();

    const listIndex = e.target.dataset.index
    const listItems = getStoredData()[listIndex].items;
    const cardContainer = document.querySelector(".card-container")
    const containerTitle = document.querySelector(".container-title")
    containerTitle.textContent = getStoredData()[listIndex].listName
    cardContainer.dataset.list = listIndex

    for (let index = 0; index < listItems.length; index++) {
        const card = document.createElement("div")
        card.dataset.item = index
        card.dataset.list = listIndex

        card.classList.add("card")
        card.innerHTML = `<div>
                              <div class="card-title">
                            <p>${listItems[index].title}</p>
                            <div>
                                <button class="blue" id="edit"><img id="edit" class="icon"
                                        src="./edit.svg"></button>
                                <button id ="del" class="red">X</button>
                            </div>
                        </div>
                        <p>${listItems[index].date}</p>
                        <p>${listItems[index].descr}</p>
                        <p class="${listItems[index].priority}">${listItems[index].priority} priority</p>

                    </div>`
        cardContainer.prepend(card)
    }
    //create new item button
    const card = document.createElement("div")
    card.dataset.list = listIndex
    card.classList.add("card")
    const newBtn = document.createElement("button")
    newBtn.id = "new-item"
    newBtn.dataset.list = listIndex
    newBtn.textContent = "+"
    card.appendChild(newBtn);
    cardContainer.appendChild(card)
}


const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", (e) => {
    if (e.target.id === "edit") {
        const card = e.target.closest(".card"); // Find the parent card element
        const title = card.querySelector(".card-title p").textContent;
        const date = card.querySelector("p:nth-child(3)").textContent;
        const descr = card.querySelector("p:nth-child(4)").textContent;
        const priority = card.querySelector(".normal").textContent;
        const toDo = document.querySelector(".todo")

        const formTitle = document.querySelector('#title');
        const formDate = document.querySelector('#date');
        const formDescr = document.querySelector('#descr');
        const formPriority = document.querySelector('#priority');
        toDo.classList.add("blurred")
        form.classList.remove("hidden")
        formTitle.value = title;
        formDate.value = date; //convert this to the correct format
        formDescr.value = descr;
        formPriority.value = priority;

    }
});

//card edit button function
cardContainer.addEventListener("click", (e) => {
    if (e.target.id === "edit") {
        const card = e.target.closest(".card"); // Find the parent card element
        const title = card.querySelector(".card-title p").textContent;
        const date = card.querySelector("p:nth-child(3)").textContent;
        const descr = card.querySelector("p:nth-child(4)").textContent;
        const priority = card.querySelector(".normal").textContent;
        const toDo = document.querySelector(".todo")

        const formTitle = document.querySelector('#title');
        const formDate = document.querySelector('#date');
        const formDescr = document.querySelector('#descr');
        const formPriority = document.querySelector('#priority');
        toDo.classList.add("blurred")
        form.classList.remove("hidden")
        formTitle.value = title;
        formDate.value = date; // convert this to the correct format
        formDescr.value = descr;
        formPriority.value = priority;

    }
});

//card delete button function
cardContainer.addEventListener("click", (e) => {
    if (e.target.id === "del") {
        const card = e.target.closest(".card"); // Find the parent card element
        const listIndex = card.dataset.list
        const itemIndex = card.dataset.item
        deleteItem(listIndex, itemIndex);
        card.remove();
    }
});

// pop form to add item
cardContainer.addEventListener("click", (e) => {
    if (e.target.id === "new-item") {
        const card = e.target.closest(".card"); // Find the parent card element
        listNumber = e.target.dataset.list

        const todo = document.querySelector(".todo")
        form.classList.remove("hidden")
        todo.classList.add("blurred")
    }
});
const saveBtn = document.getElementById("save-item")
saveBtn.addEventListener("click", storeItem)
function storeItem() {
    const title = card.querySelector(".card-title p").textContent;
    const date = card.querySelector("p:nth-child(3)").textContent;
    const descr = card.querySelector("p:nth-child(4)").textContent;
    const priority = card.querySelector(".normal").textContent;

}
// add new list
//delete list

populateLists();

