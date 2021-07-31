<script lang="ts">
  </script>

  <main class="login">
      <div class="login__title">Log In</div>
      <form class="login__form">
        <span class="login__forgot-password">Forgot Password?</span>
        <label for="email">
          <input name="email" placeholder="Email" type="email" required>
        </label>
        <label for="password">
          <input name="password" placeholder="Your password" type="password" required>
        </label>
        <label for="keep" class="login__keep">
          <input name="keep" type="checkbox" required>
          Keep me signed in.
        </label>
        <button type="submit" class="login__button">Log In</button>
      </form>
  </main>
  
  <style lang="scss">
    .login {
      background-color: rgb(234, 234, 234);
      min-height: 93vh;
      font-size: 1.5rem;
      color: black;
      padding: 1rem 2rem;

      &__title {
        font-size: 3rem;
        font-weight: 600;
        padding-bottom: 2rem;
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

        input[type="email"], input[type="password"] {
          margin: 0;
          height: 4rem;
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
    }
  </style>