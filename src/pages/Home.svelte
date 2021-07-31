<script lang="ts">
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
      <TextSection
         title="Play styles"
         subTitle="In {name}, you can search for players looking for your own play style"
         text="In {name}, you can search for players looking for your own play style. Are you a casual player? Find casual players to play with. Are you a competitive player? Find competitive players near your ranking to play together."
         image="/images/hero-2.png"
         bgColor="#F8fbf8"
         color="black"
         reversed={true}
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