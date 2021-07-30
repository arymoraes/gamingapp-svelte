<script lang="ts">
   import Header from "../components/header/Header.svelte";
   import TextSection from "../components/partials/sections/TextSection.svelte";
   
   export let name: string;
   </script>

   <main>
      <TextSection
         title="{name}"
         subTitle="Meet new people with {name}"
         text="With {name}, you can meet new people to play games or you can meet our idol, Danlimax."
         image="/images/hero.jpg"
         footer={{
            buttons: [
               {
                  text: 'Sign Up',
                  link: 'https://www.google.com'
               }
            ],
            text: [],
         }}
      />
   </main>
   
   <style lang="scss">
   </style>