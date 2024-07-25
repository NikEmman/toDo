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
export const addItem = (newItem, list) => {
    const stored = getStoredData();
    stored[list].items.push(newItem);
    storeList(stored);
}
//needs fix
export const modifyItem = (list, item) => {
    const stored = getStoredData();
    stored[list][key] = value;
    storeList(stored);
}

