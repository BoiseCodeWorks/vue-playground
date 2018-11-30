<template>
    <div class="expression-exercises container">
        <div class="row">
            <div class="col-12">
                <h1>Exercises</h1>
                <div class="border p-1">
                    <p>Write a math equation Vue can evaluate.</p>

                    <p> {{
                        <!-- Add your code inside the curlies --> }}</p>
                </div>
                <div class="border p-1">
                    <p>Use interpolation to get the customary Hello, World! to display on the screen. Don't
                        forget your quotes</p>
                    <p> {{
                        <!-- Add your code inside the curlies --> }}</p>
                </div>
                <div class="border p-1">
                    <p>We can access properties on the data return object in our component and display them in our
                        template. Put the property name "message" in the curlies. Check out what happens below. Now go
                        change the value of message in our components script area.</p>
                    <p> {{
                        <!-- Add your code inside the curlies --> }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "expression-exercises",
        data() {
            return {
                message: "Super secret message here!"
            }
        }
    }
</script>