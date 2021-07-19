const fs = require('fs')
const config = require('./config.json').fTask

class FTask {
    constructor(config) {
        this.config = config
    }

    add() {
        fs.writeFile(this.config.add.path /**+ Math.round(Math.random() * 10)*/, this.config.add.data, this.config.add.encoding, err => {
            if (err) throw err
            console.log('add done');
        })
    }

    del() {
        fs.unlink(this.config.del.path, err => {
            if (err) throw err
            console.log('del done');
        })
    }

    getConfig() {
        return this.config
    }
}

module.exports = new FTask(config)