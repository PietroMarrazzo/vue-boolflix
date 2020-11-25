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
        filterGenre() {
            let that = this;
            axios.get('https://developers.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'c97a4b0e3d4b6db1f6c5ebd74a382128',
                    query: that.newFilter,
                    language: 'it-IT',
                }
            })
            .then(result => {

                let filteredList = result.data.response;

                // if (this.filteredList.title.includes) {
                //     cdFiltered = cdFiltered.filter( cd => cd.genre.toLowerCase() === this.actualGenre )
                // }
                // console.log(result.data.result);
            })
            .catch(error => {
                console.log(error);
            }),

        }
    }
});