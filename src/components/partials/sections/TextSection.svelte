<script lang="ts">
   export let title: string;
   export let subTitle: string;
   export let text: string;
   export let image: string;
   export let footer: string;
</script>

<main class="text-section__container">
   <div class="text-section__image" style={`background-image: url(${image})`}>
   </div>
   <div class="text-section__description">
      <div class="text-section__title">{title}</div>
      <div class="text-section__subtitle">{subTitle}</div>
      <div class="text-section__text">{text}</div>
      <div class="text-section__footer">{footer}</div>
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
         font-size: 3rem;
      }
   }
</style>