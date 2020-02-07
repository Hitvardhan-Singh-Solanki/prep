'use strict';

window.onload = function() {
  fetchProducts();
};

// --------------Custom Events--------------

function datafetchsuccess(customDetail) {
  return new CustomEvent('datafetchsuccess', { detail: customDetail });
}

function datafetchfailed(error) {
  return new CustomEvent('datafetchfailed', { detail: error });
}

// --------------Data fetching--------------
function fetchProducts() {
  fetch('http://5e3c5993a49e540014dc0233.mockapi.io/products')
    .then(res => {
      return res.json();
    })
    .then(responseData => {
      document.dispatchEvent(datafetchsuccess(responseData));
    })
    .catch(error => {
      document.dispatchEvent(datafetchfailed(error));
    });
}

// --------------Event Listeners--------------
document.addEventListener('datafetchsuccess', function({ detail }) {
  createProcutsListHtml(detail);
  document.getElementById('search').addEventListener(
    'keyup',
    debounce(function(e) {
      const results = searchName(e.target.value, detail);
      createProcutsListHtml(results);
    }, 250)
  );
});

document.addEventListener('datafetchfailed', function({ detail }) {
  console.error('>', detail);
  document.getElementById('error').innerHTML = `<p>${detail.message}</p>`;
  setTimeout(() => {
    document.getElementById('error').innerHTML = '';
  }, 2000);
});

function createProcutsListHtml(detailsList) {
  const lists = detailsList.reduce((acc, obj) => {
    acc += createProductCard(obj);
    return acc;
  }, '');

  document.getElementById('products-grid').innerHTML = lists;
}
