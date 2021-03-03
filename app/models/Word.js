class Word {
    constructor(word) {
        this._word = word;

        Object.freeze();
    }

    get word() {
        return this._word;
    }
}