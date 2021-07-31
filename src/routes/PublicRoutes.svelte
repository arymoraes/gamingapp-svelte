<script lang="ts">
   import { Router, Route } from "svelte-routing";
   import Home from "../pages/Home.svelte";
   import Login from "../pages/Login.svelte";
   import Signup from "../pages/Signup.svelte";
   </script>
   
   <Router>
      <Route path="/"><Home name="Boi Gaming"/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/signup"><Signup/></Route>
   </Router>
   
   <style lang="scss">
   </style>