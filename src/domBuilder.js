
import { getStoredData, deleteItem, addItem, modifyItem } from "./localStorage.js"
// import edit from "./edit.svg"

function populateLists() {
    const lists = getStoredData()
    for (let index = 0; index < lists.length; index++) {
        const sideContainer = document.querySelector(".side-container")
        const newList = document.createElement("button")
        newList.textContent = `${lists[index].listName}`
        newList.dataset.list = index
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

    const listIndex = e.target.dataset.list
    const listItems = getStoredData()[listIndex].items;
    const cardContainer = document.querySelector(".card-container")
    const containerTitle = document.querySelector(".container-title")
    containerTitle.textContent = getStoredData()[listIndex].listName
    cardContainer.dataset.list = listIndex

    for (let index = 0; index < listItems.length; index++) {
        createCard(index, listIndex)
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

function createCard(itemIndex, listIndex) {
    // const cardContainer = document.querySelector(".card-container")
    const card = document.createElement("div")
    // const listIndex = cardContainer.dataset.list
    card.dataset.item = itemIndex
    card.dataset.list = listIndex
    const stored = getStoredData()
    const listItems = stored[listIndex].items;


    card.classList.add("card")
    card.innerHTML = `<div>
                          <div class="card-title">
                        <p>${listItems[itemIndex].title}</p>
                        <div>
                            <button class="blue" id="edit"><img id="edit" class="icon"
                                    src="./edit.svg"></button>
                            <button id ="del" class="red">X</button>
                        </div>
                    </div>
                    <p>${listItems[itemIndex].date}</p>
                    <p>${listItems[itemIndex].descr}</p>
                    <p class="${listItems[itemIndex].priority}">${listItems[itemIndex].priority} priority</p>

                </div>`
    cardContainer.prepend(card)
}


const cardContainer = document.querySelector(".card-container");

cardContainer.addEventListener("click", (e) => {
    if (e.target.id === "edit") {
        const card = e.target.closest(".card"); // Find the parent card element
        const title = card.querySelector(".card-title p").textContent;
        const date = card.querySelector("p:nth-child(2)").textContent;
        const descr = card.querySelector("p:nth-child(3)").textContent;
        const priority = card.querySelector("p:nth-child(4)").textContent;
        const toDo = document.querySelector(".todo")
        const form = document.querySelector("form")


        const formTitle = document.querySelector('#title');
        const formDate = document.querySelector('#date');
        const formDescr = document.querySelector('#descr');
        const formPriority = document.querySelector('#priority');
        form.dataset.list = card.dataset.list
        form.dataset.item = card.dataset.item
        toDo.classList.add("blurred")
        form.classList.remove("hidden")
        formTitle.value = title;
        formDate.value = date; //convert this to the correct format
        formDescr.value = descr;
        formPriority.value = priority;


    }
});

//card edit button function
// cardContainer.addEventListener("click", (e) => {
//     if (e.target.id === "edit") {
//         const card = e.target.closest(".card"); // Find the parent card element
//         const title = card.querySelector(".card-title p").textContent;
//         const date = card.querySelector("p:nth-child(3)").textContent;
//         const descr = card.querySelector("p:nth-child(4)").textContent;
//         const priority = card.querySelector("p:nth-child(4)").textContent;
//         const toDo = document.querySelector(".todo")

//         const formTitle = document.querySelector('#title');
//         const formDate = document.querySelector('#date');
//         const formDescr = document.querySelector('#descr');
//         const formPriority = document.querySelector('#priority');
//         toDo.classList.add("blurred")
//         form.classList.remove("hidden")
//         formTitle.value = title;
//         formDate.value = date; // convert this to the correct format
//         formDescr.value = descr;
//         formPriority.value = priority;

//     }
// });

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
        const todo = document.querySelector(".todo")
        const form = document.querySelector("form")
        form.classList.remove("hidden")
        todo.classList.add("blurred")
    }
});

const saveBtn = document.getElementById("save-item")
saveBtn.addEventListener("click", storeItem)
function storeItem(e) {
    e.preventDefault()
    const formTitle = document.querySelector('#title');
    const formDate = document.querySelector('#date');
    const formDescr = document.querySelector('#descr');
    const formPriority = document.querySelector('#priority');

    const cardContainer = document.querySelector(".card-container")
    const listIndex = cardContainer.dataset.list
    const form = document.querySelector("form")
    const toDo = document.querySelector(".todo")
    const newItem = { title: formTitle.value, date: formDate.value, descr: formDescr.value, priority: formPriority.value };

    if (form.dataset.list !== undefined) {
        modifyItem(form.dataset.list, form.dataset.item, newItem)
        const card = document.querySelectorAll(`[data-item="${form.dataset.item}"]`)[0]
        const cardTitle = card.querySelector(".card-title p")
        const cardDate = card.querySelector("p:nth-child(2)")
        const cardDescr = card.querySelector("p:nth-child(3)")
        const cardPriority = card.querySelector("p:nth-child(4)")
        cardTitle.textContent = formTitle.value
        cardDate.textContent = formDate.value
        cardDescr.textContent = formDescr.value
        cardPriority.textContent = formPriority.value + " priority"
        cardPriority.classList.remove(...cardPriority.classList)
        cardPriority.classList.add(`${formPriority.value}`)

    }
    // if it doesnt exist
    else {
        addItem(newItem, listIndex)
        const itemIndex = getStoredData()[listIndex].items.length - 1
        createCard(itemIndex, listIndex)
    }
    delete form.dataset.list
    delete form.dataset.item
    form.classList.add("hidden")
    toDo.classList.remove("blurred")
}
// add new list
//delete list

populateLists();

