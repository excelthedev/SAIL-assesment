const productContainer = document.getElementById('product-container');

console.log('Js woerking');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let fullDetails = '';
    for (i = 0; i < data.length; i++) {
      fullDetails += `<div class="product-contain" id="product-container">
          <img src="${data[i].image}" alt="image" class="image-fix" />
           <div class="product-info">
            <p class="paragraph" id="product-name">Product Name: ${data[i].title}</p>
             <p class="paragraph">Product Price: ${data[i].price}</p>
            
             <p class="paragraph">Product Category:  ${data[i].category}</p>
         </div>
         </div>`;
    }

    productContainer.innerHTML = fullDetails;
  });

// getDetailsHere = data => {
//   data.map(details => console.log(details));
// };

function getProductDetails() {
  let fullDetails = '';
  for (i = 0; i < data.length; i++) {
    fullDetails += `<div class="product-contain" id="product-container">
          <img src="${data[i].image}" alt="image" class="image-fix" />
           <div class="product-info">
            <p class="paragraph" id="product-name">Product Name:</p>
             <p class="paragraph">Product Price:</p>
             <p class="paragraph">Product Description:</p>
             <p class="paragraph">Product Category:</p>
         </div>
         </div>`;
  }

  // const html = `
  //        <div class="product-contain" id="product-container">
  //         <img src="./img/calculator.jpg" alt="image" class="image-fix" />
  //         <div class="product-info">
  //           <p class="paragraph" id="product-name">Product Name:</p>
  //           <p class="paragraph">Product Price:</p>
  //           <p class="paragraph">Product Description:</p>
  //           <p class="paragraph">Product Category:</p>
  //         </div>
  //       </div>
  //     `;
  // productContainer.innerHTML = html;
}

getProductDetails();
