export function createItem(title, date, descr, priority) {
    this.title = title;
    this.date = date;
    this.descr = descr;
    this.priority = priority;
    return { title, date, descr, priority };
}

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
