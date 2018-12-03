<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to the Vue Playground</h1>
        <p>The vue Playground is a simple tool to help get you introduced to the design patterns and
          specific workings of the Vue framework. Along the way you will likely find things that will take you out of
          the comfort zone you are used to with vanilla javascript. The organization, tooling, and design patterns that
          promote better programming practices introduce a learning curve, but given time, is well worth learning.</p>
        <p>Challenges that are difficult to effectively overcome without a framework become easier to
          manage and conquer within a framework such as Vue. Couple this power with the speed that Vue gives us as
          developers and large full scale applications become far more feasible all while keeping our code base clean
          and organized.</p>
        <p>For more on what Vue has to offer check out the documents at <a href="https://vuejs.org/">Vue.js</a></p>
        <p>For a quick reference guide on Vue Syntax check out the cheat sheets at <a href="https://www.vuemastery.com/vue-cheat-sheet/">Vue
            Mastery</a></p>
      </div>
      <span class="border-bottom col-12 pt-3"></span>
      <div class="col-12">
        <h1>Exercises</h1>
        <p>The Vue Playground is a teaching tool and is meant to be modified, dont be afraid to break things! If
          something is broken, remember to read your error messages to determine what broke.</p>
        <p>Each section of the playground is compartmentalized and offers a set of challenges that can be completed to
          solidify your understanding of Vue practices.</p>
        <p>To get to these exercises, open up the project in vs code, open the corresponding file:
          <pre class="language-html">
            <code>
              /src/components/ExpressionsExercise.vue
            </code>
          </pre>
          On some occasions you will need to edit the code of the component to complete the exercise.
          <pre class="language-html">
          <code>
            {{code}}
          </code>
        </pre>
        </p>
      </div>
    </div>
  </div>
</template>

The folder structure follows that of a typical Angular Application, so your path to the exercises will look something
like:


<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data() {
      return {
        code: `
    <div class="vue-exercises">
      <h1>Exercises</h1>
      <div class="challenges">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="challenge">Write a math equation that Vue can evaluate</span>
            <div class="answer">
              {{<!--Your Code Here-->}}
            </div>
          </li>
        </ul>
      </div>
    </div>
        `
      }
    },
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
</style>