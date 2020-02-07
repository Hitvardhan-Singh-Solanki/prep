function debounce(func, delay) {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

function createProductCard({ id, image, price, brand, color }) {
  return `
          <div id=product-${id} class="product">
              <div><img src=${image} class="product-image" /></div>
              <div>$${price}</div>
              <div>${brand}</div>
              <div>${color}</div>
          </div>
      `;
}

function searchName(searchString, detail) {
  return detail.filter(({ brand, color }) => {
    return (
      brand.toLowerCase().includes(searchString.toLowerCase()) ||
      color.toLowerCase().includes(searchString.toLowerCase())
    );
  });
}
