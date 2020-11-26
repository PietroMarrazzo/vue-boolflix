const app = new Vue({
    el: '#app',
    data: {
        newFilter: '',
        filteredList: [],
        // vote: 0,
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
            // reset array per nuove ricerche
            // this.results = [];
            this.filteredList = [];
            
            // movies
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'c97a4b0e3d4b6db1f6c5ebd74a382128',
                    query: this.newFilter,
                }
            })
            .then(result => {
                // mergia gli array di movie e serie tv
                const res = result.data.results;

                this.filteredList = this.filteredList.concat(res);
                console.log(filteredList);  

                // const res = response.data.result;
                // this.results = this.results.concat(res);              
            })
            .catch(error => {
                console.log(error);
            });


            // serie TV
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: 'c97a4b0e3d4b6db1f6c5ebd74a382128',
                    query: this.newFilter,
                }
            })
            .then(result => {
                // mergia gli array di movie e serie tv
                const res = result.data.results;

                this.filteredList = this.filteredList.concat(res);
                console.log(filteredList);  

                // const res = response.data.result;
                // this.results = this.results.concat(res);              
            })
            .catch(error => {
                console.log(error);
            })
        },

        getVote(vote) {
            return Math.ceil(vote / 2);
        }
    }
});