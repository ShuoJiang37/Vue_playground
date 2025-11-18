const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, name) {
      this.name = event.target.value + name;
    },
    /*  submitForm(){
       event.preventDefault();
       alert('Submitted!');
     } */
    submitForm() {
      alert('Submitted!');
    },

    confirmInput() {
      this.confirmName = this.name;
    }
  }
});

app.mount('#events');
