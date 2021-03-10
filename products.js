var webstore = new Vue({
    el: "#App",
    data: {
        sitename: "Vue",
        ascending: true,
        sortBy: 'alphabetically',
        sortP: null,
        products: [
            {
                id: 001,
                subject: "Maths",
                location: "London",
                price: "$100",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 002,
                subject: "English",
                location: "Manchester",
                price: "$80",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 003,
                subject: "Physics",
                location: "Sunderland",
                price: "$40",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 004,
                subject: "Social",
                location: "Sunderland",
                price: "$40",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 005,
                subject: "Civic",
                location: "Sunderland",
                price: "$40",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 006,
                subject: "Gov",
                location: "London",
                price: "$100",
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 007,
                subject: "Literature",
                location: "Manchester",
                price: "$80",
                spaces: 5,
                image: "maths.jpg"
            },
            
        ],
        cart: [],
        showProduct: true,
        filterText: '',
    },

    methods: {
        addToCart(product) {
            this.cart.push(product.id)
        },

        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },

        canAddToCart(product) {
            return product.spaces > this.cartCount(product.id);
        },

        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if(this.cart[i] === id){
                    count++;
                }
                
            }         
            return count; 
        },

        
    },

    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },

        sortedProducts() {
            let productsArray = this.products.slice(0);
            function compare(a, b) {
                if (a.price > b.price) 
                    return 1;
                if (a.price < b.price)
                return -1;
                return 0;
               
            }
            return productsArray.sort(compare);
        },

        sortedSubject() {
            let productsArray = this.products.slice(0);
            function compare(a, b) {
                if (a.subject > b.subject) 
                    return 1;
                if (a.subject < b.subject)
                return -1;
                return 0;
               
            }
            return productsArray.sort(compare);
        }
    }   
});