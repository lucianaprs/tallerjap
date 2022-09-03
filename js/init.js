const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
let cats = localStorage.getItem("catID");
const categories = "https://japceibal.github.io/emercado-api/cats_products/" + cats + ".json";
fetch ("https://japceibal.github.io/emercado-api/cats_products/" + cats + ".json")
.then(response=>response.json())
.then(datos=>{
    let cats = document.getElementById('cat-list-container');
    for (let dato of datos.products){
        console.log(datos);
        cats.innerHTML += `
        <img src=${dato.image} class="imagen-producto"> 
        <h4 class="titulo">${dato.name}</h4>
        <span class="precio">${dato.cost} ${dato.currency}</span>
        <p class="descripcion">${dato.description}</p>
        <small class="text-muted">${dato.soldCount} artículos </small>
        <hr>
        `
    }

})

