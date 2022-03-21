async function editFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="products-name"]').value;
  const price = document.querySelector('input[name="price"]').value;
  const stock = document.querySelector('input[name="stock"]').value;
  const storeId = document.querySelector('input[name="store_id"]').value;
  // const filename = document.querySelector('input[name="filename"]').value;
  // const description = document.querySelector('input[name="description"]').value;
  console.log(name);
  console.log(price);

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(id);

  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      name,
      price,
      stock,
      storeId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/api/products");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-products-form")
  .addEventListener("submit", editFormHandler);
// document.querySelector("#1").addEventListener("submit", editFormHandler);
