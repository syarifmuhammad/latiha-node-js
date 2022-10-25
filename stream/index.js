/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const path = require('path')
const fs = require('fs')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch {
        console.log("error")
    }
})

readableStream.on('end', () => writableStream.end())