export default function createItem(title, date, descr, priority) {
    this.title = title;
    this.date = date;
    this.descr = descr;
    this.priority = priority;
    return { title, date, descr, priority };

}
export function createList(num) {
    const list = {};
    list[`listName${num}`] = "New list";
    list["items"] = [];

    return list;
}

