<script lang="ts">
   export let name:string;
   export let image:string;
   export let url:string;
</script>

<a href={url}>
   <main class="game-card__container" style={`background-image: url(${image})`}>
      <div class="game-card__title">
         {name}
      </div>
   </main>
</a>

<style lang="scss">
.game-card {
   &__container {
      width: 30rem;
      height: 15rem;
      position: relative;
      background-size: 100%;
      margin-right: 2rem;
      transition: transform .2s;

      &:hover {
         transform: scale(1.05);
         border: 1px solid white;
      }
   }

   &__title {
      position: absolute;
      bottom: 0;
      height: 3rem;
      display: flex;
      align-items: center;
      font-size: 2rem;
      width: 100%;
      padding: 1rem;
      background-color: rgba(0, 0, 0, 0.747);
      color: white;
   }
}
</style>