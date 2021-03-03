class gameMainController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._displayScreen = $('display-screen');
        this._wordList = [];

        this._gameMainScreenView = new GameMainScreenView(this._displayScreen);
        this._wordPosition = 0;
    }

    next() {
        console.log("oi");
    }

    init(wordList) {
        this._gameMainScreenView.update(wordList[this._wordPosition]);
    }
}