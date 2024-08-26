const reviewsEl = document.querySelector(".WatchReviews")

getReview = () => {
    const arr = JSON.parse(localStorage.getItem("key"));
    arr.forEach(element => {
        const reviewCont = document.createElement('div');
        reviewCont.setAttribute("class", "reviewConteiner");
        const nameEl = document.createElement('p');
        nameEl.textContent = element.name;
        const pEl = document.createElement('p');
        pEl.textContent = element.text;
        const deleteEl = document.createElement('button');
        deleteEl.textContent = "Удалить"
        deleteEl.setAttribute("id", element.id);
        deleteEl.setAttribute("class", "delete")
        reviewCont.append(nameEl);
        reviewCont.append(pEl);
        reviewCont.append(deleteEl);
        reviewsEl.append(reviewCont);


    });
}


document.addEventListener("DOMContentLoaded", () => {
    getReview();
})


reviewsEl.addEventListener("click", (e) => {
    let dataJs = JSON.parse(localStorage.getItem("key"));
    const getId = +e.target.getAttribute("id");
    dataJs.forEach(el => {
        if (getId == el.id) {
            dataJs.splice(el.id, 1)
            localStorage.setItem("key", JSON.stringify(dataJs));
            location.reload()
        };
    })
})