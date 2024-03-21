const categoryListRef = document.querySelector("#categories")
const categoryItemsRef = categoryListRef.querySelectorAll(".item")
console.log(`Number of categories: ${categoryItemsRef.length}`)

categoryItemsRef.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent
    const itemsQuantity = item.querySelectorAll("li").length

    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${itemsQuantity}`)
})