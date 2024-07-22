// export function windowBuilder() {
const editListBtn = document.querySelector("#edit")


const showForm = () => {
    const toDo = document.querySelector(".todo")
    const form = document.querySelector("form")
    const formTitle = document.querySelector('#title');
    const formDate = document.querySelector('#date');
    const formDescr = document.querySelector('#descr');
    const formPriority = document.querySelector('#priority');

    const title = document.querySelector('.card-title p').innerText;
    const date = document.querySelector('.card p:nth-child(2)').innerText;
    const descr = document.querySelector('.card p:nth-child(3)').innerText;
    const priority = document.querySelector('.card p:nth-child(4)').className;
    toDo.classList.add("blurred")
    form.classList.remove("hidden")
    formTitle.value = title;
    formDate.value = date; // You may need to convert this to the correct format
    formDescr.value = descr;
    formPriority.value = priority;
}
editListBtn.addEventListener("click", showForm)

// }
// windowBuilder()