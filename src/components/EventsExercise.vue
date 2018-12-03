<template>
    <div class="events-exercise container">
        <div class="row">
            <div class="col-12">
                <div class="border p-1">
                    <h5>Events With Inline Actions</h5>
                    <p>Use the @click directive to add an event listener to the button below.</p>
                    <!-- add event listener to the button element -->
                    <button class="btn btn-primary">Add 1</button>
                    <p>The button has been clicked {{
                        <!--add code here--> }} times.</p>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'events-exercise',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>


<style scoped>

</style>