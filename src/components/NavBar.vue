<script lang="ts">
import IconGithub from "./icons/IconGithub.vue";

export default {
	components: {
		IconGithub,
	},
};
</script>

<template>
	<nav class="navbar navbar-dark bg-dark navbar-expand-xl">
		<div v-on:click="this.$router.push(`/`)" class="logo-container">
			<IconGithub class="github-icon" />
			<h3 class="title"><strong>Github</strong> Search Profile</h3>
		</div>
	</nav>
</template>

<style>
@import "@/assets/base.css";

.navbar {
	max-height: 70px;
}
.logo-container {
    display: flex;
    align-items: center;
}
.github-icon {
	width: 40px;
	height: 40px;
    margin: 10px;
    cursor: pointer;
	color: var(--vt-c-white-mute);
}
.title {
	color: var(--vt-c-white-mute);
    cursor: pointer;
	font-weight: 300;
}
</style>
