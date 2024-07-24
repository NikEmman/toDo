export default function myLocalStorage() {
    const storeList = (list) => {
        localStorage.setItem("todo", JSON.stringify(list));
    }
    const getStoredData = () => {
        if (!localStorage.getItem("todo")) {
            const defaultList = { listName: "New List", items: null }
            storeList(defaultList);
            return defaultList;
        }
        else {
            // gets localStorage value, converts to object and then returns to array
            const myTodoList = Object.values(JSON.parse(localStorage.getItem("todo")))
            return myTodoList;
        }
    }
    const addItem = (newItem, list) => {
        const stored = getStoredData();
        stored[list].items.push(newItem);
        storeList(stored);
    }

    const modifyItem = (list, item) => {
        const stored = getStoredData();
        stored[list][key] = value;
        storeArray(stored);
    }
    return { getStoredData, addItem, modifyData }
};