const app = Vue.createApp({
  data() {
    return {
      friends: [],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
        `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Shuo",
        name: "Shuo Jiang",
        phone: "0123456789",
        email: "shuo@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
