<script lang="ts">
   import TextSection from "../components/partials/sections/TextSection.svelte";
   </script>

   <main class="fourofour">
      <TextSection
         title="404 - Not Found"
         subTitle="Oops. Could not find the page you were looking for"
         text="Sorry, we could not find the page you were looking for. Please, check your spelling. If you still have troubles, feel free to contact us."
         image="/images/404.svg"
         footer={{
            buttons: [{
               text: 'Go back home',
               link: '/'
            }],
            text: [],
         }}
      />
   </main>
   
   <style lang="scss">
      .fourofour {
         padding: 2rem;
      }
   </style>