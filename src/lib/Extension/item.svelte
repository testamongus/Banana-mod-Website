<script>
    export let name = "Test";
    export let image = "/noicon.png";
    export let sendFunc = () => console.log("Test");
    export let creator = "";
    export let description = "";
    export let extObject = {};
</script>

<div class="block">
    <div>
        <img src={image} alt="Thumb" class="image" />
        <p class="title">{name}</p>
        <p class="description">
            {description}
        </p>
        {#if creator}
            <p>
                Created by {creator}.
            </p>
        {/if}
    </div>
    <div class="block-buttons">
        <div>
            <a href="#" on:click={sendFunc(extObject)}>
                <button class="purple">Import</button>
            </a>
        </div>
    </div>
</div>

<style>

    .block {
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        padding: 8px;
        margin: 4px;
        max-width: calc(600px / 1.85);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    :global(body.dark-mode) .block {
        border-color: rgba(255, 255, 255, 0.75);
    }
    .block-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .image {
        width: calc(600px / 1.85);
        height: calc(300px / 1.85);
        object-fit: cover;
        border-radius: 4px;
    }
    .title {
        font-size: 2em;
        font-weight: bold;
        margin-block: 6px;
    }
    .description {
        width: calc(600px / 1.85);
        margin-block: 6px;
        white-space: pre-wrap;
    }

    button {
        cursor: pointer;
        font-size: 24px;
        margin-left: 6px;
        margin-right: 6px;
        border: 1px solid rgba(0, 0, 0, 0.35);
        border-radius: 4px;
        padding: 4px 8px;
        color: white;
        font-weight: bold;
    }
    button:hover {
        filter: brightness(1.1);
    }
    button:active {
        filter: brightness(0.7);
    }
    .purple {
        background-color: #9d52ff;
    }

    .sending-loading {
        background: rgba(0, 0, 0, 0.75);
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        z-index: 99999;
    }
</style>