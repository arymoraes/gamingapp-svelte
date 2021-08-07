<script lang="ts">
  import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import Fa from "svelte-fa";

  let modalOpen = false;
  export let name: string;

  const closeModal = () => {
   modalOpen = false;
  }

  onMount(() => {
    document.addEventListener(`open-modal-${name}`, () => {
      modalOpen = true;
    });
  });

  </script>
  {#if modalOpen}
  <div class="modal-backdrop">
    <div class="modal-container">
      <div class="modal-container__header">
        <div on:click={() => closeModal()}>
          <Fa icon={faTimesCircle}/>          
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
  {/if}
  
  <style lang="scss">
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--modal-bg, rgba(0, 0, 0, 0.7));
      overflow: auto;
      z-index: 100;
    }
    .modal-backdrop :global(.modal-container) {
      position: absolute;
      min-height: 50vh;
      width: 50vw;
      background-color: white;
      color: black;
      font-size: 2rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .modal-container {
      &__header {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        font-size: 3rem;
        border-bottom: 1px solid black;
        padding: 1rem;
      }
    }
  </style>