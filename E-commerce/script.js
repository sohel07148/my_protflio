const products = [
    {
      name: 'Haldiram Bhujia',
      price: 50,
      img: 'https://haldiramproducts.com/wp-content/uploads/2021/10/Aloo-Bhujia.png'
    },
    {
      name: 'Haldiram Kaju Katli',
      price: 300,
      img: 'https://haldiramproducts.com/wp-content/uploads/2021/10/Kaju-Katli.png'
    },
    {
      name: 'Haldiram Rasgulla',
      price: 150,
      img: 'https://haldiramproducts.com/wp-content/uploads/2021/10/Rasgulla.png'
    },
    {
      name: 'Haldiram Soan Papdi',
      price: 120,
      img: 'https://haldiramproducts.com/wp-content/uploads/2021/10/Soan-Papdi.png'
    }
  ];
  
  let bag = [];
  
  const productList = document.getElementById('productList');
  
  function renderProducts() {
    productList.innerHTML = '';
    products.forEach((p, index) => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToBag(${index})">Add to Bag</button>
      `;
      productList.appendChild(div);
    });
  }
  
  function addToBag(index) {
    const product = products[index];
    const existing = bag.find(item => item.name === product.name);
    if (existing) {
      existing.qty += 1;
    } else {
      bag.push({ ...product, qty: 1 });
    }
    alert(`${product.name} added to bag.`);
  }
  
  document.getElementById('bagBtn').addEventListener('click', () => {
    const bagItems = document.getElementById('bagItems');
    const totalPrice = document.getElementById('totalPrice');
    bagItems.innerHTML = '';
    let total = 0;
    bag.forEach((item, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.name} x ${item.qty} - ₹${item.price * item.qty}
        <button onclick="removeItem(${idx})">❌</button>
      `;
      total += item.price * item.qty;
      bagItems.appendChild(li);
    });
    totalPrice.textContent = total;
    document.getElementById('bagModal').style.display = 'block';
  });
  
  document.getElementById('closeModal').onclick = function () {
    document.getElementById('bagModal').style.display = 'none';
  };
  
  function removeItem(index) {
    bag.splice(index, 1);
    document.getElementById('bagBtn').click(); // re-open with updated list
  }
  
  renderProducts();
  