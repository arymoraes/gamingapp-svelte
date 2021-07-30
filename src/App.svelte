<script lang="ts">
import { Router, Route } from "svelte-routing";
import Header from "./components/header/Header.svelte";
import Home from "./pages/Home.svelte";

export let name: string;
</script>

<Router>
	<div>
		<Header />
	  	<Route path="/"><Home name={name}/></Route>
	</div>
</Router>

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