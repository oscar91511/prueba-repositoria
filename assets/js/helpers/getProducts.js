function getProducts() {

    fetch('products.json')

        .then(function (res) {
           
            return res.json();
        })
        .then(function(data){
            console.log(data)
        })

        .catch(function (error) {
            console.log(error);
        })
}

export default getProducts