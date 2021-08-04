<script lang="ts">
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Fa from "svelte-fa";

import { adminAddGame } from "../../services/admin/gameService";


    let ranks: string[] = [];
    let name: string = '';
    let url: string = '';
    let image: string = '';
    let newRank: string = '';

    const addRank = () => {
        if (!newRank) {
            return;
        }
        ranks = [...ranks, newRank];
        newRank = '';
    }

    const removeRank = (index: number) => {
        ranks.splice(index, 1);
        ranks = [...ranks];
    }

    const handleSubmit = async () => {
        try {
            const response = await adminAddGame({
                name, url, image, ranks,
            });
            if (response) {
                name = url = image = newRank = '';
                ranks = [];
            }
        } catch (error) {
            console.error(error);
        }
    }
</script>

<main>
    <section class="container">
        <a href="/admin/categories"><Fa icon={faArrowLeft}/></a>
        <form class="game__form" on:submit|preventDefault={handleSubmit}>
            <span class="addgame-title">Add Game</span>
            <div class="mb-3">
              <label for="name" class="form-label">Game name</label>
              <input type="text" class="form-control" id="name" name="name" bind:value={name} required>
            </div>
            <div class="mb-3">
                <label for="url" class="form-label">Game url</label>
                <input type="text" class="form-control" id="url" name="url" bind:value={url} required>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Game image</label>
                <input type="text" class="form-control" id="image" name="image" bind:value={image} required>
            </div>
            <label for="new-rank">Add Rank:</label>
            <input type="text" name="new-rank" bind:value={newRank}>
            <button type="button" class="btn btn-primary" on:click={addRank}>Add Rank</button>
            {#each ranks as rank, index (index)}
            <div class="game__rank__single">
                <span class="game__rank">{rank}</span><button type="button" on:click={() => removeRank(index)} class="btn-close btn-close-white game__rank__close"></button>
            </div>
            {/each}
            <button type="submit" class="btn btn-primary game__submit">Submit</button>
          </form>
    </section>
</main>
    
<style lang="scss">
.container {
    padding: 10rem;
    font-size: 2rem;
}

input {
    height: 4rem;
    font-size: 2rem;
}

.addgame-title {
    padding: 2rem 0;
    font-weight: 600;
    font-size: 3rem;
    color: yellow;
}

button {
    font-size: 2rem;
}

.game {
    &__form {
        display: flex;
        flex-direction: column;
    }

    &__rank {
        padding: .5rem;
        display: flex;
        width: 90%;
        align-items: center;

        &__single {
            border: 2px solid white;
            display: flex;
        }

        &__close {
            align-self: flex-end;
            display: flex;
        align-items: center;
        }
    }

    &__submit {
        margin-top: 3rem;
    }
}
a {
    color: white;
}
</style>