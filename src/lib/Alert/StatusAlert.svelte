<script>
    import { onMount } from "svelte";
    import Alert from "./Alert.svelte";
    import ProjectApi from "../../resources/projectapi.js";

    let currentStatus = {
        loading: true,
        type: "empty",
        text: "",
    };

    onMount(() => {
        fetch(`${ProjectApi.OriginApiUrl}/api/warnings`).then((res) => {
            res.json().then((status) => {
                if (!res.ok) {
                    currentStatus.text = 'A server error has occured. If this happens again, please inform an admin of this problem.'
                    currentStatus.type = 'error';
                    return;
                };
                // currently multiple updates are not supported
                if (status.warnings > 0) {
                    currentStatus.text = 'A server warning has occured. Please inform an admin of this problem.'
                    currentStatus.type = 'warning';
                };
            })
        }).catch((err) => {
                currentStatus.text = 'A server error has occured, if this happens again, please inform an admin of this problem.'
                currentStatus.type = 'error';
            });;
    });
</script>

<Alert
    backColor={"lightgreen"}
    textColor={"black"}
    text="The uploading issue semms to be fixed! Many thanks to the DreamHost team for being so helpful."
    onlyShowID={"uploading_issues:2"}
    dismissable={true}
/>
{#if currentStatus.type !== "empty"}
    <Alert
        text={currentStatus.text}
        backColor={currentStatus.type === 'error' ? 'red' : "#ffd900"}
        textColor={currentStatus.type === 'error' ? 'white' : "black"}
        buttonText="Details"
        buttonTooLight={currentStatus.type !== 'error'},
        dismissable={currentStatus.type !== 'error'}
    />
{/if}
