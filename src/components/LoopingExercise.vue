<template>
    <div class="looping-exercise container">
        <div class="row">
            <div class="col-12">
                <div class="border p-1">
                    <h5>Looping over an Array</h5>
                    <p>Use the v-for directive to loop over the "players" property on the components data. In the
                        curlies inside of the template for each player we want to access each property on the player
                        object to put the value into our html.</p>
                    <p>Then use the index to print the players place in the collection.</p>
                    <!-- add the v-for to player-card -->
                    <div class="player-card text-center">
                        <h5> {{
                            <!--code here--> }}</h5>
                        <div>
                            <img class="img" src="" />
                        </div>
                        <div>
                            <span>{{
                                <!--code here-->}}</span>
                        </div>
                        <div>
                            <span>{{
                                <!--code here--> }}</span>
                        </div>
                        <div>
                            <span>{{
                                <!--code here--> }}</span>
                        </div>
                    </div>
                </div>
                <div class="border p-1">
                    <h5>Looping over an Objects Properties</h5>
                    <p>Use the v-for directive to loop over the "blog" property on the comments data. In the curlies
                        inside of the template for each property on the object we want to print the key(property name)
                        and value contained at that key.</p>
                    <div class="blog" v-for="(value, key) in blog">
                        <p>{{
                            <!--code here-->}}: {{
                            <!--code here-->}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'looping-exercise',
        data() {
            return {
                blog: {
                    title: "Using v-for in Vue",
                    description: "How to use a v-for directive in Vue.",
                    author: "D$"
                },
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
</script>


<style scoped>
    .player-card {
        border: 1px solid rgba(154, 154, 156, .4);
        background-color: rgba(154, 154, 156, .4);
        margin: 1rem;
        border-radius: 5px;
    }

    .img {
        height: 10rem;
    }
</style>