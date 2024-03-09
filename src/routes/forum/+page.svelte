<script>
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    import LoadingSpinner from "$lib/LoadingSpinner/Spinner.svelte";

    function goToForum() {
        window.location.replace("https://forum.snail-ide.com");
    }
</script>

<head>
    <title>Snail IDE - Warning</title>
</head>

<NavigationBar />

<div class="main">
    <NavigationMargin />

    <div class="box">
        <h1 style="font-size: 24px;">Heads up!</h1>
        <p style="font-size: 18px;">The Snail IDE forum is not created by the Snail IDE developers, and is made by a member of the Snail IDE community.</p>
        <button on:click={goToForum}>Go</button>
    </div>
</div>

<style>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .main {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        min-width: 1000px;
    }
    .box {
        margin-top: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        border: none;
        background-color: purple;
        color: white;
        cursor: pointer;
        font-size: 20px;
        padding: 10px 20px;
        border-radius: 10px;
        transition-duration: 250ms;
    }

    button:hover {
        background-color: rgb(111, 0, 111);
    }
</style>
