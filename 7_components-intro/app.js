const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "manuel lorenz",
          phone: "333-222-3445",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "julie lorenz",
          phone: "333-222-3445",
          email: "julie@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
  computed: {},
});

app.mount("#app");
