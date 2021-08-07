<script lang="ts">
import { getContext } from "svelte";

import { Router, Route } from "svelte-routing";
import AdminHeader from "../components/header/AdminHeader.svelte";
import AddCategory from "../pages/admin/AddCategory.svelte";
import AddGame from "../pages/admin/AddGame.svelte";
import Categories from "../pages/admin/Categories.svelte";
import Dashboard from "../pages/admin/Dashboard.svelte";
import Games from "../pages/admin/Games.svelte";
import Styles from "../pages/admin/Styles.svelte";

let user = getContext('user');
</script>
   
   <Router>
      <AdminHeader />
      <Route path="/admin"><Dashboard/></Route>
      <Route path="/admin/games"><Games/></Route>
      <Route path="/admin/styles"><Styles/></Route>
      <Route path="/admin/categories"><Categories/></Route>
      <Route path="/admin/addgames"><AddGame/></Route>
      <Route path="/admin/addcategories"><AddCategory/></Route>
   </Router>
   
   <style lang="scss">
   </style>