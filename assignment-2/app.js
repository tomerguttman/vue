let app = Vue.createApp({
  data() {
    return { userInput: "" };
  },
  methods: {
    showAlert() {
      alert("The button has been pressed!");
    },
    registerUserInput(event) {
      this.userInput = event.target.value;
    },
  },
});

app.mount("#assignment");
