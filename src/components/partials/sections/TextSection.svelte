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
   export let bgColor: string = '';
   export let color: string = '';
   export let reversed: boolean = false;
</script>

<main class="text-section__container" style={`background-color: ${bgColor}; color: ${color}; ${window.innerWidth > 900 && reversed ? 'flex-direction: row-reverse' : ''}`}>
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

         @media (min-width: 900px) {
            padding: 4rem;
            flex-direction: row;
         }
      }

      &__image {
         height: 25vh;
         background-size: 100%;
         background-repeat: no-repeat;

         @media (min-width: 900px) {
            width: 50%;
            height: 50vh;
            border-radius: 1rem;
         }
      }

      &__description {
         padding: 2rem;

         @media (min-width: 900px) {
            width: 50%;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
         }

         div {
            padding: .5rem 0;

            @media (min-width: 900px) {
               padding: 1.5rem;
            }
         }
      }

      &__title {
         font-size: 3rem;
         font-weight: 600;

         @media (min-width: 900px) {
            font-size: 5rem;
         }
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
            background-color: #25282c;
            color: white;
            border: 2px solid white;

            &:hover{
               cursor: pointer;
               background-color: #363636;
               -webkit-transition: background-color 300ms linear;
               -ms-transition: background-color 300ms linear;
               transition: background-color 300ms linear;
            }

            a {
               text-decoration: none;
               color: inherit;
            }
         }
      }
   }
</style>