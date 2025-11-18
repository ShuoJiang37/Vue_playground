const app = Vue.createApp({
    data() {
        return {
            inputClass: "",
            isClick: true,
            inputColor: "",
        };
    },

    computed: {
        dynamicClasses() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === "user2",
            };
        },
        visibilityClasses() {
            return {
                visible: this.isClick,
                hidden: !this.isClick,
            };
        }
    },

    methods: {
        clickEvent() {
            this.isClick = !this.isClick;
        }
    }
});

app.mount("#assignment");
