<script lang="ts">
import { Router } from "svelte-routing";
import Header from "./components/header/Header.svelte";
import Modal from 'svelte-simple-modal';
import PublicRoutes from "./routes/PublicRoutes.svelte";

</script>

<Router>
	<Modal styleWindow={{
		height: '30vh',
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center'
	}} styleContent={{
		'font-size': '3rem'
	}}>
		<div>
			<Header />
			<PublicRoutes />
		</div>
	</Modal>
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