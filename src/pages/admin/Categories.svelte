<script lang="ts">
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { onMount } from "svelte";
import Fa from "svelte-fa";
import type { CategoryI } from "../../interfaces/Category";
import { adminGetCategories } from "../../services/admin/gameService";

let categories: CategoryI[] = [];

onMount(async () => {
    const response = await adminGetCategories();
    if (response) {
        categories = response;
    }
});
</script>
    
<main>
    <section class="categories__all">
        <a href="/admin"><Fa icon={faArrowLeft} /></a>
        <a href="/admin/addcategories"><button class="btn btn-primary categories__add-button" type="button">Add Category</button></a>
        <span class="categories__title">All categories</span>
        <ul class="categories__list list-group">
            {#each categories as category}
                <li class="list-group-item">{category.name}<button type="button" class="btn-close categories__close-btn" disabled aria-label="Close"></button></li>
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