var webstore = new Vue({
    el: "#App",
    data: {
        sitename: "Vue",
        show: true,
        products: [
            {
                id: 01,
                subject: "Maths",
                location: "London",
                price: 100,
                spaces: 5,
                image: "images/maths.jpg"
            },
            {
                id: 02,
                subject: "English",
                location: "Manchester",
                price: 80,
                spaces: 5,
                image: "images/english.jpg"
            },
            {
                id: 03,
                subject: "Physics",
                location: "Dubai",
                price: 90,
                spaces: 5,
                image: "images/physics.jpg"
            },
            {
                id: 04,
                subject: "Chemistry",
                location: "Lagos",
                price: 120,
                spaces: 5,
                image: "images/chemistry.jpg"
            },
            {
                id: 05,
                subject: "History",
                location: "Berlin",
                price: 40,
                spaces: 5,
                image: "images/history.jpg"
            },
            {
                id: 06,
                subject: "Geography",
                location: "California",
                price: 30,
                spaces: 5,
                image: "images/geography.jpg"
            },
            {
                id: 07,
                subject: "Music",
                location: "Birmingham",
                price: 180,
                spaces: 5,
                image: "images/music.jpg"
            },
            {
                id: 08,
                subject: "Art",
                location: "Nairobi",
                price: 80,
                spaces: 5,
                image: "images/art.jpg"
            },
            {
                id: 09,
                subject: "Physical Education",
                location: "Oxford",
                price: 40,
                spaces: 5,
                image: "images/physical.jpg"
            },
            {
                id: 10,
                subject: "Design & Technology",
                location: "Accra",
                price: 80,
                spaces: 5,
                image: "images/design.jpg"
            },
            
        ],
        cart: [],
        SelectedCategory: 'All',
        page: "lesson",
        OrderBy: "",
        name: "",
        phone: "",
    },

    methods: {
        addToCart(product, index) {
            this.cart.push(product);
            this.filteredData[index].spaces--;

        },

        canAddToCart(product) {
            return product.spaces > this.cartCount(product.id);
        },

        navigateTo(page) {
           this.page = page;
        },

        removeProduct(index) {
            this.cart.splice(index, 1);
        },

        SubmitAlert() {
            alert("Order Submitted")
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
            return this.cart.length;
        },

        isDisabled: function() {
            return !this.name || !this.phone;
        },

        filteredData: function() {
           // let vm = this;
            let category = this.SelectedCategory;
            const orderBy = this.OrderBy;
            if(category === "All") {
                return this.products;
            } else {
                let subjectsArray = this.products.slice(0);
                if(category === "subject") {
                    
                    function compare(a, b) {
                        if (a.subject > b.subject)
                            return orderBy == 'asc' ? 1 : (orderBy == 'dsc' ? -1 : 1)
                        if (a.subject < b.subject)
                            return orderBy == 'asc' ? -1 : (orderBy == 'dsc' ? 1 : -1)
                        return 0;
                    }
                    return subjectsArray.sort(compare);
                } else {
                    let priceArray = this.products.slice(0);
                    if(category === "price") {
                        function compare(pa, pb) {
                            if (pa.price > pb.price)
                                return orderBy == 'asc' ? 1 : (orderBy == 'dsc' ? -1 : 1)
                            if (pa.price < pb.price)
                                return orderBy == 'asc' ? -1 : (orderBy == 'dsc' ? 1 : -1)
                            return 0;
                        }
                        return priceArray.sort(compare);
                    } else {
                        let locationArray = this.products.slice(0);
                        if(category === "location") {
                            function compare(la,lb) {
                                if (la.location > lb.location)
                                    return orderBy == 'asc' ? 1 : (orderBy == 'dsc' ? -1 : 1)
                                if (la.location < lb.location)
                                    return orderBy == 'asc' ? -1 : (orderBy == 'dsc' ? 1 : -1)
                                return 0;
                            }
                            return locationArray.sort(compare);
                        } else {
                            let spaceArray = this.products.slice(0);
                            if(category === "space") {
                                console.log("testing")
                                function compare(sa, sb) {
                                    if (sa.spaces > sb.spaces) 
                                        return orderBy == 'asc' ? 1 : (orderBy == 'dsc' ? -1 : 1)
                                    if (sa.spaces < sb.spaces) 
                                        return orderBy == 'asc' ? -1 : (orderBy == 'dsc' ? 1 : -1)
                                    return 0;
                                }
                                return spaceArray.sort(compare)
                            } 
                        } 
                    }
                }  
             }       
         },   
    }   
});