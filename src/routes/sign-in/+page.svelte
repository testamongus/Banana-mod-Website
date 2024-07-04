<script>
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    import LoadingSpinner from "$lib/LoadingSpinner/Spinner.svelte";
    import Button from "$lib/Button/Button.svelte";
    import LocalizedText from "$lib/LocalizedText/Node.svelte";

    import Authentication from "../../resources/authentication.js";

    let currentLang = "en";

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
	Authentication.onAuthentication(() => {
        try {
            window.close();
        } catch {}
    });

    function signIn() {
        Authentication.authenticate();
    }
    function discord() {
        window.location.href = "http://www.snail-ide.com/hi.html";
    }
</script>

<head>
    <title>Snail IDE - Sign in</title>
</head>

<NavigationBar />

<div class="main">
    <NavigationMargin />

    <div class="box">
        <img style="height: 250px;" alt="A snail creating a project." src="/snail-creating-project.svg">
        <h1 style="font-size: 24px; margin: 4px;">
            <LocalizedText
                text="Sign in to your account/Join Snail IDE."
                key="signIn.signInHeader"
                lang={currentLang}
            />
        </h1>
        <p>
            <LocalizedText
                text="Sign in/Join Snail IDE and share your amazing projects with the world!"
                key="signIn.signInDescription"
                lang={currentLang}
            />
        </p>
        <Button on:click={signIn}>
            <LocalizedText
                text="Sign in with  Scratch"
                key="signIn.signInButton"
                lang={currentLang}
            />
        </Button>
        <br>
        <Button on:click={discord}>
            <LocalizedText
                text="Sign in with Discord"
                key="signIn.discord"
                lang={currentLang}
            />
        </Button>
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
</style>

