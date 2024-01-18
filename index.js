const input = document.querySelector(".to-do-list .add input");
const addButton = document.querySelector(".to-do-list .add button");
const list = document.querySelector(".to-do-list .list");

addButton.onclick = function(e) {
    if (input.value.length == 0) {
        e.preventDefault();
    } else {
        list.innerHTML += 
        `
        <div class="content">
            <div class="check">
                <label>
                    <input type="checkbox" />
                    <span>${input.value}</span>
                </label>
            </div>
            <div class="cancel">
                x
            </div>
        </div>
        `;
        input.value = "";
        const content = document.querySelectorAll(".to-do-list .list .content");
        const cancelButton = document.querySelectorAll(".to-do-list .list .content .cancel");
        localStorage.setItem("data", list.innerHTML);
        cancelButton.forEach(
            (cancel, index) => {
                cancel.onclick = function() {
                    content[index].remove();
                    localStorage.setItem("data", list.innerHTML);
                }
            }
        )
    }
}

list.innerHTML = localStorage.getItem("data");



const content = document.querySelectorAll(".to-do-list .list .content");
const cancelButton = document.querySelectorAll(".to-do-list .list .content .cancel");
cancelButton.forEach(
    (cancel, index) => {
        cancel.onclick = function() {
            content[index].remove();
            localStorage.setItem("data", list.innerHTML);
        }
    }
)