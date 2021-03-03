class gameSettingsController {
    constructor() {
        let $ = document.getElementById.bind(document);

        this._gameSetting = $('txt-game-settings');

        this._text = this._gameSetting.value;

        this._gameMainController = new gameMainController();
        this._wordList = new WordList();
    }

    next() {
        this._gameMainController.next();
    }

    start() {
        this._wordList.init(this._text);
        this._gameMainController.init(this._wordList.words);
    }

}