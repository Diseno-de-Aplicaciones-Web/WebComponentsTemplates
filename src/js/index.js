// Products: [description, stock, price]
const products = [
    ["Bicicleta", 2, 349.99],
    ["Sombrilla", 12, 32.99],
    ["Raqueta", 19, 12.99]
];

const productsWrapper = document.querySelector("#productsWrapper");

templateToElement("#productRow","product-row","row");

for ( item of products ) {
    const product = document.createElement("product-row");
    product.innerHTML = `
        <span slot="description">${item[0]}</span>
        <span slot="stock">${item[1]}</span>
        <span slot="price">${item[2]}</span>
    `
    productsWrapper.appendChild(product)
}

