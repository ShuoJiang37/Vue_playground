<template>
    <section>
        <h2>Testing</h2>
        <active-user v-for="(user, index) in users" :key="index" :name="user.userName" :age="user.userAge" />
        <user-data @update-userList="updateUserList" />
    </section>
</template>
<script>

export default {
    data() {
        return {
            users: [],
        }
    },
    methods: {
        updateUserList(user) {
            this.users.push(user);
        }
    },
}
</script>