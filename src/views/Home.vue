<template>
	<div class="main-container">
		<h2>Busque o usuário do Github</h2>
		<form
			action=""
			v-on:submit.prevent="checkForm"
			class="form-inline"
			autocomplete="off"
			alt="form"
		>
			<input
				type="text"
				alt="input-username"
				class="form-control"
				id="validationServerUsername"
				placeholder="Username..."
				aria-describedby="inputGroupPrepend3"
				required
				v-model="user"
			/>
			<span alt="clear-input" id="clear" :class="[empty ? `` : `show`]" v-on:click="clearInput"
				>X</span
			>
		</form>
		<span id="errors" v-for="error in errors">{{ error }}</span>
	</div>
</template>

<script lang="ts">
import Search from "../assets/Search.svg";
declare interface BaseComponentData {
	user: string;
	repos: [];
	empty: boolean;
	errors: [];
}

export default {
	components: {
		Search,
	},
	data(): BaseComponentData {
		return {
			user: "",
			repos: [],
			empty: true,
			errors: [],
		};
	},
	methods: {
		clearInput() {
			this.user = "";
		},
		checkForm() {
			this.errors = [];
			if (this.user.length >= 40) {
				this.errors.push("Usuário inválido! (máximo caracteres: 40)");
			} else {
				this.$router.push(`/profile/${this.user}`);
			}
		},
	},
};
</script>

<style>
h2,
h3,
span,
a {
	color: #c9d1d9;
	text-align: center;
}
.form-inline {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
}
.invalid-feedback {
	text-align: center;
}
.empty {
	visibility: hidden;
}
.btn-submit {
	border: none;
	border-radius: px;
}
.main-container {
	text-align: center;
}
#app {
}
#clear {
	position: relative;
	font-size: 12px;
	right: 25px;
	cursor: pointer;
	font-weight: 500;
	padding: 0 5px;
	background-color: #f9f9f9;
	border-radius: 50%;
	color: #000;
}
#clear:hover {
	opacity: 0.7;
}
#errors {
	text-align: center;
	color: red;
	font-weight: 400;
	margin: 30px;
}
#search {
	width: 25px;
	margin-right: 10px;
	cursor: pointer;
}
#search:hover {
	opacity: 0.7;
}

#validationServerUsername {
	width: 400px;
}
</style>
