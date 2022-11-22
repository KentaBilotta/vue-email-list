const app = new Vue({
    el: "#root",
    data: {
        email: "",
        arrEmails: [],
    },
    methods: {
        generateEmails() {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosReply) => {
                    this.email = axiosReply.data.response;
                    this.arrEmails.push(this.email);
                })
            };
            console.log(this.arrEmails);
        }
    }
})