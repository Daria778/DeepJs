const reviewsEl = document.querySelector(".WatchReviews")

getReview = () => {
    const arr = JSON.parse(localStorage.getItem(key));
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
        reviewCont.append(nameEl);
        reviewCont.append(pEl);
        reviewCont.append(deleteEl);
        reviewsEl.append(reviewCont);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    getReview();
})

