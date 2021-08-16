const fs = require('fs');

const contentPath = './content/content.json'

function save(data) {
    const dataStringfy = JSON.stringify(data)
    return fs.writeFileSync(contentPath, dataStringfy)
}

function load(path) {
    const dataBuffer = fs.readFileSync(path, 'utf-8')
    const dataJson = JSON.parse(dataBuffer)

    return dataJson
}

module.exports = {
    save, load
}