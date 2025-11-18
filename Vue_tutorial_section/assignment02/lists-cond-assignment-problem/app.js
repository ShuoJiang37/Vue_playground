const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      userInput: "",
      buttonCaption: "Show",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
    },
    visbilityList() {
      if (this.buttonCaption === "Show") {
        this.buttonCaption = "Hidden";
      } else {
        this.buttonCaption = "Show";
      }
    },
  },
});

app.mount("#assignment");
