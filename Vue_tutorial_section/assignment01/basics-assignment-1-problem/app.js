const app = Vue.createApp({
    data(){
        return{
            name: 'Shuo Jiang',
            age: 25,
            ranNum: Math.random(),
            imageSrc: './bulldak.jpg',
            inputValue: 'Assignment 1',
        }
    },
    methods:{
        randomNumber(){
            return Math.random();
        },
    }
})

app.mount('#assignment');

