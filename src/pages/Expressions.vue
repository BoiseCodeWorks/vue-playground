<template>
  <div class="expressions container">
    <div class="row">
      <div class="col-12">
        <h1>Expressions</h1>
        <p>
          As you continue through this lesson, you will see some terminology
          that you may or may not have encountered in the past.
        </p>
        <h3>Vue helps you bridge the gap between html, css, and js</h3>
        <p>
          A cool and helpful feature of Vue is the ability to use Expressions in
          our HTML
        </p>
        <p>Example: {{ state.handleEg }}</p>
        <p>
          Vue parses your HTML and looks specifically for the double curly
          braces (aka: handlebars, mustache brackets). When Vue comes across a
          set of these brackets it essentially says this: Pause HTML
          {{ state.val }} Restart HTML.
        </p>
        <p>
          Remember in vanilla javascript we had to use a template string in our
          javascript and manually inject it into our html through the dom.
        </p>
        <h5>Vanilla Javascript Approach</h5>
        <pre><code class="language-javascript">let template = `
&lt;div class="player-card"&gt; 
  &lt;button class="btn btn-xs btn-danger remove" id="${player.id}"&gt;Remove&lt;/button&gt; 
  &lt;div&gt; 
    &lt;img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200" /&gt; 
  &lt;/div&gt; 
  &lt;div&gt; 
    &lt;span&gt;${player.name}&lt;/span&gt; 
  &lt;/div&gt; 
  &lt;div&gt; 
    &lt;span&gt;${player.position}&lt;/span&gt; 
  &lt;/div&gt; 
  &lt;div&gt; 
    &lt;span&gt;${player.number}&lt;/span&gt; 
  &lt;/div&gt; 
&lt;/div&gt;;
`
document.getElementById('player').innerHTML = html;</code></pre>
        <p>
          Writing a full scale application with techniques like above quickly
          become cumbersome and difficult to read. Thanks to Vue, HTML
          Templating becomes a lot easier, as you will see as you continue this
          project. Look at the example below to see the Vue approach.
        </p>
        <h5>Vue Approach</h5>
        <pre><code class="language-html">&lt;div class="player-card"&gt;
    &lt;div&gt;
        &lt;img :src="player.photo" /&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;{{state.player.name}}&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;{{state.player.position}}&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;span&gt;{{state.player.number}}&lt;/span&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
        <p>
          What is nice about this approach is you don't have to leave your html
          while you are trying to figure out how you want something to look.
          Also you never have to write using string concatenation and keep track
          of all the '""' + '"". It is similar to string interpolation as we did
          above, but allows writing real html with full syntax highlighting and
          formatting.
        </p>
        <p>
          You might not see the power of these expressions yet, but thats okay.
          Try the exercises below (located in the Expressions Excercise.vue) and
          then move on to the next section.
        </p>
      </div>
      <exercise></exercise>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Exercise from "../components/ExpressionsExercise.vue";
export default {
  name: "expressions",
  setup() {
    const state = reactive({
      val: "{{ Evaluate Javascript Code }}",
      player: {
        name: "{{ state.player.name }}",
        position: "{{ state.player.position }}",
        number: "{{ state.player.number }}",
      },
      handleEg: "{{2 + 2}}",
    });
    return {
      state,
    };
  },
  components: { Exercise },
};
</script>


<style scoped>
</style>