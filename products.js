var webstore = new Vue({
    el: '#App',  
    data: {
        sitename: 'After School Club',
        product: {
            id: 001,
            subject: "Maths",
            location: "London",
            price: "$100",
            spaces: 5,
            image: "maths.jpg"
        },
        
        cart: [],
        showProduct: true,
    },  
    methods: {
        addToCart: function() {
            this.cart.push(this.product.id);
           },

           showCheckout() {
               this.showProduct = this.showProduct ? false : true;
           },
           decrement() {
               if(this.spaces === 0 ) return
               this.spaces -= 1
           }
       },
    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },

        canAddToCart: function() {
            return this.product.spaces > this.cartItemCount;
        },

        


      }
   });