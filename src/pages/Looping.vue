<template>
  <div class="looping container">
    <div class="row">
      <div class="col-12">
        <h1>Looping</h1>
        <h5>Looping over an Array</h5>
        <p>
          One of the key features of Vue is the ability to easily repeat a
          snippet of html for each index in an array or each property in an
          object. In our components data we have an array stored on the property
          "players". We can use the v-for directive to automatically loop over
          the array and utilize the item in the current iteration to build or
          populate the subsequent html. We are in essence, creating a small
          template to be used in each iteration of the loop. There are a few
          things to consider.
        </p>
        <p>Take a look at our player-card from the previous lesson</p>
        <pre><code class="language-html">{{state.playerCard}}</code></pre>
        <p>
          This snippet of HTML is currently set up to render a single player to
          the screen. Ideally we want all of the players to render using this
          same basic layout. To hand code each player would be incredibly
          tedious and labor intensive.
        </p>
        <p>Now look at how we can utilize the v-for directive.</p>
        <pre><code class="language-html">&lt;div class="player-card" v-for="player in state.players"&gt;
    {{state.playerCard}}
&lt;/div&gt;</code></pre>
        <pre><code class="language-javascript">
export default {
  name: 'looping-exercise',
  setup() {
    const state = reactive({
      players: [
        {
            photo: "https://robohash.org/D$",
            name: "D$",
            position: "WR",
            number: 4
        },
        {
            photo: "https://robohash.org/Mark",
            name: "Mark",
            position: "TE",
            number: 13
        },
        {
            photo: "https://robohash.org/Jake",
            name: "Jake",
            position: "QB",
            number: 1
        }]  
    })
    return {
        state
    }
  }
}</code></pre>
        <p>
          This will access the players property on our components data, which
          happens to be an array, and build a new "player-card" div for each
          player in the array. In the first iteration the value of player is:
        </p>
        <pre><code class="language-javascript">player = {
  photo: "https://robohash.org/D$",
  name: "D$",
  position: "WR",
  number: 4
}</code></pre>
        <p>
          Note we are using data binding between element tags with the double
          curlies {{ state.val }}, and : to provide binding within element
          attribute values on the image.
        </p>
        <p>
          We can also gain access to the current index as the loop iterates. We
          can use a parenthesis to do this. The first thing in the parenthesis
          is always the item itself, the second is always the index or key. Like
          so:
        </p>
        <pre><code class="language-html">&lt;div class="player-card" v-for="(player, index) in state.players"&gt;
  &lt;h5&gt;Player {{ state.index }}&lt;/h5&gt;{{state.playerCard}}&lt;/div&gt;</code></pre>
        <p>Results:</p>
        <div class="d-flex align-items-center justify-content-around flex-wrap">
          <div
            class="player-card text-center"
            v-for="(player, index) in state.players"
            :key="player"
          >
            <h5>Player {{ index + 1 }}</h5>
            <div>
              <img class="img" :src="player.photo" />
            </div>
            <div>
              <span>{{ player.name }}</span>
            </div>
            <div>
              <span>{{ player.position }}</span>
            </div>
            <div>
              <span>{{ player.number }}</span>
            </div>
          </div>
        </div>
        <h5>Looping over an Objects Properties</h5>
        <p>
          In our components data we could also have a blog object with the
          properties "title", "description", "author". We can use the v-for
          directive to automatically loop over the objects properties and gain
          access to the key and value in the current iteration to print.
        </p>
        <pre><code class="language-html">&lt;div class="blog" v-for="(value, key) in state.blog" :key="key"&gt;
  &lt;p&gt;
    {{state.val2}}
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
      </div>
      <hr />
      <h3>Exercise</h3>
      <exercise></exercise>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Exercise from "../components/LoopingExercise.vue";
export default {
  name: "looping",
  setup() {
    const state = reactive({
      val: "{{ }}",
      val2: "{{ key }}: {{ value }}",
      index: "{{ index + 1 }}",
      playerCard: `
  <div class="player-card">
    <div>
      <img :src="player.photo" />
    </div>
    <div>
      <span>{{player.name}}</span>
    </div>
    <div>
      <span>{{player.position}}</span>
    </div>
    <div>
      <span>{{player.number}}</span>
    </div>
  </div>
`,
      player: {
        name: "{{ player.name }}",
        position: "{{ player.position }}",
        number: "{{ player.number }}",
      },
      blog: {
        title: "Using v-for in Vue",
        description: "How to use a v-for directive in Vue.",
        author: "D$",
      },
      players: [
        {
          photo: "https://robohash.org/D$",
          name: "D$",
          position: "WR",
          number: 4,
        },
        {
          photo: "https://robohash.org/Mark",
          name: "Mark",
          position: "TE",
          number: 13,
        },
        {
          photo: "https://robohash.org/Jake",
          name: "Jake",
          position: "QB",
          number: 1,
        },
      ],
    });
    return {
      state,
    };
  },
  components: { Exercise },
};
</script>


<style scoped>
.player-card {
  border: 1px solid rgba(154, 154, 156, 0.4);
  background-color: rgba(154, 154, 156, 0.4);
  margin: 1rem;
  border-radius: 5px;
  min-width: 250px;
}

.img {
  height: 10rem;
}
</style>