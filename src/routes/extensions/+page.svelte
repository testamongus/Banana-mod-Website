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
        const post = (data) => {
            opener.postMessage(
                {
                    ext: data,
                },
                'https://editor.snail-ide.com/editor.html'
            );
        }
        post(extObj);
        window.addEventListener("message", (e) => {
            if (!e.data.source == "react-devtools-content-script") { //i hate this extension sm
                loading = false;
            }
        });
    }
</script>

<head>
    <title>Snail IDE - Extensions</title>
</head>



<NavigationBar />

<div class="main">
    <NavigationMargin />

    <div class="box">
        {#if loading}
            <div class="external-loading">
                <LoadingSpinner />
                <p style="text-align: center;">
                    Loading..
                </p>
            </div>
        {/if}
        {#each Extensions as ext}
            <Extension image={ext.iconURL ?? "/noicon.png"} name={ext.name} creator={ext.collaborator ?? ""} sendFunc={handleClick} description={ext.description} extObject={ext} />
        {/each}
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
        align-items: center;
        flex-wrap: wrap;
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
