<template>
    <div class="navbar">
        <ul class="nav nav-tabs">
            <li class="nav-item" @click="active = 'home'; $router.push('/')">
                <a class="nav-link" :class="activeTab('home')">Home</a>
            </li>
            <li class="nav-item" @click="active = 'about'; $router.push('/about')">
                <a class="nav-link" :class="activeTab('about')">About</a>
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

</style>