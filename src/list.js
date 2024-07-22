export default function createList(title = "New list", date = "2024-07-22T19:30", descr = "", priority = "normal") {
    this.title = title
    this.date = date
    this.descr = descr
    this.priority = priority
    return { title, date, descr, priority }

}