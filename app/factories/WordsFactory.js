class WordsFactory {
    create(text) {
        let lines = text.split('\n');
        let words = [];

        for (let i = 0; i < lines.length; i++) {
            let word = new Word(lines[i]);

            words.push(word);
        }

        return words
    }
}