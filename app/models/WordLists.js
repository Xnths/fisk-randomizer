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

        this._wordList = this._shuffle(words);
    }

    //Fisher-Yates shuffle algorithm
    _shuffle(array) {
        let currentIndex = array.length, buffer, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random * currentIndex);
            currentIndex--;

            buffer = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = buffer;
        }
        return array;
    }

    get words() {
        return [].concat(this._wordList);
    }
}