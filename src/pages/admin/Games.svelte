<script lang="ts">
import { onMount } from "svelte";
import GameCard from "../../components/partials/games/GameCard.svelte";
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
      <ul class="games__list">
         {#each games as game}
         <GameCard name={game.name} image="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg" url="https://na.leagueoflegends.com/en-us/"/>
         <GameCard name={'New World'} image="https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg" url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newworld.com%2Fen-us%2F&psig=AOvVaw2loQ74kbn3FKEV_BWn4EZb&ust=1628008893844000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCLjUgvHjkvICFQAAAAAdAAAAABAD"/>
         {/each}
      </ul> 
   </section>
</main>

<style lang="scss">
   .games {
      &__list {
         display: flex;
         overflow-x: scroll;
         padding: 1.5rem;
      }
   }
</style>