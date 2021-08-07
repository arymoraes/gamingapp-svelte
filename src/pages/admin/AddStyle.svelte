<script lang="ts">
import type { StyleI } from "../../interfaces/Style";

import { adminAddStyle } from "../../services/admin/gameService";

let name: string = '';
export let styles: StyleI[] = [];
let alert = {
    type: '',
    text: '',
};

const handleSubmit = async () => {
    try {
        const response = await adminAddStyle({
            name,
        });
        if (response) {
            styles = [...styles, response];
            name = '';
            alert = {
                type: 'success',
                text: 'Style added successfully!'
            };
        }
    } catch (error) {
        console.error(error);
        alert = {
            type: 'danger',
            text: 'Something went wrong, please try again'
        };
    }
}
</script>

<main>
    <section class="container">
        {#if alert.text}
            <span class={`alert alert-${alert.type}`}>{alert.text}</span>
        {/if}
        <form class="game__form" on:submit|preventDefault={handleSubmit}>
            <span class="addgame-title">Add Style</span>
            <div class="mb-3">
                <label for="name" class="form-label">Style</label>
                <input type="text" class="form-control" id="name" name="name" bind:value={name} required>
            </div>
            <button type="submit" class="btn btn-primary game__submit">Submit</button>
            </form>
    </section>
</main>
    
<style lang="scss">
.container {
    padding: 3rem;
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
    color: black;
}

button {
    font-size: 2rem;
}

.game {
    &__form {
        display: flex;
        flex-direction: column;
    }

    &__submit {
        margin-top: 3rem;
    }
}

a{
    color: white;
}
</style>