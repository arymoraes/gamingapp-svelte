<script lang="ts">
import { onMount } from "svelte";
import GameCard from "../../components/partials/games/GameCard.svelte";
import type { GameI } from "../../interfaces/Game";
import { adminGetGames } from "../../services/admin/gameService";

let games: GameI[] = [];

onMount(async () => {
   const response = await adminGetGames();
   if (response) {
      games = response;
   }
});
</script>

<main>
   <section class="games__all">
      <button class="btn btn-light games__add-button" type="button">Add Game</button>
      <span class="games__title">All Games</span>
      <ul class="games__list">
         {#each games as game}
            <GameCard name={game.name} image={game.image} url={game.url}/>
         {/each}
      </ul> 
   </section>
</main>

<style lang="scss">
   .games {
      &__all {
         display: flex;
         flex-direction: column;
         padding: 2rem;
      }
      &__list {
         display: flex;
         overflow-x: scroll;
         padding: 1.5rem 0 1.5rem 1rem;
      }

      &__add-button {
         font-size: 1.5rem;
         padding: 1rem;
         width: 10rem;
      }

      &__title {
         font-size: 3rem;
         font-weight: 700;
         border-bottom: 1px solid white;
         
         @media (min-width: 900px) {
            width: 100%;
         }
      }
   }
</style>