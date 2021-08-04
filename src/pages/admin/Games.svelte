<script lang="ts">
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { onMount } from "svelte";
import Fa from "svelte-fa";
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
      <a href="/admin"><Fa icon={faArrowLeft} /></a>
      <a href="/admin/addgames"><button class="btn btn-light games__add-button" type="button">Add Game</button></a>
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
      font-size: 2.5rem;
      padding: 1rem;
      width: 25rem;
      color: blue;
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

a {
   font-size: 3rem;
   color: white;
   padding: 2rem 0;
}
</style>