
new Vue({
    el:"#app",
    data() {
        return {
            isShowingCart: false,
            isLatestMovie :true,
            cart: {
                items: []
            },
            showaddToCart :false ,
            movies: [{
                id: 1,
                name: 'Horizon Zero Dawn',
                image: 'task/assets/witcher-198x300.jpg',
                description: 'The witcher 3: Wild hunt is a 2015 action role-playing game developed and published by CD project , based on The...',
                price: 2999,
                inStock: 50,
                category: 'Action-RPG',
                rate : 9.5
            },
            {
                id: 2,
                name: 'Uncharted 4.. ',
                image: 'task/assets/img-3-1024x541.jpg',
                description: 'The witcher 3: Wild hunt is a 2015 action role-playing game developed and published by CD project , based on The...',
                price: 2999,
                inStock: 50,
                category: 'Action-RPG , Platform',
                rate : 8.6
            },
            {
                id: 3,
                name: 'Batman Arkham ..',
                image: 'task/assets/metal-300x300.jpg',
                description: 'The witcher 3: Wild hunt is a 2015 action role-playing game developed and published by CD project , based on The...',
                price: 2999,
                inStock: 50,
                category: 'Action , Adventure',
                rate : 6.7
            },
            {
                id: 4,
                name: 'Rise of the',
                image: 'task/assets/metal-300x300.jpg',
                description: 'The Rise of the 2015 action role-playing game developed and published by CD project , based on The...',
                price: 2999,
                inStock: 50,
                category: 'Action-RPG',
                rate : 9.5
            },
            {
                id: 5,
                name: 'Uncharted 4.. ',
                image: 'task/assets/review-thumbnail-1.jpg',
                description: 'The witcher 3: Wild hunt is a 2015 action role-playing game developed and published by CD project , based on The...',
                price: 2999,
                inStock: 50,
                category: 'Action-RPG , Platform',
                rate : 8.6
            }
            
            ],
            movieAdd:{}
            
        }
    },
    methods: {
        showAddToCart(data){
            this.showaddToCart = true;
            this.movieAdd = data ;
        },

        addMovieToCart(movie){
            var cartItem = this.getCartItem(movie);
            if (cartItem != null) {
                cartItem.quantity++;
            } else {
            this.cart.items.push({
                movie:movie,
                quantity:1
            });
        }
            movie.inStock--;
        },
        getCartItem: function(movie) {
            for (let i = 0; i < this.cart.items.length; i++) {
                if (this.cart.items[i].movie.id == movie.id) {
                    return this.cart.items[i];
                }
            }
            return null;

        },
        
    },
    filters: {
        rateOver: function(value) {
            return value + " /" + "10;"
        }
    },
    watch: {
        isLatestMovie(newValue, oldValue) {
            
            let b =  this.movies.length  ;
            this.movies.forEach((movie)=>{
                while ( b < 1 ) {
                    return  console.log(movie ) ;
                    b--;
                }
              
            });
        },
    },
})