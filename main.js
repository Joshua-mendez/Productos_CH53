const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";
const ulMenu = document.getElementById("ulMenu");


function getData(cat){
     const options = {"method": "GET"}; 
  fetch(URLMain+cat, options)
      .then((response) => {
        console.log(response);
        response.json().then((res)=>{
          // console.log(res.length);
          // console.log(res[0].title);
          createCard(res);
        });
      })
      .catch((err)=> {
        main.insertAdjacentHTML("beforeend",
                  `<div class="alert alert-danger" role="alert">
                      ${err.menssage}
                   </div>`);
      });
}

function getCategories(){
  const options = {"method": "GET"}; 
fetch(URLMain+"categories/", options)
   .then((response) => {
     response.json().then((res)=>{
       //console.log("categories", options);
         res.forEach((cat)=>{
         ulMenu.insertAdjacentHTML("afterbegin", 
         `<li><a class="dropdown-item" onclick="getData('category/${cat.replace("'","%27")}');">${cat}</a></li>`);
         });
     });
   })
   .catch((err)=> {
     main.insertAdjacentHTML("beforeend",
               `<div class="alert alert-danger" role="alert">
                   ${err.menssage}
                </div>`);
   });
}
getCategories();
getData("");

function createCard(prods) {
  main.innerText="";
    for(let i = 0; i<prods.length; i++){
      main.insertAdjacentHTML("beforeend",
        `<div class="card" style="width: 18rem; padding: 10px;">
           <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}">
           <div class="card-body">
           <h5 class="card-title">${prods[i].title}</h5>
           <p class="card-text">${prods[i].description}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`);
    }
}//createCards