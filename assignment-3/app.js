let app = Vue.createApp({
    data() {
      return { 
          number: 0,
          res: 'Not there yet!'
        };
    },
    watch: {
        result() {
            const that = this
            setTimeout(function(){
                that.number = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if ( this.number < 37) { return 'Not there yet!'; }
            else if ( this.number > 37) { return 'Too much!'; }
            else { return 37 }
        }
    },
    methods: {
      add(value) {
          this.number += value
    }
  }
});

  app.mount("#assignment");
  