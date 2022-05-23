document.getElementById("add_more_product").addEventListener("click", showProduct)
function showProduct() {
    window.location = "index.html"
}


var inventory = JSON.parse(localStorage.getItem("products")) || [];
display(inventory);

function display(inventory) {

    inventory.map(function (elem, index) {


        var box = document.createElement("div");
        var type = document.createElement("h3");
        var desc = document.createElement("h3");
        var price = document.createElement("h3");
        var image = document.createElement("img");
        var remove = document.createElement("button");

        box.setAttribute("class", "box")
        image.setAttribute("class", "image")

        type.innerText = elem.type;
        desc.innerText = elem.desc;
        price.innerText = "$ " + elem.price;
        image.src = elem.image;

        remove.innerText = "Remove Product"
        remove.setAttribute("id", "remove_product");
        remove.addEventListener("click", del)


        box.append(image, type, desc, price, remove)
        document.getElementById("all_products").append(box);

        function del() {
            document.getElementById("all_products").innerHTML = null;
            inventory.splice(index, 1)
            localStorage.setItem("products", JSON.stringify(inventory));
            display(inventory);
            // window.location.reload();
            console.log("Delete trigger")

        }

    });



}
