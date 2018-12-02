<template>
    <div class="conditional-rendering container">
        <div class="row">
            <div class="col-12">
                <h1>Conditional Rendering</h1>
                <p>We can use conditional rendering to only draw blocks of code to the screen if the condition is true.
                    This is done by attaching the v-if directive to the element. You can either supply a direct boolean
                    value, or an expression that will evaluate to one.</p>
                <pre>
                    <code class="language-html">
                        &lt;div class="player-card"&gt;
                            &lt;button class="btn btn-xs btn-danger remove"&gt;Remove&lt;/button&gt;
                            &lt;div&gt;
                                &lt;img :src="player.photo" /&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;span&gt;{{player.name}}&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;span&gt;{{player.position}}&lt;/span&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;span&gt;{{player.number}}&lt;/span&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
            </div>
        </div>


    </div>
</template>


<script>
    export default {
        name: 'conditional-rendering',
        data() {
            return {
                player: {
                    name: '{{ player.name }}',
                    position: '{{ player.position }}',
                    number: '{{ player.number }}'
                }
            }
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>


<style scoped>

</style>