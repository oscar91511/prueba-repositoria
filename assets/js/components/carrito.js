let products = []
let total = 0;

function add(product, price) {
    
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}