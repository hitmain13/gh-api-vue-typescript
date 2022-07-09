<script lang="ts">
import NotFoundSVG from '../assets/NotFound.svg'
export default {
	name: "NotFound",
	components: {
		NotFoundSVG
	}
};
</script>
<template>
	<main>
		<NotFoundSVG/>
		<a href="/">Back to home</a>
	</main>
</template>

<style>
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
svg {
	width: 500px;
}
a {
	font-size: 16px;
	text-decoration: none;
	color: #c9d1d9;
}
</style>
