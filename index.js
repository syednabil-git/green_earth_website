// All categories
const loadAllCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayCategories(json.categories));
};

//Spinner control
function showSpinner() {
  document.getElementById("spinner").classList.remove("hidden");
}

function hideSpinner() {
  document.getElementById("spinner").classList.add("hidden");
}


// Load individual category
const loadCategory = (id) => {
   showSpinner(); 
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.plants))
    .finally(() => hideSpinner()); 
};

const displayCategory = (categorys) => {
  const categoryContainer = document.getElementById("plants-container");
  categoryContainer.innerHTML = "";
  categorys.forEach((cate) => {
    const categoryCard = document.createElement("div");
    categoryCard.innerHTML = `
      <div class="card bg-base-100 w-auto shadow-sm h-[600px]">
        <figure class="px-5 pt-5">
          <img
            src="${cate.image}"
            alt="Shoes"
            class="rounded-md h-[400px] w-[800px]" />
        </figure>
        <div class="card-body">
          <h2 class="card-title tree-name">${cate.name}</h2>
          <p>${cate.description}</p>
          <div class="flex justify-between items-center">
            <div class="flex justify-between items-center w-[80px]">
              <p class="font-bold bg-green-100 rounded-xl text-center text-green-600">${cate.category}</p>
            </div>
            <div><p class="tree-price">${cate.price}</p></div>
          </div>
        </div>
        <div class="px-5">
          <button class="add-to-cart btn w-full rounded-2xl bg-green-700 text-white font-semibold">Add to Cart</button>
        </div>
      </div>
    `;
    categoryContainer.append(categoryCard);
  });
};

let activeCategoryId = null; // Track the currently active category

const displayCategories = (categories) => {
  const levelCatagories = document.getElementById("level-catagories");
  levelCatagories.innerHTML = `
    <h1 class="font-bold text-xl mb-3">Categories</h1>
    <button onclick="handleCategoryClick('all')" id="cat-all"
       class="font-semibold mb-3 px-2 py-1 rounded cursor-pointer transition hover:bg-green-200">
       All Trees
    </button>
  `;

  for (let category of categories) {
    const btn = document.createElement("p");
    btn.textContent = category.category_name;
    btn.className =
      "mb-2 px-2 py-1 rounded cursor-pointer transition-transform duration-300 ease-in-out hover:bg-green-200 hover:scale-105";
    btn.id = `cat-${category.id}`;

    btn.addEventListener("click", () => handleCategoryClick(category.id));

    levelCatagories.appendChild(btn);
  }
};

function handleCategoryClick(id) {
  // Load category data
  if (id === "all") {
    loadAllCategories(); // or your function to show all trees
  } else {
    loadCategory(id);
  }

  // Remove active style from all category buttons
  const allBtns = document.querySelectorAll("#level-catagories p");
  allBtns.forEach((btn) => btn.classList.remove("bg-green-600", "text-white"));

  // Add active style to the clicked button
  const activeBtn = document.getElementById(`cat-${id}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-green-600", "text-white");
  }

  // Store active category id
  activeCategoryId = id;
}
loadAllCategories();

// All plants load
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => displayPlants(json.plants));
};
//modal
const loadPlantDetails = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details =await res.json();
  displayPlantDetails(details.plants);
};
// All plants 
const displayPlantDetails =(detail) =>{
console.log(detail);
const detailsBox = document.getElementById("details-container");
detailsBox.innerHTML = `
<div>
      <h3 class="text-xl font-bold mb-3">Mango Tree</h3>
    <img class="rounded-lg h-[300px] w-[500px]" src="${detail.image}">
    <div class="flex items-center mt-3 mb-2">
      <div>
      <p class="font-bold">Category : </p>
    </div>
      <div class="ml-2">${detail.name}</div>
  </div>
    <div class="flex items-center mb-2">
      <div>
      <p class="font-bold">Price:</p>
    </div>
      <div class="ml-2">${detail.price}</div>
    </div>
    <div class="flex mb-2">
      <div>
      <p class="font-bold">Description:</p>
    </div>
      <div class="ml-2">${detail.description}</div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
    </div>
`;
document.getElementById("my_modal_5").showModal();
};
// alert message 
function showAlert(message) {
  const alertModal = document.getElementById("alertModal");
  document.getElementById("alertText").textContent = message;
  alertModal.showModal();
}

//card
const displayPlants = (plants) => {
  const levelPlants = document.getElementById("plants-container");
  levelPlants.innerHTML = "";
  for (let plant of plants) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <div class="card bg-base-100 w-auto shadow-sm h-[600px]">
        <figure class="px-5 pt-5">
          <img
            src="${plant.image}"
            alt="Shoes"
            class="rounded-md h-[400px] w-[800px]" />
        </figure>
        <div class="card-body">
          <h2 onclick="loadPlantDetails(${plant.id})" class="card-title tree-name">${plant.name}</h2>
          <p>${plant.description}</p>
          <div class="flex justify-between items-center">
            <div class="flex justify-between items-center w-[80px]">
              <p class="font-bold bg-green-100 rounded-xl text-center text-green-600">${plant.category}</p>
            </div>
            <div><p class="tree-price">${plant.price}</p></div>
          </div>
        </div>
        <div class="px-5">
          <button class="add-to-cart btn w-full rounded-2xl bg-green-700 text-white font-semibold">Add to Cart</button>
        </div>
      </div>`;
    levelPlants.append(btnDiv);
  }
};

loadAllPlants();


// Your cart section 
document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".your-cart");
  const totalDisplay = document.getElementById("cart-total");
  let cart = [];

  // Function to update cart display
  function updateCart() {
    const oldItems = cartContainer.querySelectorAll(".cart-item");
    oldItems.forEach(item => item.remove());

    let total = 0;

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "flex", "justify-between", "items-center", "bg-green-50", "p-2", "rounded-lg", "mb-2");

      cartItem.innerHTML = `
        <div>
          <h2 class="font-bold text-gray-800">${item.name}</h2>
          <p class="text-sm text-gray-600">$${item.price} × ${item.quantity}</p>
        </div>
        <button class="remove-btn text-red-500 text-lg font-bold hover:text-red-700" data-index="${index}">❌</button>
      `;

      cartContainer.insertBefore(cartItem, document.getElementById("total-price"));
      total += item.price * item.quantity;
    });

    totalDisplay.textContent = `$${total}`;
  }

  //  Event Delegation for dynamically added buttons
  document.body.addEventListener("click", function (e) {
    // Add to Cart
    if (e.target.classList.contains("add-to-cart")) {
      const card = e.target.closest(".card");
      const name = card.querySelector(".tree-name").textContent;
      const price = parseInt(card.querySelector(".tree-price").textContent);

      const existingItem = cart.find(item => item.name === name);

     if (existingItem) {
      existingItem.quantity++;
      showAlert(`${name} quantity updated in your cart!`);
}    else {
      cart.push({ name, price, quantity: 1 });
      showAlert(`${name} added to your cart!`);
}
      updateCart();
    }

    // Remove Item
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      updateCart();
    }
  });
});

