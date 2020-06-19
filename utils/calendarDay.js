const request = require('postman-request')

const calendarDay = (day, callback) => {
    const url = '/data'

    request({ url, json: true }, (error, { body } = { }) => {
        if (error) {
            callback('unable to get data', undefined)
        } else {
            callback(undefined, {
                date: apr18
            })
        }
    })

}

module.exports = calendarDay