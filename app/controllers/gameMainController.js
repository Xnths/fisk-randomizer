class gameMainController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._displayScreen = $('display-screen');
        this._wordList = [];

        this._gameMainScreenView = new GameMainScreenView(this._displayScreen);
        this._wordPosition = 0;
    }

    next() {
        this._wordPosition++;
        console.log(this._wordList, this._wordPosition, this._wordList.length)
        if (this._wordPosition >= this._wordList.length) {
            alert("You did every word!");
            location.reload();
            return;
        }
        this._gameMainScreenView.update(this._wordList[this._wordPosition]);
    }

    init(wordList) {
        this._wordList = wordList;
        this._gameMainScreenView.update(this._wordList[this._wordPosition]);
    }
}