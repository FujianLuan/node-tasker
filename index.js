const express = require('express')
const cron = require('node-cron')
const shell = require('shelljs')

const app = express()

const { fTask, mailTask } = require('./task')

cron.schedule(fTask.getConfig().date, function() {
    console.log('------starting------');
    // fTask.add()
    fTask.del()
    mailTask.send()
})

app.listen(3003)