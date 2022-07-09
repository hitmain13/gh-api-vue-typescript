<template>
	<form class="form-inline">
        <img id="search" src="../assets/search.png">
		<input
			type="text"
			class="form-control "
			id="validationServerUsername"
			placeholder="Username"
			aria-describedby="inputGroupPrepend3"
			required
            v-model="user"
		/>
        <span id="clear" v-bind:class="show" v-on:click="clearInput">x</span>
	</form>
</template>

<script lang="ts">
export default {
	data() {
		return {
			user: "",
		};
	},
    methods: {
        clearInput() {
            this.user = "";
        } 
    }
};
</script>

<style>
.form-inline {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.invalid-feedback {
    text-align: center;
}
.show {
    visibility: visible;
}
#clear {
    position: relative;
    right: 20px;
    bottom: 1px;
}
#search {
    width: 25px;
    margin-right: 10px;
}
#validationServerUsername {
    width: 400px;
}
</style>
