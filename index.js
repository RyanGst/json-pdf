const PDFKit = require('pdfkit');

const fs = require('fs');

const { load } = require('./controllers/state');

const pdf = new PDFKit();

async function main() {
    const products = await load('./products.json')

    products.results.map((product, index) => {

        pdf.text(`
        SKU: ${product.sku},
        PRODUTO: ${product.model.name}`);

    })

    pdf.pipe(fs.createWriteStream('output.pdf'));
    
    pdf.end();}

main()