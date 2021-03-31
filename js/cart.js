/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cartItems);
  cart = new Cart(cartItems);
console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementsByTagName('tr').innerHTML = '';
  let tbody = document.getElementsByTagName('tbody');
  tbody [0].textContent=''; ///////////Clearing all of the tr 
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
let table = document.getElementById('cart');


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
for (let i=0; i<cart.items.length; i++){
  let tr = document.createElement('tr');
  table.appendChild(tr);
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deletedTd = document.createElement('td');
  deletedTd.textContent = 'X';
  tr.appendChild(deletedTd);
 
  let quantityTd = document.createElement('td');
 quantityTd.textContent = cart.items[i].quantity;
 tr.appendChild(quantityTd);

  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let addedTd = document.createElement('td');
  addedTd.textContent = cart.items[i].product;
  tr.appendChild(addedTd);

}
}



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
 if (event.target.textContent === 'X') {
   cart.removeItem(event.target.id);
 }
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();