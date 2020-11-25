const app = new Vue({
    el: '#app',
    data: {
        newFilter: '',
        filteredList: [],
    },
    // created() {
    //     axios.get('https://developers.themoviedb.org/3')
    //     .then( result => {
    //         // this.cds = result.data.response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    methods: {
        filterGenre(newFilter) {
            axios.get('https://developers.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'c97a4b0e3d4b6db1f6c5ebd74a382128',
                    query: this.newFilter,
                }
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
});