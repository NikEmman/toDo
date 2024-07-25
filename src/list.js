export default function createItem(title, date, descr, priority) {
    this.title = title;
    this.date = date;
    this.descr = descr;
    this.priority = priority;
    return { title, date, descr, priority };

}
export function createNewList() {
    const list = {};
    list["listName"] = "New list";
    list["items"] = [{ title: "New item", date: "", descr: "", priority: "normal" }];

    return list;
}
export function addItem(list, item) {
    list[items].push(item);
}
export function addList(todos, list) {
    todos.push(list)
    return todos;
}
