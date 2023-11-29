const searchName = document.getElementById("search-input");
const filterButton = document.querySelectorAll(".filter");
const inputPrice = document.getElementById("input-price");
const searchPrice = document.getElementById("search-price");
const products = document.querySelectorAll(".product-item")
// change active button=======
const changeClass = (filter) =>{
filterButton.forEach( button =>{
if (button.dataset.filter === filter) {
    button.classList.add("active")
}
else{
    button.classList.remove("active");
}
})
};
// search by name===============
const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();

    products.forEach(product => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none"
        }
    })

}

searchName.addEventListener("keyup", searchHandler)
// search by name end===============

// filter products===============
const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    changeClass(filter);
    products.forEach(product => {
        const category = product.dataset.category;
        if (filter === "all") {
            product.style.display = "block";
        }
        else {
            filter===category ? product.style.display = "block" : product.style.display = "none";
        }

    })
}

filterButton.forEach(button => {
    button.addEventListener("click", filterHandler);

})