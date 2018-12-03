<template>
    <div class="events-exercise container">
        <div class="row">
            <div class="col-12">
                <div class="border p-1">
                    <h5>Events With Inline Actions</h5>
                    <p>Use the @click directive to add an event listener to the button below and set its value to
                        increase a property called "counter" by 1. Now in the components data, add a property called
                        "counter" and set its value to 0. In the paragraph element reference the "counter" property to
                        display its value.</p>
                    <!-- add event listener to the button element -->
                    <button class="btn btn-primary m-2">Add 1</button>
                    <p>The button has been clicked {{
                        <!--add code here--> }} times.</p>
                </div>
                <div class="border p-1">
                    <h5>Events Calling A Method</h5>
                    <p>Use the @click directive to add an event listener to the button below and set its value to
                        the method name "greet". Now in the components data, add a property called "greeting" and set
                        its value to "Hello World!". On the components methods property, create a method called
                        "greet". In the method called "greet", reference the "greeting" property and pass its value
                        into an alert().</p>
                    <!-- add event listener to the button element -->
                    <button class="btn btn-primary m-2">Greet</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'events-exercise',
        data() {
            return {
                //add property called "counter"
                //add property called "greeting"
            }
        },
        computed: {},
        methods: {
            //create a method called "greet"
        },
        components: {}
    }
</script>


<style scoped>

</style>