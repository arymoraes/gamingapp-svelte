<script lang="ts">
import { onMount } from "svelte";

   import type { GameI } from "../../interfaces/Game";
import { adminGetGames } from "../../services/admin/gameService";
   let games: GameI[] = [];

   onMount(async () => {
      const response = await adminGetGames();
      games = response;
   });
</script>

<main>
   <section class="games__all">
      All Games
      <ul>
         {#each games as game}
            <li>{game.name}</li>
         {/each}
      </ul> 
   </section>
</main>

<style>
   /* your styles go here */
</style>