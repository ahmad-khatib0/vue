<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition
      name="paragraph"
      @before-enter="beforeEnter"
      @enter="enterActive"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <!-- or you can to override the entire names, not just the prefix   -->
      <!-- <transition enter-to-class="other-name" enter-active-class="other-name"> -->
      <p v-if="paraIsVisible">This is only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <!-- out-in animate the remove of button first , and then the addition of button second -->
      <!-- in-out animate the addition of button first , and then the remove of button second -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    beforeEnter(whichElement) {
      console.log('BeforeEnter');
      console.log(whichElement);
    },
    enterActive(whichElement) {
      console.log('enterActive');
      console.log(whichElement);
    },
    afterEnter(whichElement) {
      console.log('afterEnter runs when the animation done ');
      console.log(whichElement);
    },
    beforeLeave(whichElement) {
      console.log('beforeLeave ');
      console.log(whichElement);
    },
    leave(whichElement) {
      console.log('leave');
      console.log(whichElement);
    },
    afterLeave(whichElement) {
      console.log('afterLeave');
      console.log(whichElement);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.4s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.4s ease-out forwards;
  /* forwards is for preventing the last stage of the animation from going back  */
}

.paragraph-enter-from {
  /* transform: translateY(-30px);
  opacity: 0; */
}
.paragraph-enter-active {
  /* transition: all 0.4s ease-out; */
  animation: slide-fade 0.4s ease-in;
}
.paragraph-enter-to {
  /* transform: translateY(0);
  opacity: 1; */
}

.paragraph-leave-from {
  /* transform: translateY(0);
  opacity: 1; */
}

.paragraph-leave-active {
  /* transition: all 0.4s ease-in; */
  animation: slide-fade 0.4s ease-out;
}
.paragraph-leave-to {
  /* transform: translateY(30px);
  opacity: 0; */
}

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 5s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.4s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-to {
  opacity: 1;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-130px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
