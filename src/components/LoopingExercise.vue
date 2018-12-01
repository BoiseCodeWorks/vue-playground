<template>
    <div class="looping-exercise container">
        <div class="row">
            <div class="col-12">
                <div class="border p-1">
                    <h5>Looping over an Array</h5>
                    <p>Use the v-for directive to loop over the "players" property on the components data. In the
                        curlies inside of the template for each player we want to access each property on the player
                        object to put the value into our html.</p>
                    <div class="player-card text-center" v-for="player in players">
                        <div>
                            <img class="img" src="" />
                        </div>
                        <div>
                            <span class="p-2">{{
                                <!--code here-->}}</span>
                        </div>
                        <div>
                            <span class="p-2">{{
                                <!--code here--> }}</span>
                        </div>
                        <div>
                            <span class="p-2">{{
                                <!--code here--> }}</span>
                        </div>
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
        margin: 1rem;
        border-radius: 5px;
    }

    .img {
        height: 10rem;
    }
</style>