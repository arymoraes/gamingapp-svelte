<script lang="ts">
import axios from 'axios';
import { apiLogin } from '../services/authService';

let loginForm: HTMLFormElement;

const handleSubmit = async () => {
  const formData = new FormData(loginForm);
  try {
    const response = await apiLogin(formData);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
  
</script>

  <main class="login">
    <div class="login__logo">
      <img src="./images/boi.svg" alt="company logo">
    </div>
    <div class="login__title">Log In</div>
    <form class="login__form" bind:this={loginForm} on:submit|preventDefault={handleSubmit}>
      <span class="login__forgot-password">Forgot Password?</span>
      <label for="email">
        <input name="email" placeholder="Email" type="email" required>
      </label>
      <label for="password">
        <input name="password" placeholder="Your password" type="password" required>
      </label>
      <label for="keep" class="login__keep">
        <input name="keep" type="checkbox">
        Keep me signed in.
      </label>
      <button type="submit" class="login__button">Log In</button>
      <a class="login__signup" href="/signup">No account? Sign up here!</a>
    </form>
  </main>
  
  <style lang="scss">
    .login {
      min-height: 93vh;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      background-color: rgb(31, 30, 30);
      color: black;

      &__logo {
        padding-top: 2rem;
        height: 20vh;
        width: auto;
      }

      &__title {
        font-size: 3rem;
        font-weight: 600;
        padding-bottom: 2rem;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
      }

      &__title, &__form {
        background-color: rgb(240, 240, 240);
        padding: 2rem;
      }

      &__forgot-password {
        padding-bottom: 2rem;
        display: flex;
        justify-content: flex-end;
        color: blue;
      }

      &__keep {
        display: flex;
        align-items: center;
        font-size: 2rem;
      }

      &__form {
        display: flex;
        width: 100%;
        flex-direction: column;
        min-height: 50vh;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        input[type="email"], input[type="password"] {
          margin: 0;
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