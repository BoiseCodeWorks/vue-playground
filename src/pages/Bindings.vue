<template>
  <div class="bindings container">
    <div class="row">
      <div class="col-12">
        <h1>Bindings</h1>
        <p>
          So we have learned that using the double curlies
          {{ state.val }} allows us to run javascript code(expressions) directly
          from our html, but how do we get the data from our javascript code to
          show up on the page when we need it to?
        </p>
        <h3>One Way Data Binding</h3>
        <p>
          We also have access to our components state object and can get its
          properties to render on the page as well. This method is called one
          way data binding (the data is going from our component, to the html).
          We will be bringing in properties by referencing them from our
          components state object with the double curlies {{ state.val }}.
        </p>
        <p>For example:</p>
        <pre><code class="language-html">&lt;p&gt;
  Results for message: <span>{{ state.val3 }}</span>
&lt;/p&gt;</code></pre>
        <pre><code class="language-javascript">export default {
    name: 'bindings-exercise',
    setup() {
      const state = reactive({
            message: "Hello World!"
      })
        return {
          state
        }
    }
}</code></pre>
        <p>Results for message: {{ state.message }}</p>
        <h3>State</h3>
        <p>
          Before we move on, lets pause and talk about the <em><b>State</b></em
          >. Inside of our <em>setup</em> method we are creating a
          <em>reactive</em> object we are calling <b>state</b>, this object is
          used to hold all the information that is unique to this page, allowing
          us to manage and maintain the "state" of the component in use. It is
          where we can safely store the data that will be used to render to this
          page. The <em>reactive</em> constructor for this object creates
          watchers for all its properties allowing the binding process to work.
          If you want to know more about how this sort of thing works under the
          hood, you can look more into the javascript proxy object.
        </p>

        <h3>Two Way Data Binding</h3>
        <p>
          We can also perform two way data binding (from our html input tag, to
          our javascript, back to another location in our html). To tie our
          input in our html to our javascript in our components data we will use
          the v-model. We will then use the double curlies {{ state.val }} to
          render that new value in our html.
        </p>
        <p>For example:</p>
        <pre><code class="language-html">{{state.note}}
&lt;input v-model="state.myName"&gt;
&lt;p&gt;Hello <span>{{ state.val2 }},</span>&lt;/p&gt;</code></pre>
        <pre><code class="language-javascript">export default {
  name: 'bindings-exercise',
  setup() {
    const state = reactive({
          //typing in the input changes the value of name
          myName: "Type your name here"
    })
    return {
      state
    }
  }
}</code></pre>
        <p>Results:</p>
        <input v-model="state.myName" />
        <p>{{ state.myName }}</p>
        <p>
          We can see that the v-model allows whatever is typed into the input
          field to be <em>'bound'</em> to the data within the state object, that
          is then applied directly into the proceeding p tag using our double
          curly braces.
        </p>
        <h3>Class Binding with ':'</h3>
        <p>
          There is another way to use data binding, to supply values for an
          attribute within an element. The syntax for this method of data
          binding is a bit different. We use the colon ":" to indicate the
          following should not be evaluated as a static value, but rather
          interpreted with a reference to an object.
        </p>
        <p>For example:</p>
        <h5>Class Binding</h5>
        <pre><code class="language-html bg-light">{{state.note2}}
&lt;p :class="{ active: state.isActive }"&gt;This text will turn green on active&lt;/p&gt;</code></pre>
        <pre><code class="language-javascript">export default {
    name: 'bindings-exercise',
    setup() {
      const state = reactive({
            //Change the value to true
            isActive: false
      })
        return {
          state
        }
    }
}</code></pre>
        <pre><code class="language-html">
&lt;style&gt;
p {
  color: red;
}
.active {
  color: green;
}
&lt;/style&gt;</code></pre>
        <p>
          Results when <kbd>state.isActive = false</kbd>
          <span class="red ml-2">This text will turn green on active</span>
        </p>
        <p>
          Results when <kbd>state.isActive = true</kbd>
          <span class="green ml-2">This text will turn green on active</span>
        </p>
        <p>
          Isn't Vue impressive the way it can bind your view and your javascript
          with such little code? No need to call update() or draw() anywhere
          because the view is already bound to the property of the object. When
          the JavaScript changes the view changes.
        </p>
        <p>Try it yourself in the <em>BindingsExercise.vue</em></p>
      </div>
      <hr />
      <h1>Exercise</h1>
      <exercise></exercise>
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";
import Exercise from "../components/BindingsExercise.vue";
export default {
  name: "bindings",
  setup() {
    const state = reactive({
      note:
        '<!--The data property "myName" is being watched and will cause a rerender on value change-->',
      note2:
        '<!--The bool adds or removes the class "active" to the element-->',
      val: "{{ }}",
      val2: "{{ state.myName }}",
      val3: "{{ state.message }}",
      message: "Hello World!",
      myName: "Type your name here",
    });
    return {
      state,
    };
  },
  components: { Exercise },
};
</script>


<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>