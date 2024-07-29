
export function createNewList() {
    const list = {};
    list["listName"] = "New list";
    list["items"] = [];

    return list;
}
export function addList(todos, list) {
    todos.push(list)
    return todos;
}
