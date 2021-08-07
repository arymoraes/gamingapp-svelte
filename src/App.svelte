<script lang="ts">
import { Router } from "svelte-routing";
import PrivateRoutes from "./routes/PrivateRoutes.svelte";
import PublicRoutes from "./routes/PublicRoutes.svelte";
import './global.css';
import { getContext, onMount, setContext } from "svelte";
import { apiProfile } from "./services/authService";
import { get, writable } from "svelte/store";

let userData: any = writable(null);
let user = null;

setContext('user', userData);
userData.subscribe(value => {
	user = value;
});

onMount(async () => {
	const response = await apiProfile();
	userData.set(response.user);
});

</script>

<Router>
		<div>
			{#if user}
				<PrivateRoutes />
			{:else}
				<PublicRoutes />
			{/if}
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
	:global(.form-control, .btn) {
		font-size: 2rem;
	}
	* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}
</style>