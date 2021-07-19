const fs = require('fs')

class BaseUtil {
    log(logFile, appendData) {
        fs.appendFile(__dirname + '/log/' + logFile, '\n' + appendData, 'utf8', err => {
            if (err) throw err
            console.log('log file sucessfully generate');
        })
    }
}

class Util extends BaseUtil {
    constructor(){
        super()
    }

    mailLog(appendData) {
        this.log('mail.log', appendData)
    }
}

module.exports = new Util()