<script lang="ts">
import type { ButtonI } from "../../../interfaces/Button";
import type { TextI } from "../../../interfaces/Text";

   interface FooterI {
      buttons?: ButtonI[],
      text?: TextI[],
   }

   export let title: string;
   export let subTitle: string;
   export let text: string;
   export let image: string;
   export let footer: FooterI;
</script>

<main class="text-section__container">
   <div class="text-section__image" style={`background-image: url(${image})`}>
   </div>
   <div class="text-section__description">
      <div class="text-section__title">{title}</div>
      <div class="text-section__subtitle">{subTitle}</div>
      <div class="text-section__text">{text}</div>
      <div class="text-section__footer">
         {#each footer.buttons as button}
            <button class="text-section__footer__button">
               <a href={button.link}>
                  {button.text}
               </a>
            </button>
         {/each}
         {#each footer.text as text}
            <span class="text-section__footer__text">{text.text}</span>
         {/each}
      </div>
   </div>
</main>

<style lang="scss">
   .text-section {
      &__container {
         display: flex;
         flex-direction: column;
      }

      &__image {
         height: 25vh;
         background-size: 100%;
      }

      &__description {
         padding: 2rem;

         div {
            padding: .5rem 0;
         }
      }

      &__title {
         font-size: 3rem;
         font-weight: 600;
      }

      &__subtitle {
         font-size: 2rem;
      }

      &__text {
         font-size: 1.5rem;
      }

      &__footer {
         display: flex;
         flex-direction: column;
         &__button {
            font-size: 2rem;
            padding: 1rem;
            width: 40%;
            border-radius: .5rem;
            background-color: rgb(23, 2, 63);
            color: white;
            border: 2px solid rgb(85, 85, 250);

            a {
               text-decoration: none;
               color: inherit;
            }
         }
      }
   }
</style>