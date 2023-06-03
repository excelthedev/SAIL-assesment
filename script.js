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
          <img src="./img/calculator.jpg" alt="image" class="image-fix" />
          <div class="product-info">
            <p class="paragraph" id="product-name">Product Name:</p>
            <p class="paragraph">Product Price:</p>
            <p class="paragraph">Product Description:</p>
            <p class="paragraph">Product Category:</p>
          </div>
        </div>
      `;

  productContainer.innerHTML = html;
}

getProductDetails();
