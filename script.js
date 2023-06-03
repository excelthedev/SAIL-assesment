const productContainer = document.getElementById('product-container');

console.log('Js woerking');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => getDetailsHere(data));

getDetailsHere = data => {
  data.map(details => console.log(details));
};

function getProductDetails(showMe) {
  const html = `
        <div class="product-contain" id="product-container">
          <img
            src="${showMe.image}"
            alt="image"
            height="170rem"
            width="100%"
          />
          <div class="product-info">
            <p>Product Name: ${showMe.title} </p>
            <p>Product Price: ${showMe.price}</p>
            <p>Product Description: ${showMe.description}</p>
            <p>Product Category: ${showMe.category}</p>
          </div>
        </div>
      `;

  productContainer.innerHTML = html;
}

getProductDetails();
