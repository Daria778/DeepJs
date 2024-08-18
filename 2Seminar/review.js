const reviewsEl = document.querySelector('.reviews');
const formEl = document.querySelector('form');

const newReview = (InputValue) => {
    if (InputValue.length < 50 | InputValue.length > 500) {
        throw new Error("Length of your review should be more than 50 and less than 500")
    }
    const pEl = document.createElement('p');
    pEl.textContent = InputValue;
    reviewsEl.append(pEl);
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputEl = document.querySelector("input");
    console.log(inputEl.value);
    newReview(inputEl.value)
});