<script lang="ts">
import Header from "./components/header/Header.svelte";
import TextSection from "./components/partials/sections/TextSection.svelte";

export let name: string;
</script>

<main>
	<Header />
	<TextSection
		title="{name}"
		subTitle="Meet new people with {name}"
		text="With {name}, you can meet new people to play games or you can meet our idol, Danlimax."
		image="/images/hero.jpg"
		footer=""
	/>
</main>

<style lang="scss">
	:global(body, html) {
		padding: 0;
		margin: 0;
		font-family: 'Quicksand', sans-serif;
		background-color: #25282c;
		color: #fff;
	}
	:global(html) {
		font-size: 62.5%;
	}
	:global(*) {
  		box-sizing: border-box;
	}
</style>