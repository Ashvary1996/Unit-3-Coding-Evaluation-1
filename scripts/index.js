//store the products array in localstorage as "products"

document.getElementById("show_products").addEventListener("click", showProduct)
function showProduct() {
    window.location = "inventory.html"
}

document.getElementById("add_product").addEventListener("click", addProduct)

var dataArr = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(e) {
    e.preventDefault();


    var data = {
        type: document.getElementById("type").value,
        desc: document.getElementById("desc").value,
        price: document.getElementById("price").value,
        image: document.getElementById("image").value,
    }

    dataArr.push(data);
    document.getElementById("products").innerHTML = null;

    localStorage.setItem("products", JSON.stringify(dataArr));
    window.location.reload();
    // console.log(dataArr);

}
