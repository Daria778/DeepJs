const list = new Map();
list.set("Пицца Пеперони", "Виктор");
list.set("Пицца Маргарита", "Виктор");
list.set("Суши Калифорния", "Ольга");
list.set("Суши Филадельфия", "Ольга");
list.set("Тирамису", "Дмитрий");
list.set("Чизкейк", "Дмитрий");


const orders = new Map();
orders.set({ name: "Алексей" }, ["Пицца Пеперони", "Тирамису"])
orders.set({ name: "Мария" }, ["Пицца Маргарита", "Суши Филадельфия"])
const method = (listOfCookers, listOfOrders) => {

    for (let [key, value] of listOfOrders) {
        for (let [name, dishes] of listOfCookers) {
            [value].forEach(el => {
                el.forEach(elem => {
                    if (elem === name) console.log(`${dishes} готовит ${elem}`);
                })
            });
        }
    }
    console.log("Всё готово!");;
}

method(list, orders)

