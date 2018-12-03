<template>
    <div class="navbar">
        <ul class="nav nav-tabs">
            <li class="nav-item" @click="active = 'home'; $router.push('/')">
                <a class="nav-link" :class="{active: activeTab('home')}">Home</a>
            </li>
            <li class="nav-item" @click="active = 'start'; $router.push('/start')">
                <a class="nav-link" :class="{active: activeTab('start')}">Start</a>
            </li>
            <li class="nav-item" @click="active = 'expressions'; $router.push('/expressions')">
                <a class="nav-link" :class="{active: activeTab('expressions')}">Expressions</a>
            </li>
            <li class="nav-item" @click="active = 'bindings'; $router.push('/bindings')">
                <a class="nav-link" :class="{active: activeTab('bindings')}">Bindings</a>
            </li>
            <li class="nav-item" @click="active = 'looping'; $router.push('/looping')">
                <a class="nav-link" :class="{active: activeTab('looping')}">Looping</a>
            </li>
            <li class="nav-item" @click="active = 'computed-properties'; $router.push('/computed-properties')">
                <a class="nav-link" :class="{active: activeTab('computed-properties')}">Computed Properties</a>
            </li>
            <li class="nav-item" @click="active = 'conditional-rendering'; $router.push('/conditional-rendering')">
                <a class="nav-link" :class="{active: activeTab('conditional-rendering')}">Conditional Rendering</a>
            </li>
            <li class="nav-item" @click="active = 'events'; $router.push('/events')">
                <a class="nav-link" :class="{active: activeTab('events')}">Events</a>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'navbar',
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {
            activeTab(curr) {
                return curr == this.$route.name
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