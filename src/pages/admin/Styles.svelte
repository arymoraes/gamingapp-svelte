<script lang="ts">
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { createEventDispatcher, onMount } from "svelte";
import Fa from "svelte-fa";
import Modal from "../../components/modals/Modal.svelte";
import type { StyleI } from "../../interfaces/Style";
import { adminGetStyles } from "../../services/admin/gameService";
import AddStyle from "./AddStyle.svelte";

export let styles: StyleI[] = [];

const openModal = (name: string) => {
    const newEvent = new Event(`open-modal-${name}`)
    document.dispatchEvent(newEvent);
}

onMount(async () => {
    const response = await adminGetStyles();
    if (response) {
        styles = response;
    }
});
</script>
    
<main>
    <section class="categories__all">
        <a href="/admin"><Fa icon={faArrowLeft} /></a>
       <button class="btn btn-primary categories__add-button" type="button" on:click={() => openModal('add-style')}>Add Style</button>
        <Modal name="add-style">
            <AddStyle bind:styles={styles}/>
        </Modal>
        <span class="categories__title">All styles</span>
        <ul class="categories__list list-group">
            {#each styles as style}
                <Modal name={style.name}>{style.name}</Modal>
                <li class="list-group-item" on:click={() => openModal(style.name)}>{style.name}<button type="button" class="btn-close categories__close-btn" disabled aria-label="Close"></button></li>
            {/each}
        </ul> 
    </section>
</main>
    
<style lang="scss">
.categories {
    &__all {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        padding: 4rem;
    }

    &__title {
        color: yellow;
        font-weight: 600;
        padding: 1rem 0;
    }

    &__list {
        display: flex;
        flex-direction: column;
    }

    &__add-button {
        width: 15rem;
        height: 4rem;
        font-size: 2rem;
        margin-top: 2rem;
    }

    &__close-btn {
        float: right;
    }
}
a {
    color: white;
}
</style>