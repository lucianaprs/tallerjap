fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
.then(response=>response.json())
.then(datos=>{
    let cars = document.getElementById('cat-list-container');
    for (let dato of datos.products){
        console.log(datos);
        cars.innerHTML += `
        <img src=${dato.image} class="imagen-producto"> 
        <h4 class="titulo">${dato.name}</h4>
        <span class="precio">${dato.cost} ${dato.currency}</span>
        <p class="descripcion">${dato.description}</p>
        <small class="text-muted">${dato.soldCount} artículos </small>
        <hr>
        `
    }

})
