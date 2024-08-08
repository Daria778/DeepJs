const musicCol = [
    {
        title: "Once in a Long, Long While...",
        artist: "Low Roar",
        year: "2017"
    },
    {
        title: "Ichizu",
        artist: "King Gnu",
        year: "2021"
    },
    {
        title: "Mirrorwriting(Street)",
        artist: "Jamie Woon",
        year: "2011"
    }
];

musicCol[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.length,

        next() {
            if (this.current < this.last) {
                return { done: false, value: musicCol[this.current++] }
            }
            else {
                return { done: true }
            }
        }
    }
}


for (let album of musicCol) {
    console.log(album.artist, album.title, album.year);
}



