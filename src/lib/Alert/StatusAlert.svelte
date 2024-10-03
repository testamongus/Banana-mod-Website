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
    backColor={"#ffd900"}
    textColor={"black"}
    text="We're aware of the uploading issues with files over 1MB and we're trying to fix it."
    onlyShowID={"uploading_issues:1"}
    buttonText="Forum Post"
    buttonHref="https://forum.snail-ide.com/d/129-were-trying-to-fix-the-uploading-issues-of-files-over-1mb"
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
