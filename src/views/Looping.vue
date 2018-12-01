<template>
    <div class="looping container">
        <div class="row">
            <div class="col-12">
                <h1>Looping</h1>
                <p>One of the key features of Vue is the ability to easily repeat a snippeet of html for each index in
                    an array or each property in an object. In our components data we have an array stored on the
                    property "players". We can use the v-for directive to automatically loop over the array and utilize
                    the item in the current iteration to build or populate the subsequent html. We are in essence,
                    creating a small template to be used in each iteration of the loop. There are a few things to
                    consider.</p>
                <p>Take a look at our player-card from the previous lesson</p>
                <pre>
                    <code class="language-html">
                        &lt;div class="player-card"&gt;
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
                <p>This snippet of HTML is currently set up to render a single player to the screen. Ideally we want
                    all of the players to render using this same basic layout. To hand code each player would be
                    incredibly tedious and labor intensive.</p>
                <p>Now look at how we can utilize the v-for directive.</p>
                <pre>
                    <code class="language-html">
                        &lt;div class="player-card" v-for="player in players"&gt;
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
                <pre>
                    <code class="language-javascript">
                        export default {
                            name: 'looping-exercise',
                            data() {
                                return {
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
                                }
                            }
                        }
                    </code>
                </pre>
                <p>This will access the players property on our components data, which happens to be an array, and
                    build a new "player-card" div for each player in the array. In the first iteration the value of
                    player is:</p>
                <pre>
                    <code class="language-javascript">
                        player = {
                            photo: "https://robohash.org/D$",
                            name: "D$",
                            position: "WR",
                            number: 4
                        }
                    </code>
                </pre>
                <p>Note we are using data binding between element tags with the double curlies {{ val }}, and : to
                    provide binding within element attribute values on the image.</p>
            </div>
            <exercise></exercise>
        </div>
    </div>
</template>

<script>
    import Exercise from "../components/LoopingExercise.vue"
    export default {
        name: 'looping',
        data() {
            return {
                val: "{{ }}",
                players: [],
                player: {
                    name: '{{ player.name }}',
                    position: '{{ player.position }}',
                    number: '{{ player.number }}'
                }
            }
        },
        computed: {},
        methods: {},
        components: { Exercise }
    }
</script>


<style scoped>

</style>