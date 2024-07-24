export default function myLocalStorage() {
    const storeList = (list) => {
        localStorage.setItem("todo", JSON.stringify(list));
    }
    const getStoredData = () => {
        if (!localStorage.getItem("todo")) {
            const defaultList = { listName0: "New List", items: null }
            storeList(defaultList);
            return defaultList;
        }
        else {

            const myTodoList = JSON.parse(localStorage.getItem("todo"))
            return myTodoList;
        }
    }
    const addItem = (newItem, list) => {
        const stored = getStoredData();
        stored[list].items.push(newItem);
        storeList(stored);
    }
    //needs fix
    const modifyItem = (list, item) => {
        const stored = getStoredData();
        stored[list][key] = value;
        storeArray(stored);
    }
    return { getStoredData, addItem, modifyItem }
};