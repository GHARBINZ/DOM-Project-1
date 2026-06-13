
const products = document.querySelectorAll('.card-body .card');
const totalPriceElement = document.querySelector('.total');


products.forEach((product, index) => {
  const quantitySpan = product.querySelector('.quantity');
  const unitPriceElement = product.querySelector('.unit-price');
  const plusBtn = product.querySelector('.fa-plus-circle');
  const minusBtn = product.querySelector('.fa-minus-circle');
  const deleteBtn = product.querySelector('.fa-trash-alt');
  const likeBtn = product.querySelector('.fa-heart');

  
  const unitPrice = parseFloat(unitPriceElement.textContent);

 
  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
      updateTotal();
    });
  }


  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
        updateTotal();
      }
    });
  }

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
     
      product.closest('.card-body').remove();
      updateTotal();
    });
  }

  
  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
     
      likeBtn.classList.toggle('liked');
    });
  }
});


function updateTotal() {
  let total = 0;


  document.querySelectorAll('.card-body .card').forEach((product) => {
    const quantitySpan = product.querySelector('.quantity');
    const unitPriceElement = product.querySelector('.unit-price');

    const quantity = parseInt(quantitySpan.textContent);
    const unitPrice = parseFloat(unitPriceElement.textContent);

    total += quantity * unitPrice;
  });


  totalPriceElement.textContent = total + ' $';
}
