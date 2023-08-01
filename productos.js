const productos = [
    {
      "id": 1,
      "nombre": "Galletas de vainilla",
      "descripción": "Caja de 20 unidades de galletas de vainilla",
      "stock": 20,
      "precio": 500,
      "img": "./assets/Imagenes/productosDefault.jpg",
    },
    {
      "id" : 2 ,
      "nombre" : "Galletas vainilla chocotip" ,
      "descripción" : "Caja de 20 unidades de galletas de vainilla y chispas de chocolate",
      "stock" : 20 , 
      "precio": 600 ,
      "img" : "./assets/Imagenes/productosDefault.jpg",
  },
  {
      "id" : 3 ,
      "nombre" : "Galletas de chocolate" ,
      "descripción" : "Caja de 20 unidades de galletas de chocolate",
      "stock" : 20 , 
      "precio": 650 ,
      "img" : "./assets/Imagenes/productosDefault.jpg",
  },
  {
      "id" : 4 ,
      "nombre" : "Galletas de limon" ,
      "descripción" : "Caja de 20 unidades de galletas de limon",
      "stock" : 20 , 
      "precio": 550 ,
      "img" : "./assets/Imagenes/productosDefault.jpg",
  
  },
  {
      "id" : 5 ,
      "nombre" : "Galletas de naranja" ,
      "descripción" : "Caja de 20 unidades de galletas de naranja",
      "stock" : 20 , 
      "precio": 520 ,
      "img" : "./assets/Imagenes/productosDefault.jpg",
  }
  ];
  
let carrito = [];
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("ventanaModal");


productos.forEach((product) =>{
  let contenido = document.createElement("div");
  contenido.className = "card" ;
  contenido.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p> ${product.descripción}</p>
    <p class="precio">$${product.precio}</p>
    `;
  shopContent.append(contenido);

  let comprar = document.createElement("button");
  comprar.innerText = "Agregar al carrito"
  comprar.className = "AgregarAlCarrito"
  contenido.append(comprar);
  
  comprar.addEventListener("click" , () => {
    carrito.push({
      id : product.id,
      img: product.img,
      nombre: product.nombre,
      descripción: product.descripción,
      precio: product.precio,
    });
    console.log(carrito);
  }
  );
});

verCarrito.addEventListener("click" , () =>{
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader";
  modalHeader.innerHTML = `
  <h1 class="modalTitle"> Carrito de compras </h1>
  `
  modalContainer.append(modalHeader);
  
  const modalButton = document.createElement("div");
  modalButton.className = "modalButton";
  modalButton.innerHTML = `
  <img src="./assets/Imagenes/cancelar.png">
  `;
  modalHeader.append(modalButton);

  carrito.forEach((product) =>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p>${product.descripción}</p>
      <p>${product.precio} $</p>
    `;
    modalContainer.append(carritoContent);
  });

  const total=carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalFooter= document.createElement("div");
  totalFooter.className = "totalFooter";
  totalFooter.innerHTML = `Total a pagar : ${total} $
  `;
  modalContainer.append(totalFooter);
  
})
