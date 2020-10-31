<template>
  <div class="Events container">
    <div class="row">
      <div class="col-12">
        <h1>Events</h1>
        <h5>Listening to Events</h5>
        <p>
          Vue makes it quite easy to connect a method in our javascript to an
          event such as clicking a button in our html. With the template and
          javascript on the same page(in the .vue file) it becomes easier to
          both see the element we want to target, supply an event, and the
          method to call upon that event triggering. Even better, with the
          @click directive we actually get to add the event directly on the
          element.
        </p>
        <h5>Events With Inline Actions</h5>
        <p>
          Note the syntax is @click compared to onclick in vanilla javascript.
        </p>
        <pre><code class="language-html">&lt;div&gt;
  &lt;button @click="counter += 1"&gt;Add 1&lt;/button&gt;
  &lt;p&gt;The button has been clicked {{ counter }} times.&lt;/p&gt;
&lt;/div&gt;</code></pre>
        <pre><code class="language-javascript">export default {
  name: "events-exercise",
  setup() {
    const state = reactive({
      counter: 0
    })
    return {
      state
    }
  }
}</code></pre>
        <p>Result:</p>
        <button class="btn btn-outline btn-primary m-2" @click="counter += 1">Add 1</button>
        <p>The button has been clicked <kbd>{{ counter }} times.</kbd></p>
        <h5>Events Calling A Method</h5>
        <p>
          Using a method to handle what happens can be nice and becomes
          essential if there is much logic going on. The value added to the
          @click is the name of the method located in the components javascript.
        </p>
        <p>
          Note that we are using the "this" keyword in our methods javascript to
          ensure it uses the greeting property on the specific instance of the
          component.
        </p>
        <pre><code class="language-html">&lt;div&gt;
  &lt;button @click="greet"&gt;Greet&lt;/button&gt;
&lt;/div&gt;</code></pre>
        <pre><code class="language-javascript">export default {
  name: "events-exercise",
  setup() {
    const state = reactive({
      greeting: "Hello World!" 
    })
    return {
      state,
      greet(){
        alert(this.greeting)
      }
    }
  },
}</code></pre>
        <button class="btn btn-primary btn-outline m-2" @click="greet">Greet</button>
      </div>
      <hr>
      <h1>Exercise</h1>
      <exercise></exercise>
    </div>
  </div>
</template>


<script>
import Exercise from "../components/EventsExercise.vue";
export default {
  name: "Events",
  data() {
    return {
      counter: 0,
      greeting: "Hello World!",
    };
  },
  computed: {},
  methods: {
    greet() {
      alert(this.greeting);
    },
  },
  components: { Exercise },
};
</script>


<style scoped>
</style>