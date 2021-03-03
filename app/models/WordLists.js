class WordList {
    constructor() {
        this._wordList = [];
    }

    init(text) {
        this._buildWord(text);
    }

    _buildWord(text) {
        let wordsFactory = new WordsFactory();

        let words = wordsFactory.create(text);

        this._wordList = words;
    }

    //Fisher-Yates shuffle algorithm
    _shuffle(array) {
        let currentIndex = array.length, buffer, randomIndex;
        console.log(array);

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random * currentIndex);
            currentIndex--;

            buffer = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = buffer;
        }
        console.log(array)
        return array;
    }

    get words() {
        return [].concat(this._wordList);
    }
}