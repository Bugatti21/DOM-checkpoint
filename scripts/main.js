// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("item-list");
    const totalPrice = document.getElementById("total");
    
    itemList.addEventListener("click", function(event) {
      const target = event.target;
      const listItem = target.closest("li");
      
      if (target.classList.contains("btn-minus")) {
        adjustQuantity(listItem, -1);
      } else if (target.classList.contains("btn-plus")) {
        adjustQuantity(listItem, 1);
      } else if (target.classList.contains("btn-delete")) {
        deleteItem(listItem);
      } else if (target.classList.contains("btn-like")) {
        toggleLike(target);
      }
      
      calculateTotal();
    });
  });
  
  // Function to adjust the quantity of an item
  function adjustQuantity(listItem, value) {
    const quantityElement = listItem.querySelector(".item-quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity += value;
    
    if (quantity < 0) {
      quantity = 0;
    }
    
    quantityElement.textContent = quantity;
  }
  
  // Function to delete an item
  function deleteItem(listItem) {
    listItem.remove();
  }
  
  // Function to toggle the like button
  function toggleLike(button) {
    button.classList.toggle("active");
  }
  
  // Function to calculate the total price
  function calculateTotal() {
    const itemList = document.getElementById("item-list");
    const totalElement = document.getElementById("total");
    let total = 0;
    
    itemList.querySelectorAll("li").forEach(function(listItem) {
      const quantity = parseInt(listItem.querySelector(".item-quantity").textContent);
      const price = 10; // Replace with the actual price of the item
      
      total += quantity * price;
    });
    
    totalElement.textContent = total;
  }
  