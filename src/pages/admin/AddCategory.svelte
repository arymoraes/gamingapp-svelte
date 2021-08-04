<script lang="ts">
import Fa from 'svelte-fa';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { adminAddCategory } from "../../services/admin/gameService";

let name: string = '';

const handleSubmit = async () => {
    try {
        const response = await adminAddCategory({
            name,
        });
        if (response) {
            name = '';
        }
    } catch (error) {
        console.error(error);
    }
}
</script>

<main>
    <section class="container">
        <a href="/admin/categories"><Fa icon={faArrowLeft} /></a>
        <form class="game__form" on:submit|preventDefault={handleSubmit}>
            <span class="addgame-title">Add Category</span>
            <div class="mb-3">
                <label for="name" class="form-label">Category</label>
                <input type="text" class="form-control" id="name" name="name" bind:value={name} required>
            </div>
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

    &__submit {
        margin-top: 3rem;
    }
}

a{
    color: white;
}
</style>