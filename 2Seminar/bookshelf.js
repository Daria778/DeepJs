class Bookshelf {
    #books = [];

    constructor(books) {
        this.#books = books;
        let count = 0;
        this.#books.forEach(elem => {
            this.#books.forEach(el => {
                if (el === elem) {
                    count += 1
                    if (count > 1) {
                        throw new Error("There are duplicates")
                    }
                }
            })
            count = 0;
        })
    }
    addBook = (title) => {
        this.#books.push(title);
    }
    showAll = () => {
        console.log(this.#books);
    }
    deliteBook = (title) => {
        try {
            let b = this.#books.indexOf(title);
            this.#books.splice(b, 1)

        } catch (error) {
            throw new Error("there is no such element")
        }
    }
    hasBook = (title) => {
        if (this.#books.includes(title, 0)) console.log(`${title}'s here`);
        else { console.log("there is no such element"); }
    }
}

const book = new Bookshelf(["1984", "Castle", "Master and Margarita", "Ward №6", "Secret Window"]);
book.showAll();