<script>
    import { page } from "$app/stores";

    // Components
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";

    // Icons
    import PenguinConfusedSVG from "../icons/Penguin/confused.svelte";
</script>

<head>
    <title>Snail IDE - {$page.status}</title>
</head>

<NavigationBar />
<NavigationMargin />

<div class="center-div">
    <PenguinConfusedSVG height="12rem" />

    <h1>Whoops!</h1>
    <p>
        Something's not quite right. Maybe you should <a href="../">go back?</a><br>
        <a href="https://info.flagcounter.com/c39u"><img src="https://s01.flagcounter.com/count2/c39u/bg_FFFFFF/txt_000000/border_CCCCCC/columns_8/maxflags_250/viewers_0/labels_1/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"></a>
    </p>

    <p>Error: {$page.status} - {$page.error.message}</p>
</div>

<style>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .center-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    :global(body.dark-mode) {
        color: white;
    }
    :global(body.dark-mode) a {
        color: dodgerblue;
    }
</style>
