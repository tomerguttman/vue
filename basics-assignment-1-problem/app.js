const app = Vue.createApp({
  data() {
    return {
      fullname: "Tomer Guttman",
      age: 28,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF-pltmt3RHUw/profile-displayphoto-shrink_400_400/0/1583744915190?e=1620259200&v=beta&t=DWEOOfD9uSMRT19X21T2qmQhfoH2n1pWtuLPwmgag1w",
    };
  },
  methods: {
    getFavoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
