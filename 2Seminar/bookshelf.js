class bookshelf {
    #books;

    constructor() {
        this.#books = [];
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

let book = new bookshelf();
book.addBook("lol")
book.showAll()
book.deliteBook("lol")
book.showAll()
book.hasBook("lol")