class WordsFactory {
    create(text) {
        let lines = text.split('\n');
        let words = []
        lines.forEach(word => {
            if (!(word == undefined)) words.push(new Word(word))
        })

        return words;
    }
}