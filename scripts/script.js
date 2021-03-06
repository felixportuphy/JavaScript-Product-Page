
const appContainer = document.getElementById('app');
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `

<div id="nav-header">
   <div id="home-logo">Quarsh</div>
  
   <div id="main-nav">
   <ul>
   <li><a>Home</a></li>
   <li><a>Shop</a></li>
   <li><a>Services</a></li>
   <li><a>Our story</a></li>
   </ul>

   </div>
   <div class="search-area"> <input type="search" placeholder="Search for Items" class="search-input"><button id="search-btn"><i  class="fa fa-search"></i></button></div>

   <div id="cd-cart-trigger"><img src="Images/cd-cart.svg" alt=""><span id="item-incart">0</span></div>
   </div>

`;
 

const footer = document.createElement('div');
footer.className = 'footer';
footer.innerHTML =  `
<div >
<div class="footer-content">

<ul class="list">
<li>Shop</li>
<li><a>Product catalog</a></li>

</ul>

<ul class="list">
<li>Services</li>
<li><a>Shipping</a></li>
</ul>
<ul class="list">
<li>Help</li>
<li><a>Customer Support</a></li>
</ul>
</div>
<div class="footer-bottom flex">
<div class="flex">
<p>&copy; 2021</p><span>|</span>
<p>All Rights Reserved</p>
</div>
<div class=social-media">
<ul class="flex">
  <li><a><i class="fab fa-facebook-square"></i></a></li>
  <li><a><i class="fab fa-twitter-square"></i></a></li>
  <li><a><i class="fab fa-instagram-square"></i></a></li>
</ul>
</div>

</div>
</div>`;


