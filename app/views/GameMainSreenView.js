class GameMainScreenView extends View {
    constructor(element) {
        super(element);
    }

    _template(model) {
        return `
        <div class="container container-game-main">
            <p id="p-word"><strong>${model.word}</strong></p>
        </div>
        `
    }
}