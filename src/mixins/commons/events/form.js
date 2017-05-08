export default {
    methods: {
        emitChange(value) {
            // https://forum.vuejs.org/t/custom-checkbox-component/1120/8
            this.$emit('change', value)
            this.$emit('input', value)
        },
        emitContextmenu() {
            this.$emit('contextmenu')
        },
        emitInvalid() {
            this.$emit('invalid')
        },
        emitReset() {
            this.$emit('reset')
        },
        emitSearch() {
            this.$emit('search')
        },
        emitSelect() {
            this.$emit('select')
        },
        emitSubmit() {
            this.$emit('submit')
        },
    }
}