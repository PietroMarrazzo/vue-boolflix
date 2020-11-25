const app = new Vue({
    el: '#app',
    data: {
        newFilter: '',
        filteredList: [],
        vote: 0,
    },
    // created() {
    //     axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro')
    //     .then( result => {
    //         console.log(result.data.response)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    methods: {
        filter() {
            // let that = this;
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'c97a4b0e3d4b6db1f6c5ebd74a382128',
                    query: this.newFilter,
                }
            })
            .then(result => {

                this.filteredList = result.data.results;
                
                // if (this.filteredList.title.includes) {
                //     cdFiltered = cdFiltered.filter( cd => cd.genre.toLowerCase() === this.actualGenre )
                // }
                console.log(result.data.results);
            })
            .catch(error => {
                console.log(error);
            })
        },

        getVote(vote) {
            return Math.ceil(vote) / 2;
        }
    }
});