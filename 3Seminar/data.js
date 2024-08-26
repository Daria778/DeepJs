const reviewsEl = document.querySelector('.reviews');
const formEl = document.querySelector('form');
const key = "key";
const value = []

if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(value))
}
const newData = (firstValue, secondValue) => {
    let k = JSON.parse(localStorage.getItem(key));
    console.log(k);
    const obj = {
        id: k.length,
        name: firstValue,
        text: secondValue,
    }

    console.log(obj);
    k.push(obj);
    localStorage.setItem(key, JSON.stringify(k));
}
const newReview = (InputValue1, InputValue2) => {
    newData(InputValue1, InputValue2);

}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputElName = document.getElementById("nameOfProduct");
    let inputElText = document.getElementById("review");
    newReview(inputElName.value, inputElText.value);

});

