class GameMainScreenView extends View {
    constructor(element) {
        super(element);
    }

    _template(model) {
        return `
        <p class='instructions center'>Pass the mouse over the square to reveal the word</p>
        <div class="container container-game-main">
            <p id="p-word"><strong>${model.word}</strong></p>
        </div>
        `
    }
}