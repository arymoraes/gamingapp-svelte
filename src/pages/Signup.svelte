<script lang="ts">
   import { getContext } from 'svelte';
   import { apiSignup, storeToken } from '../services/authService';
   import BaseModalContent from '../components/modals/BaseModalContent.svelte';
    
   const { open } = getContext('simple-modal');
   
   let email: string;
   let username: string;
   let password: string;
   let passwordConf: string;
   
   const handleSubmit = async (): Promise<void> => {
     if (password !== passwordConf) {
      openMessageModal('Your passwords must match');
      return;
     }
     try {
       const response = await apiSignup({
          email,
          username,
          password,
          passwordConf
       });
       if (!response) openMessageModal('Something went wrong. Please, try again.');
       storeToken(response.token);
     } catch (error) {
       console.error(error);
     }
   }
   
   const openMessageModal = (message) => {
     open(BaseModalContent, { message });
   }
     
</script>

<main class="signup">
   <div class="signup__logo">
      <img src="./images/boi.svg" alt="company logo">
   </div>
   <div class="signup__title">Sign Up</div>
   <form class="signup__form" on:submit|preventDefault={handleSubmit}>
      <label for="email">
         Email
         <input name="email" placeholder="Email" type="email" bind:value={email} required>
      </label>
      <label for="username">
         Username
         <input name="username" placeholder="Username" type="text" min="3" bind:value={username} required>
      </label>
      <label for="password">
         Password
         <input name="password" placeholder="Your password" type="password" min="8" max="16" bind:value={password} required>
      </label>
      <label for="password">
         Confirm your password
         <input name="passwordconf" placeholder="Confirm your password" min="8" max="16" type="password" bind:value={passwordConf} required>
      </label>
      <label for="terms" class="signup__terms">
         <input type="checkbox" name="terms" required>
         I Agree to the terms and conditions
      </label>
      <button type="submit" class="signup__button">Sign up</button>
      <a class="signup__signup" href="/login">Already have an account? Log in here</a>
   </form>
</main>
     
<style lang="scss">
   .signup {
   min-height: 93vh;
   font-size: 1.5rem;
   padding: 1rem 2rem;
   background-color: rgb(31, 30, 30);
   color: black;

   @media (min-width: 900px) {
      padding: 0 35vw;
   }

   &__logo {
      padding-top: 2rem;
      height: 20vh;
      width: auto;

      @media (min-width: 900px) {
         display: flex;
         padding: 3rem;
         justify-content: center;
      }
   }

   &__title {
      font-size: 3rem;
      font-weight: 600;
      padding-bottom: 2rem;
   }

   &__title, &__form {
      background-color: rgb(240, 240, 240);
      padding: 2rem;
   }

   &__terms {
      display: flex;
      align-items: center;
   }

   &__form {
      display: flex;
      width: 100%;
      flex-direction: column;
      min-height: 50vh;

      label {
         font-size: 1.5rem;
         font-weight: 600;
         padding-top: .5rem 0;

         &:last-child {
            font-weight: 400;
         }
      }

      @media (min-width: 900px) {
          min-height: 35vh;
        }

      input[type="text"], input[type="password"], input[type="email"] {
         margin: .2rem 0 0 0;
         height: 5rem;
         width: 100%;
      }

      input[type="checkbox"] {
         margin: 2rem 0;
         height: 2rem;
         width: 2rem;
         margin-right: 1rem;
      }
   }

   &__button {
      background-color: rgb(87, 87, 245);
   }

   &__signup {
      padding-top: 2rem;
      text-align: right;
   }
   }
</style>