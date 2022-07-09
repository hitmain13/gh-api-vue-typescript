<template>
	<main>
		<NotFoundSVG />
	</main>
</template>

<script lang="ts">
import NotFoundSVG from "./assets/NotFound.svg";
export default {
	components: {
		NotFoundSVG,
	},
};
</script>

<style>
svg {
	width: 50%;
}
</style>
