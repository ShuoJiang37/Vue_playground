const app = Vue.createApp({
  data() {
    return {
      boxedASelected: false,
      boxedBSelected: false,
      boxedCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxedASelected = true;
      } else if (box === "B") {
        this.boxedBSelected = true;
      } else if (box === "C") {
        this.boxedCSelected = true;
      }
    },
  },
});

app.mount("#styling");
