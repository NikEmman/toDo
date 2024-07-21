let yourHash = {
    list: { title: "todo", date: "19-02", descr: "short text yes" },
    list2: { title: "todo2", date: "00/10", descr: "blasajskajsk" }
}
let test = JSON.stringify(yourHash)
// undefined
localStorage.setItem("todo", test)
// undefined
let retrievedObject = JSON.parse(localStorage.todo)
// undefined
retrievedObject
// Object { list: {…}, list2: {…} }

retrievedObject.keys
// undefined
let keys = retrievedObject.keys
// undefined
keys
//undefined
retrievedObject[0]
//undefined
retrievedObject.lenght
//undefined
Object.keys(retrievedObject)
//Array [ "list", "list2" ]

