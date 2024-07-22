const LocalStorage = (function () {
    const storeArray = (array) => {
        const myObject = Object.assign({}, array)
        localStorage.setItem("todo", JSON.stringify(myObject));
    }
    const getStoredData = () => {

        if (!localStorage.getItem("todo")) {
            const defaultArray = [{ listName: "New List", title: "", date: "", descr: "", priority: "normal" }]
            storeArray(defaultArray);
            return Object.assign({}, defaultArray);
        }
        else {
            // gets localStorage value, converts to object and then returns to array
            const array = Object.values(JSON.parse(localStorage.getItem("todo")))
            return array;
        }
    }
    const addData = (newItem) => {
        const stored = getStoredData();
        stored.push(newItem);
        storeArray(stored);
    }

    const modifyData = (index, key, value) => {
        const stored = getStoredData();
        stored[index][key] = value;
        storeArray(stored);
    }
    return { getStoredData, addData, modifyData }
})();