class Products{
    constructor(id,title,price,stock,description,imageUrl){
        this.id=id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

class ProductItem{
    constructor(product){
        this.product = product;
    }

  
    addToCart(item){
       const items = [];
       
        const prodObj = new ProductsList();
        const prodEl = prodObj.productArray;
             
             
       const Cart = document.querySelector('.cart-content');
       
       
        const itemCart = document.createElement('div');
        itemCart.className ="added-cartItems";
      
        
        

        const [itemObj] = [...prodEl]
         items.push(itemObj)
     
       
   
            
            items.forEach(el=>{
                
               
               
                itemCart.innerHTML=`
                <div class="cart-image"><img src="${el.imageUrl}" alt=""></div>
                <div>${el.title}</div>
                <div>${el.price}</div>
                <div><input type="number"></div>
                <div>${'0.00'}</div>
                <div><button class="del-btn btn"><i class="fas fa-trash-alt"></i></button></div>
                `;
                return el;
            })

         
    
              Cart.insertAdjacentElement("afterend",itemCart);
      

    }

               
    updateNoCartItems(){
        let itemsNo = document.getElementById('item-incart').innerText;

        itemsNo = parseInt(itemsNo) + 1 ;

        document.getElementById('item-incart').innerText = itemsNo;
    }
  
  

    render(){
        const prodItem = document.createElement('div');
        prodItem.className = 'product-item';
        prodItem.innerHTML =`
        <div class="itemContent">
            <div class="image-content"><img src="${this.product.imageUrl}" alt="${this.product.title}"></div>
            <div class="item-des-content">
            <p class="item-desc"><h3 class="title">${this.product.title}</h3></p>
            <p class="item-desc" id="pd-desc">${this.product.description}</p>
            <p class="item-desc"><h3 class="item-price">GHC ${this.product.price}</h3></p>
            <p class="item-desc"><h4 class="item-stock">${this.product.stock} in Stock</h4></p>
          
            <button id=${this.product.id} class="addToCart-btn">Add to Cart</button>
            </div>
        </div>
        
      
      `;

     
      const addToCart = prodItem.querySelector('.addToCart-btn');
      addToCart.addEventListener('click',()=>{
        this.addToCart.bind(this) 
        this.updateNoCartItems()

      });
      
   
       return prodItem;
      
    }
   


}







class ProductsList {
    productArray = [
        new Products('a1','Washing Machine','1224.68',12,'Top quality and energy saving 28kg washing machine to do clean laundry','images/washing-machine1.jpg'),
        new Products('a2','Monarch Watch','65.40',24,'The high quality leather straps and clean dial ensures it is a luxury.','images/watch3.jpg'),
        new Products('a3','Headset','75.52',5,'Enjoy good and pleasant sounds with the new quarsh headset','images/headset1.jpg'),
        new Products('a4','Smart Fridge','1450',10,'The smart double door refrigerator to your home','images/fridge1.jpg'),
        new Products('a5','Black T-shirt','40',3,'The high quality designer brand to add to your collection.','images/black-T-shirt.jpg'),
        new Products('a6','Yellow T-shirt','35',20,'The high quality designer brand to add to your collection','images/yellow-T-shirt.jpg'),
    ]

    renderProducts() {
        
        const prodContainer = document.createElement('div');
        prodContainer.className = 'prodContainer';
      
      
        for(const product of this.productArray){
            const productItem = new ProductItem(product);
           const prod = productItem.render()
           prodContainer.append(prod);
        }
            
     
        appContainer.append(prodContainer);
        return prodContainer;
    }
}



class shoppingCart {
  
    

   itemTotal(){
       let current = this.productArray;
       this.reduce((prev, cur)=>{
          return cur = prev + current.price;
       },0)
   }

        
    showCart (){
        const Cart = document.querySelector('.shopCart-container');
        Cart.className = 'shopCart-container visible invisible';
        // const Cart = document.querySelector('.shopCart-container');
        let results = Cart.classList.toggle('invisible');
        console.log(results);
        
       
    }

    backdrop(){
     
        const backdrop = document.createElement('div');
        backdrop.className = 'backdrop visible invisible';
        backdrop.classList.toggle('invisible');
        appContainer.append(backdrop);
      
        
    }

   

    

    render(){

        
        const shopCart = document.createElement('div');
        shopCart.className = 'shopCart-container visible invisible';
       
            shopCart.innerHTML=`

            <div >
              <div class="cart-head"><h2 >Cart Items</h2></div>
              <div class="cart-content">
                <div><h4>Item</h4></div>
                <div><h4>Item Name</h4></div>
                <div><h4>Price</h4></div>
                <div><h4>Quantity</h4></div>
                <div><h4>Total</h4></div><br>

             </div>
             
              
             <div class=" os-container">
                <div class="flex margin_bottom ">
                    <p>Total:\GHC ${0.00}</p>
                    <button class="order-btn shopCart-btn">Order Now</button>
                </div>
                <div class="flex">
                <button class=" cs-btn shopCart-btn">Continue shopping</button>
                    <button class="co-btn shopCart-btn">Checkout</button>
                </div>
            
             </div>
    
            </div>
            
            `;

        
      
     

        const cart_btn = document.querySelector('#cd-cart-trigger');
        cart_btn.addEventListener("click",()=>{
            this.backdrop();
            this.showCart();
        } );

        const closeCartEl = document.querySelector('body');
        closeCartEl.addEventListener('click', ()=>{
            cart_btn.removeEventListener('click',
             this.showCart,true
            );
        });


        
        return shopCart;

    }
}

class Shop{

    render(){
        const cart = new shoppingCart();
        
        appContainer.append(header);
        const cartEl = cart.render();
        const prodList = new ProductsList();
         const product= prodList.renderProducts();
       
        appContainer.append(cartEl);
        appContainer.append(product);

        // console.log(cartEl);
        appContainer.append(footer);
        // for (const product of renderItems.productArray){
        //     product.getAddToCartBtn.addEventListener('click',)
        // }
    
    }
   
}

const myShop = new Shop();
myShop.render();

// appContainer.append(header);
// const renderItems = new ProductsList();
// renderItems.renderProducts();
// appContainer.append(footer);







