const app = new Vue({
    el: '#app',
    data: {
        newFilter: '',
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
            axios.get('https://developers.themoviedb.org/3')
            .then(result => {
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
});