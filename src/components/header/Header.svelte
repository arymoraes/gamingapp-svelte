<script lang="ts">
   import Fa from 'svelte-fa';
   import { faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<main class="header__container">
   <div class="hamburger">
      <Fa icon={faBars} />
   </div>
   <div class="logo">
      <img src="/images/boi.svg" alt="company logo, a good ox">
   </div>
   <a href="/login">Log In</a>
</main>

<style lang="scss">
   .header {
      &__container {
         background-color: rgb(29, 28, 28);
         padding: 2rem;
         height: 7vh;
         display: flex;
         align-items: center;
         font-size: 1.6rem;
         color: rgb(224, 224, 33);
         font-weight: 600;
         
         .hamburger, .logo, a {
            width: 33%;
         }
         a {
            display: flex;
            justify-content: flex-end;
            color: rgb(236, 236, 138);
         }
         .logo {
            display: flex;
            justify-content: center;
            max-height: 5vh;
            width: auto;
         }
      }
   }
</style>