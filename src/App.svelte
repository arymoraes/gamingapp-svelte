<script lang="ts">
import { Router, Route } from "svelte-routing";
import Header from "./components/header/Header.svelte";
import Home from "./pages/Home.svelte";
import Login from "./pages/Login.svelte";
import Modal from 'svelte-simple-modal';
import Signup from "./pages/Signup.svelte";

export let name: string;
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
			<Route path="/"><Home name={name}/></Route>
			<Route path="/login"><Login/></Route>
			<Route path="/signup"><Signup/></Route>
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