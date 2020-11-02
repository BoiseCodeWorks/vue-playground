<template>
  <div class="condtional-rendering-exercise container">
    <div class="row">
      <div class="col-12">
        <div class="border p-1">
          <h5>Using The v-if Directive With A Direct Value</h5>
          <p>
            Add the v-if directive to the "player-card" element and set its
            value to false. The entire element should no longer render to the
            screen.
          </p>
          <!-- add code to element below -->
          <div class="player-card text-center">
            <div>
              <img :src="state.player.photo" />
            </div>
            <div>
              <span>{{ state.player.name }}</span>
            </div>
            <div>
              <span>{{ state.player.position }}</span>
            </div>
            <div>
              <span>{{ state.player.number }}</span>
            </div>
          </div>
          <p>Now, set it to true. The element should return to the page.</p>
        </div>
        <div class="border p-1">
          <h5>Using The v-if Directive With A Referenced Value</h5>
          <p>
            Add the v-if directive to the "player-card" element and set its
            value to "showPlayer". Now, in the components data, add a property
            called "showPlayer" and set the value to false.
          </p>
          <p>
            The "player-card" element should be gone now. Lets go ahead and
            toggle the value to true to get it to show up again.
          </p>
          <!-- add code to element below -->
          <div class="player-card text-center">
            <div>
              <img :src="state.player.photo" />
            </div>
            <div>
              <span>{{ state.player.name }}</span>
            </div>
            <div>
              <span>{{ state.player.position }}</span>
            </div>
            <div>
              <span>{{ state.player.number }}</span>
            </div>
          </div>
          <p>Now, set it to true. The element should return to the page.</p>
        </div>
        <div class="border p-1">
          <h5>Using The v-if, v-else-if, And v-else Directives</h5>
          <p>
            Add some conditionals to the following directives to determine if
            they should render or not. In the components data add a property
            called "grade" and set its value to 50.
          </p>
          <p>
            Did the correct element show up? Practice changing the number value
            to make sure you can get the correct element to display. Feel free
            to add another condition.
          </p>
          <!-- v-if comparing grade and 90 -->
          <div>
            <p>The grade is 'A'.</p>
          </div>
          <!-- v-else-if comparing grade and 80 -->
          <div>
            <p>The grade is 'B'.</p>
          </div>
          <!-- v-else-if comparing grade and 70 -->
          <div>
            <p>The grade is 'C'.</p>
          </div>
          <!-- v-else-if comparing grade and 60 -->
          <div>
            <p>The grade is 'D'.</p>
          </div>
          <!-- v-else to display if all the others fail -->
          <div>
            <p>The grade is 'F'.</p>
          </div>
        </div>
        <div class="border p-1">
          <h5>Using The v-show Directive</h5>
          <p>
            Change the v-if directive to a v-show on the "player-card" element
            below.
          </p>
          <div class="player-card text-center area" v-show="state.player.id">
            <div>
              <img :src="state.player.photo" />
            </div>
            <div>
              <span>{{ state.player.name }}</span>
            </div>
            <div>
              <span>{{ state.player.position }}</span>
            </div>
            <div>
              <span>{{ state.player.number }}</span>
            </div>
          </div>
          <p>
            As soon as the directive is changed to v-show, this element was
            built and injected into the pages html. When it was a v-if the
            element did not exist on the page. The display property for its CSS
            is hiding the data from printing to the screen though its structure
            still remains in place.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";

export default {
  name: "condtional-rendering-exercise",
  setup() {
    const state = reactive({
      //add a property to toggle the player-card here.
      //add a property to set the number value here.
      player: {
        photo: "https://robohash.org/D$",
        name: "D$",
        position: "WR",
        number: 4,
      },
    });
    return {
      state,
    };
  },
};
</script>


<style scoped>
.player-card {
  border: 1px solid rgba(154, 154, 156, 0.4);
  background-color: rgba(154, 154, 156, 0.4);
  margin: 1rem;
  border-radius: 5px;
}

.img {
  height: 10rem;
}
</style>