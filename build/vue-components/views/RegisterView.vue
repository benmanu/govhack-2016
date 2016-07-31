<template>
    <h1>Register</h1>
    <p><em>This data is currently stored only in your browser, and is not shared with the Docket developers, the DoC, or anyone else. Feel free to use fake details anyway!</em></p>

    <form v-on:submit.prevent>
        <h4>Contact Details</h4>

        <div class="form-group">
            <label for="name">Name</label>
            <input v-on:blur="updateField('name', $event)" type="text" name="name">
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input v-on:blur="updateField('email', $event)" type="email" name="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-on:blur="updateField('password', $event)" type="password" name="password">
        </div>
        <h4>Emergency Contact</h4>

        <div class="form-group">
            <label for="name">Name</label>
            <input v-on:blur="updateField('eContactName', $event)" type="text" name="e-contact-name">
        </div>
        <div class="form-group">
            <label for="password">Phone Number</label>
            <input v-on:blur="updateField('eContactNumber', $event)" type="text" name="eContactNumber">
        </div>

        <h4>Payment Details</h4>

        <div class="form-group">
            <label for="password">Card Holder Name</label>
            <input v-on:blur="updateField('ccname', $event)" type="text" name="ccname">
        </div>
        <div class="form-group">
            <label for="password">Credit Card Number</label>
            <input v-on:blur="updateField('ccnumber', $event)" type="text" name="ccnumber">
        </div>
        <div class="form-group">
            <label for="password">CCV</label>
            <input v-on:blur="updateField('ccv', $event)" type="text" name="ccv">
        </div>
        <div class="form-group">
            <label for="password">Expiry Date</label>
            <div class="form-inline">
                <input v-on:blur="updateField('ccexpmonth', $event)" type="text" name="ccexpmonth">
                <input v-on:blur="updateField('ccexpyear', $event)" type="text" name="ccexpyear">
            </div>
        </div>

        <button class="btn btn-primary" @click="doRegister()">Register</button>
    </form>
</template>
<script>
    import * as actions from '../actions';

    export default {
        components: { },
        data() {
            return {
                name: '',
                email: '',
                password: '',

                eContactName: '',
                eContactNumber: '',

                ccname: '',
                ccnumber: '',
                ccv: '',
                ccexpmonth: '',
                ccexpyear: ''
            }
        },
        methods: {
            // Perform actions of any kind
            doRegister() {
                // TODO: Store CC details also
                this.registerUser(this.name, this.email, this.password);
                this.$router.go('/')
            },

            // Field updates
            updateField(field, event) {
                this.$set(field, event.target.value);
            }
        },
        created() {
            // Do something when this view is instantiated
        },
        vuex: {
            getters: {
                thing: state => state.thing
            },
            actions: actions
        }
    }
</script>
