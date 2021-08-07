<script lang="ts">
import { Router, Route } from "svelte-routing";
import AdminHeader from "../components/header/AdminHeader.svelte";
import AddCategory from "../pages/admin/AddCategory.svelte";
import AddGame from "../pages/admin/AddGame.svelte";
import AddStyle from "../pages/admin/AddStyle.svelte";
import Categories from "../pages/admin/Categories.svelte";
import Dashboard from "../pages/admin/Dashboard.svelte";
import Games from "../pages/admin/Games.svelte";
import Styles from "../pages/admin/Styles.svelte";
</script>
   
   <Router>
      <AdminHeader />
      <Route path="/admin"><Dashboard/></Route>
      <Route path="/admin/games"><Games/></Route>
      <Route path="/admin/styles"><Styles/></Route>
      <Route path="/admin/categories"><Categories/></Route>
      <Route path="/admin/addgames"><AddGame/></Route>
      <Route path="/admin/addcategories"><AddCategory/></Route>
      <Route path="/admin/addstyles"><AddStyle/></Route>
   </Router>
   
   <style lang="scss">
   </style>