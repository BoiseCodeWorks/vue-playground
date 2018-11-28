<template>
    <div class="navbar">
        <ul class="nav nav-tabs">
            <li class="nav-item" @click="active = 'home'; $router.push('/')">
                <a class="nav-link" :class="activeTab('home')">Home</a>
            </li>
            <li class="nav-item" @click="active = 'start'; $router.push('/start')">
                <a class="nav-link" :class="activeTab('start')">Start</a>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'navbar',
        data() {
            return {
                active: "home"
            }
        },
        computed: {

        },
        methods: {
            activeTab(curr) {
                return curr == this.active ? 'active' : ""
            }
        },
        components: {}
    }
</script>


<style scoped>
    .nav-item {
        background-color: rgb(28, 140, 209);
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    .nav-item:hover {
        background-color: lightblue;
        border-radius: 5px;
        color: inherit;
    }
</style>