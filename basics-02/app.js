const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'ALearn Vue!',
      courseGoalB: 'BLearn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.courseGoalA
        } else {
            return this.courseGoalB
        }
    }
  }
});

app.mount('#user-goal');
