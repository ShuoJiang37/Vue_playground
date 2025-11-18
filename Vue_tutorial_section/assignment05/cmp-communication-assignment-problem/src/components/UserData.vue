<template>
    <form @submit.prevent="submitForm">
        <label>Username: </label>
        <input type="text" v-model="userName" :ref="userNameInput" />
        <label>Age: </label>
        <input type="text" v-model="userAge" :ref="userAgeInput" />
        <button type="submit">submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userAge: '',
        }
    },
    methods: {
        submitForm() {
            const user = {
                userName: this.userName,
                userAge: this.userAge,
            };
            this.$emit("update-userList", user);
            this.userName = "";
            this.userAge = "";
        }

    }
}
</script>