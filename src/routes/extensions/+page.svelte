<script>
    // Components
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    import Extensions from "$lib/Extension/extensions.js";
    import Extension from "$lib/Extension/item.svelte";
    import LoadingSpinner from "$lib/LoadingSpinner/Spinner.svelte";

    import Swal from 'sweetalert2';

    let loading = false; //if this is true then the loading overlay will show

    const handleClick = (extObj) => {
        loading = true;
        const opener = window.opener || window.parent;
        if (!opener) {
            loading = false;
            Swal.fire({
                title: "Error",
                text: "You need to load this from the Editor to import extensions.",
                icon: "error"
            });
            throw new Error('no parents errrmm what the sigma');
        }
        let bc = new BroadcastChannel("extension");
        bc.postMessage({extension: extObj});
        bc.addEventListener("message", () => window.close());
    }

    // Based on https://stackoverflow.com/a/41126244
    const filter = (input, json) => {
        let output = [];
        for (var key in json) {
            if (json[key].name.toLowerCase().includes(input.toLowerCase()) || input === '') {
                output.push(json[key]);
            }
        }
        return output;
    }

    let search = '';

</script>

<head>
    <title>Snail IDE - Extensions</title>
</head>



<NavigationBar />

<div class="main">
    <NavigationMargin />

    <input type="text" placeholder="Search..." value="" on:input={(e) => {search = e.target.value}}/>
    <div class="box">
        {#if loading}
            <div class="external-loading">
                <LoadingSpinner />
                <p style="text-align: center;">
                    Loading..
                </p>
            </div>
        {/if}
        {#each filter(search, Extensions) as ext}
            <Extension image={ext.iconURL ?? "/noicon.png"} name={ext.name} creator={ext.collaborator ?? ""} sendFunc={handleClick} description={ext.description} extObject={ext} />
        {/each}
    </div>
</div>

<style>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    input{
        margin-top: 8px;
    }
    .main {
        text-align: center;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        min-width: 1000px;
    }
    .box {
        margin-top: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        text-align: left;
    }
    .external-loading {
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
