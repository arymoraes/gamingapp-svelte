<script lang="ts">
import { Router } from "svelte-routing";
import Modal from 'svelte-simple-modal';
import PrivateRoutes from "./routes/PrivateRoutes.svelte";
import PublicRoutes from "./routes/PublicRoutes.svelte";
import './global.css';

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
			<!-- <PublicRoutes /> -->
			<PrivateRoutes />
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
	:global(.form-control, .btn) {
		font-size: 2rem;
	}
	* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}
</style>