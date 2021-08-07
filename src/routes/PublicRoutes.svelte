<script lang="ts">
   import { Router, Route } from "svelte-routing";
import Header from "../components/header/Header.svelte";
   import Home from "../pages/Home.svelte";
   import Login from "../pages/Login.svelte";
   import NotFound from "../pages/NotFound.svelte";
   import Signup from "../pages/Signup.svelte";
   </script>
   
   <Router>
      <Header />
      <Route path="/" exact><Home name="Boi Gaming"/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route component="{NotFound}" />
   </Router>
   
   <style lang="scss">
   </style>