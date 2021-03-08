<template>
  <div class="computed-properties container">
    <div class="row">
      <div class="col-12">
        <h1>Computed Properties</h1>
        <p>
          We have learned expressions, which can be really nice in our
          templates, but too much logic in the template can be problematic.
          Another reason to use computed properties is they give us the ability
          to access the same computed value in several places in the template.
        </p>
        <pre>
                    <code class="language-html">
                        &lt;div class="reverse-message"&gt;
                            &lt;p&gt;Original Message: {{state.val}}&lt;/p&gt;
                            &lt;p&gt;Computed Reversed Message: {{state.val2}}&lt;/p&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
        <pre>
                    <code class="language-javascript">
                        export default {
                            name: 'computed-properties-exercise',
                            setup() {
                              const state = reactive({
                                message: "Hello World!"
                                reversedMessage: computed(()=> state.message.split("").reverse().join('')) 
                            })
                            return {
                              state
                            }
                          }
                        }
                    </code>
                </pre>
        <p>
          Notice the "reversedMessage" reference is accessing a property on the
          state that happens to be a method that is set up to return a value.
          The reversedMessage method is written under the computed property on
          our state. The computed is referencing the original "message" property
          on the component and is performing an action on it and returning the
          result for us to use as many times as needed in the component.
        </p>
        <p>Try this one yourself in the ComputedPropertiesExercise.vue</p>
        <hr />
        <h1>Exercise</h1>
        <exercise></exercise>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
import Exercise from "../components/ComputedPropertiesExercise.vue";
export default {
  name: "computed-properties",
  setup() {
    const state = reactive({
      val: "{{ state.message }}",
      val2: "{{ state.reversedMessage }}",
      message: "Hello World!",
      reversedMessage: computed(() => {
        state.message.split("").reverse().join("");
      }),
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
