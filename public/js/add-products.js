async function newFormHandler(event) {
  event.preventDefault();

  //create references to product info on handlebars
  const name = document.querySelector("#products-name").value;
  const price = document.querySelector('input[name="price"]').value;
  const stock = document.querySelector('input[name="stock"]').value;
  const store_id = document.querySelector('input[name="store_id"]').value;

//add new product using submitted data
if (name && price && store_id && stock) {
  const response = await fetch(`/api/products/`, {
    method: "POST",
    body: JSON.stringify({
      name,
      price,
      stock,
      store_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //render page if input is good or give message to user if not good
  if (response.ok) {
    document.location.replace("/products/");
  } else {
    alert(response.statusText);
    console.log("You must answer all questions.");
  }
}
}



document
  .querySelector("#new-products")
  .addEventListener("submit", newFormHandler);
