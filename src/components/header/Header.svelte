<script lang="ts">
   import Fa from 'svelte-fa';
   import { faBars } from '@fortawesome/free-solid-svg-icons';
</script>

<main class="header__container">
   <div class="hamburger">
      <Fa icon={faBars} />
   </div>
   <div class="logo">
      <a href="./">
         <img src="/images/boi.svg" alt="company logo, a good ox">
      </a>
   </div>
   <ul>
      <li><a href="./">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/danlimax">Danlimax</a></li>
   </ul>
   <a href="/login" class="header__login">Log In</a>
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

         @media (min-width: 900px) {
            justify-content: space-between;
            padding: 4rem;
         }

         ul {
            display: none;

            @media (min-width: 900px) {
               display: flex;
               width: 70%;
               text-decoration: none;
               list-style: none;
               justify-content: center;

               li {
                  width: 20%;
               }
            }
         }
         
         .hamburger, .logo, a {
            width: 33%;
         }
         .hamburger {
            @media (min-width: 900px) {
               display: none;
            }
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
      &__login {
         @media (min-width: 900px) {
            display: none;
         }
      }
   }
</style>