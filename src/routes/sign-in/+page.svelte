<script>
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    import LoadingSpinner from "$lib/LoadingSpinner/Spinner.svelte";

    import Authentication from "../../resources/authentication.js";

    // taken from NavigationBar.svelte

	function loggedInCheck() {
		const privateCode = localStorage.getItem("PV");
		if (!privateCode) {
			loggedIn = false;
			canRankUp = false;
			messageCount = 0;
			return;
		}
		Authentication.usernameFromCode(privateCode)
			.then(
				({ username, isAdmin: isAdminn, isApprover: isApproverr }) => {
					if (username) {
						loggedIn = true;
						accountUsername = username;
						isAdmin = isAdminn;
						isApprover = isApproverr;
						if (username) ProjectClient.setUsername(username);
						if (privateCode)
							ProjectClient.setPrivateCode(privateCode);
						ProjectClient.setAdmin(isAdminn);
						ProjectClient.getMessageCount().then((amount) => {
							messageCount = amount;
						});
						if (username) {
							ProjectApi.getProfile(username).then((profile) => {
								canRankUp = profile.canrankup === true;
							});
						}
						return;
					}
					loggedIn = false;
					canRankUp = false;
					messageCount = 0;
				}
			)
			.catch(() => {
				loggedIn = false;
				canRankUp = false;
				messageCount = 0;
			});
	}
	Authentication.onAuthentication(() => window.close());

    function signIn() {
        Authentication.authenticate();
    }
</script>

<head>
    <title>Snail IDE - Sign in</title>
</head>

<NavigationBar />

<div class="main">
    <NavigationMargin />

    <div class="box">
        <h1 style="font-size: 24px;">Sign in to your account/Join Snail IDE.</h1>
        <button on:click={signIn}>Sign in/Join</button>
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

