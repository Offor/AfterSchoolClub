var webstore = new Vue({
    el: "#App",
    data: {
        sitename: "Vue",
        show: true,
        products: [
            {
                id: 001,
                subject: "Maths",
                location: "London",
                price: 100,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 002,
                subject: "English",
                location: "Manchester",
                price: 80,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 003,
                subject: "Physics",
                location: "Egbeda",
                price: 40,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 004,
                subject: "Social",
                location: "Sunderland",
                price: 40,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 005,
                subject: "Civic",
                location: "Tunderland",
                price: 40,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 006,
                subject: "Gov",
                location: "London",
                price: 100,
                spaces: 5,
                image: "maths.jpg"
            },
            {
                id: 007,
                subject: "Literature",
                location: "Manchester",
                price: 80,
                spaces: 5,
                image: "maths.jpg"
            },
            
        ],
        cart: [],
        showProduct: true,
        SelectedCategory: 'All',
        ArrangeOrder: true,
        status: false
        
    },

    methods: {
        addToCart(product) {
            this.cart.push(product.id);

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

        reverseItems() {
            return this.products.slice().reverse();
        }

        //  changeSort() {
        //     let subjectsArray = this.products.slice(0);
        //     function compare(a, b) {
        //         if (a.price > b.price) 
        //             return 1;
        //         if (a.price < b.price)
        //         return -1;
        //         return 0;
               
        //     }
        //     return subjectsArray.sort(compare);
        // }
        
    },

    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },

        isDisabled: function() {
            return !this.status;

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

        filteredData: function() {
            let vm = this;
            let category = vm.SelectedCategory;
            if(category === "All") {
                return vm.products;
            } else {
                let subjectsArray = this.products.slice(0);
                if(category === "subject") {
                    console.log('getting here!')
                    function compare(a, b) {
                        if (a.subject > b.subject)
                            return 1;
                        if (a.subject < b.subject)
                            return -1;
                        return 0;
                    }
                    return subjectsArray.sort(compare);
                } else {
                    let priceArray = this.products.slice(0);
                    if(category === "price") {
                        function compare(pa, pb) {
                            if (pa.price > pb.price)
                                return 1;
                            if (pa.price < pb.price)
                                return -1;
                            return 0;
                        }
                        return priceArray.sort(compare);
                    } else {
                        let locationArray = this.products.slice(0);
                        if(category === "location") {
                            function compare(la,lb) {
                                if (la.location > lb.location)
                                    return 1;
                                if (la.location < lb.location)
                                    return -1;
                                return 0;
                            }
                            return locationArray.sort(compare);
                        } else {
                            let spaceArray = this.products.slice(0);
                            if(category === "space") {
                                function compare(sa, sb) {
                                    if (sa.spaces > sb.spaces) {
                                        return 1;
                                    }
                                    if (sa.spaces < sb.spaces) {
                                        return -1
                                    }
                                    return 0;
                                }
                                return spaceArray.sort(compare)
                            }
                            
                        } 
                    }
                }
                
             }       
         },

         filteredPeoples: function() {
            var vm = this;
             var category = vm.SelectedCategory;
             if(category === "All") {
                 return vm.products;
            } else {
                return vm.products.filter(function(type) {
                     return type.category === category;
                 });
             }       
         },

        
        
    }   
});