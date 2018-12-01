<template>
    <div class="bindings container">
        <div class="row">
            <div class="col-12">
                <h1>Bindings</h1>
                <p>So we have learned that using the double curlies {{ val }} allows us to run javascript
                    code(expressions) directly from our html. </p>
                <p>We also have access to our components data object and can get its properties to render on the page
                    as well. This method is called one way data binding(the data is going from our component, to the
                    html). We will be bringing in properties by referencing them from our components data object with
                    the double curlies {{ val }}.</p>
                <p>For example:</p>
                <h5>One Way Data Binding</h5>
                <pre>
                    <code class="language-html">
                        &lt;p&gt;
                            Results for message: <span>{{ val3 }}</span>
                        &lt;/p&gt;
                    </code>
                </pre>
                <pre>
                    <code class="language-javascript">
                        export default {
                            name: 'bindings-exercise',
                            data() {
                                return {
                                    message: "Hello World!"
                                }
                            }
                        }
                    </code>
                </pre>
                <p>Results for message: {{message}}</p>
                <p>We can also perform two way data binding(from our html input, to our javascript, back to another
                    location in our html). To tie our input in our html to our javascript in our components data we
                    will use the v-model. We will then use the double curlies {{ val }} to render that new value in our
                    html.</p>
                <p>For example:</p>
                <h5>Two Way Data Binding</h5>
                <pre>
                    <code class="language-html">
                        &lt;input v-model="myName"&gt;
                        &lt;p&gt;
                        {{note}}
                            Hello <span>{{ val2 }},</span>
                        &lt;/p&gt;
                    </code>
                </pre>
                <pre>
                    <code class="language-javascript">
                        export default {
                            name: 'bindings-exercise',
                            data() {
                                return {
                                    //typing in the input changes the value of name
                                    myName: "Type your name here"
                                }
                            }
                        }
                    </code>
                </pre>
                <p>Results:</p>
                <input v-model="myName">
                <p>{{myName}}</p>
                <p>There is another way to use data binding, to supply values for an attribute within an element. The
                    syntax for this method of data binding is a bit different. We use the colon ":" to indicate the
                    following should not be evaluated as a static value, but rather interpreted with a reference to
                    an object.</p>
                <p>For example:</p>
                <h5>Class Binding</h5>
                <pre>
                    <code class="language-html">
                        {{note2}}
                        &lt;p :class="{ active: isActive }"&gt;This text will turn green on active&lt;/p&gt;
                    </code>
                </pre>
                <pre>
                    <code class="language-javascript">
                        export default {
                            name: 'bindings-exercise',
                            data() {
                                return {
                                    //Change the value to true
                                    isActive: false
                                }
                            }
                        }
                    </code>
                </pre>
                <p>Results when isActive = false: <span class="red">This text will turn green on active</span></p>
                <p>Results when isActive = true: <span class="green">This text will turn green on active</span></p>
                <p> Isn't Vue impressive the way it can bind your view and your javascript with such little code?
                    No need to call update() or draw() anywhere because the view is already bound to the property of
                    the object. When the JavaScript changes the view changes.</p>
            </div>
            <exercise></exercise>
        </div>
    </div>
</template>


<script>
    import Exercise from "../components/BindingsExercise.vue"
    export default {
        name: 'bindings',
        data() {
            return {
                note: '<!--The data property "myName" is being watched and will cause a rerender on value change-->',
                note2: '<!--The object determines wether or not to add the class "active" to the elements class list-->',
                val: "{{ }}",
                val2: "{{ myName }}",
                val3: "{{ message }}",
                message: "Hello World!",
                myName: "Type your name here"
            }
        },
        computed: {},
        methods: {},
        components: { Exercise }
    }
</script>


<style scoped>
    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>