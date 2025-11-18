const app = Vue.createApp({
    data(){
        return{
            input: "",
            confirmedInput: "",
        }
    },
    methods:{
        alertMsg(){
            alert("aaaaaaalert");
        },
        userInput(event){
            this.input = event.target.value;
        },
        userConfirmed(event){
            this.confirmedInput = event.target.value;
        },
    }
});

app.mount('#assignment');