<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to the Vue Playground</h1>
        <p>
          The vue Playground is a simple tool to help get you introduced to the
          design patterns and specific workings of the Vue framework. Along the
          way you will likely find things that will take you out of the comfort
          zone you are used to with vanilla javascript. The organization,
          tooling, and design patterns that promote better programming practices
          introduce a learning curve, but given time, is well worth learning.
        </p>
        <p>
          Challenges that are difficult to effectively overcome without a
          framework become easier to manage and conquer within a framework such
          as Vue. Couple this power with the speed that Vue gives us as
          developers and large full scale applications become far more feasible
          all while keeping our code base clean and organized.
        </p>
        <p>
          For more on what Vue has to offer check out the documents at
          <a href="https://vuejs.org/">Vue.js</a>
        </p>
        <p>
          For a quick reference guide on Vue Syntax check out the cheat sheets
          at
          <a href="https://www.vuemastery.com/vue-cheat-sheet/">Vue Mastery</a>
        </p>
      </div>
      <span class="border-bottom col-12 pt-3"></span>
      <div class="col-12">
        <h1>Exercises</h1>
        <p>
          The Vue Playground is a teaching tool and is meant to be modified,
          dont be afraid to break things! If something is broken, remember to
          read your error messages to determine what broke.
        </p>
        <p>
          Each section of the playground is compartmentalized and offers a set
          of challenges that can be completed to solidify your understanding of
          Vue practices.
        </p>
        <p>
          To get to these exercises, open up the project in vs code, open the
          corresponding file:
        </p>
        <p>
          <kbd>/src/components/ExpressionsExercise.vue</kbd>
        </p>
        <p>
          On some occasions you will need to edit the code of the component to
          complete the exercise.
        </p>
        <pre class="language-html"><code>{{state.code}}</code></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h3>How to use this Playground</h3>
        <p>
          As you continue through this lesson, you will see some terminology
          that you may or may not have encountered in the past.
        </p>
        <p>
          After completing each built out challenge, see if you can add on to it
          and find different ways to utilize what you just learned. This
          application is meant to be progressive, meaning in general the
          problems should be tackled from left to right. In many cases you will
          need to combine the knowledge you learned from the previous tabs.
          Those tools will be used in the next tabs and there will be an assumed
          knowledge base, meaning you will see them in use but we will not
          discuss how they work.
        </p>
        <ul class="list-group">
          <li class="list-group-item active bg-info">
            <p>Glossary of Terms</p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Vue</b> - A frontend javascript framework that
              makes building user interfaces easier.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Component</b> - A .vue file that contains an HTML
              template, script area for javascript, and a style area for css.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Page</b> - A collection and layout of various
              components.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Data Binding</b> - A connection between a property
              on the component(in the data() return object) and the template.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">AppState</b> - The AppState utilizes the observer
              pattern and a single source of truth for all components in the app
              using vue's reactive wrapper.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Router</b> - The Vue Router is used to evaluate the
              address in the url and determine which page should be displayed.
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">V Directives</b> - The special directives for Vue,
              all begin with a v and tell Vue to use some special behind the
              scene processes. Examples: v-if, v-for, v-show
            </p>
          </li>
          <li class="list-group-item border">
            <p class="mb-0">
              <b class="m-0">Reactive</b> - When the data on the page updates
              automatically based on the state of the application, the user is
              not required to refresh the page to get the needed data.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import { reactive } from "vue";
export default {
  name: "home",
  setup() {
    const state = reactive({
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
        `,
    });
    return {
      state,
    };
  },
};
</script>