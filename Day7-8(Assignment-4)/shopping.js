
let merch = [
    {
      id: 1,
      name: "pink-shoes",
      size: "m",
      color: "gray",
      price: 8000,
      image: "d1.jpg",
      description: "Classic 3 piece tuxedo",
    },
    {
      id: 2,
      name: "white-shoes",
      size: "M",
      color: "Black",
      price: 6000,
      image: "d2.jpg",
      description: "Black tuxedo from kingsmen",
    },
  
    {
      id: 3,
  
      name: "blue-canvas-shoes",
      size: "l",
      color: "Ash",
      price: 9000,
      image: "d3.jpg",
      description: "Double brested grey suit",
    },
  
    {
      id: 4,
      name: "baby-pink-shoes",
      size: "8",
      color: "Black",
      price: 3000,
      image: "d4.jpg",
      description: "black brouge for formal suiting",
    },
  
    {
      id: 5,
      name: "black-regular-shoes",
      size: "S",
      color: "orange",
      price: 8000,
      image: "d5.jpg",
      description: "Party wear orange tuxedo",
    },
  
    {
      id: 6,
      name: "grey-shoes",
      size: "M",
      color: "black",
      price: 2000,
      image: "d6.jpg",
      description: "Gentlemen swag specs",
    },
    {
      id: 7,
      name: "black-shoes",
      size: "M",
      color: "black",
      price: 7000,
      image: "d7.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 8,
      name: "black-snikkers",
      size: "S",
      color: "blue",
      price: 10000,
      image: "d8.jpg",
      description: "Good looking suit",
    },
    {
      id: 9,
      name: "shoes",
      size: "-",
      color: "blue",
      price: 1200,
      image: "d9.jpg",
      description: "classy Watch",
    },
    {
      id: 10,
      name: "sky-blue-shoes",
      size: "M",
      color: "Henna",
      price: 4000,
      image: "d10.jpg",
      description: "damn looking jacket",
    },
    {
      id: 11,
      name: "red-shoes",
      size: "M",
      color: "black",
      price: 6000,
      image: "d11.webp",
      description: "Black oxford for gentlemen's collection",
    },
    {
      id: 12,
      name: "brownishish-yellow snikkers",
      size: "M",
      color: "Henna",
      price: 12000,
      image: "d12.jpg",
      description: "single brested suit with long coat",
    },
  ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Manners Maketh Man!\ndont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);
