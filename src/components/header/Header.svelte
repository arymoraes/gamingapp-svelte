<script lang="ts">
   import Fa from 'svelte-fa';
   import { faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<main class="header__container">
   <div>Logo</div>
   <Fa icon={faBars} />
</main>

<style lang="scss">
   .header {
      &__container {
         background-color: rgb(29, 28, 28);
         padding: 2rem;
         height: 7vh;
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-size: 1.6rem;
         color: rgb(224, 224, 33);
         font-weight: 600;
      }
   }
</style>