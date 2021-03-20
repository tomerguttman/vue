const app = Vue.createApp({
    data() {
        return {
            goals: [],
            showList: true,
        }
    },
    methods: {
        addTask() {
            if (this.task_value !== '') { 
                this.goals.push(this.task_value)
            }

            this.task_value = ''
        },
        changeListVisibility() {
            this.showList = !this.showList
        }
    }
})

app.mount("#assignment");
  