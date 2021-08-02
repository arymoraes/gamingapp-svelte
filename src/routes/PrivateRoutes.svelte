<script lang="ts">
import { Router, Route } from "svelte-routing";
import AdminHeader from "../components/header/AdminHeader.svelte";
import Dashboard from "../pages/admin/Dashboard.svelte";
import Games from "../pages/admin/Games.svelte";
</script>
   
   <Router>
      <AdminHeader />
      <Route path="/admin"><Dashboard/></Route>
      <Route path="/admin/games"><Games/></Route>
   </Router>
   
   <style lang="scss">
   </style>