const mailer = require('nodemailer')
const util = require('../util')
const config = require('./config').mailTask



class MailTask {
    constructor(config) {
        this.config = config
        this.transporter = mailer.createTransport(this.config.transportOptions)
    }

    send() {
        this.transporter.sendMail(this.config.mailOptions, err => {
            if(err) throw err
            console.log('Email sucessfully sent');
            if(this.config.log) {
                util.mailLog(`Email sucessfully sent: ${this.config.mailOptions.to}@${new Date().toLocaleString()}`)
            }
        })

    }
}

module.exports = new MailTask()