import { createNewList, addList } from "./list.js";
const storeTodos = (todos) => {
    localStorage.setItem("todo", JSON.stringify(todos));

}
export const getStoredData = () => {
    if (!localStorage.getItem("todo")) {
        const todos = []
        addList(todos, createNewList())
        storeTodos(todos);
        return todos;
    }
    else {

        const myTodoList = JSON.parse(localStorage.getItem("todo"))
        return myTodoList;
    }
}
export const addItem = (newItem, index) => {
    const stored = getStoredData();
    stored[index].items.push(newItem);
    storeTodos(stored);
}

export const modifyItem = (listIndex, itemsIndex, item) => {
    let stored = getStoredData();
    stored[listIndex].items[itemsIndex] = item;
    storeTodos(stored);
}
export function deleteItem(listIndex, itemIndex) {
    let stored = getStoredData();
    stored[listIndex].items.splice(itemIndex, 1)
    storeTodos(stored);
}
export function deleteList(index) {
    let stored = getStoredData();
    stored.splice(index, 1)
    storeTodos(stored)
}


