<script>
    import { onMount } from "svelte";

    // Components
    import NavigationBar from "$lib/NavigationBar/NavigationBar.svelte";
    import NavigationMargin from "$lib/NavigationBar/NavMargin.svelte";
    // translations
    import LocalizedText from "$lib/LocalizedText/Node.svelte";
    import Language from "../../resources/language.js";

    // Static values
    import LINK from "../../resources/urls.js";

    let currentLang = "en";
    onMount(() => {
        Language.forceUpdate();
    });
    Language.onChange((lang) => {
        currentLang = lang;
    });
</script>

<svelte:head>
    <title>Snail IDE - Terms of Service</title>
    <meta name="title" content="Snail IDE - Terms of Service" />
    <meta property="og:title" content="Snail IDE - Terms of Service" />
    <meta property="twitter:title" content="Snail IDE - Terms of Service" />
    <meta
        name="description"
        content="Terms you must follow if you would like to use Snail IDE."
    />
    <meta
        property="twitter:description"
        content="Terms you must follow if you would like to use Snail IDE."
    />
    <meta property="og:url" content="https://snail-ide.com/terms" />
    <meta property="twitter:url" content="https://snail-ide.com/terms" />
</svelte:head>

<NavigationBar />

<div class="main">
    <NavigationMargin />

    <div class="section-info">
        <h1>Terms of Service</h1>
    </div>

    <main>
        <!-- UPDATE THIS WHEN MAKING CONTENT CHANGES -->
        <p><i>Updated July, 18th 2024 AEST</i></p>

        <!-- some things are intentionally not formatted as they are in the HTML file on the website -->
        <p>
            This document applies to
            <a href="https://snail-ide.com">https://snail-ide.com</a>,
            <a href="https://editor.snail-ide.com"
                >https://editor.snail-ide.com</a
            >,
            <a href="https://snail-ide.js.org">https://snail-ide.js.org</a>,
            <a href="https://snailshare.dreamhosters.com">https://snailshare.dreamhosters.com</a>, and
            any other snail-ide.com subdomains.
        </p>
        <p>
            You may see websites such as <a href="https://scratch.mit.edu/"
                >"Scratch"</a
            >,
            <a href="https://turbowarp.org/">"TurboWarp"</a>, and
            <a href="https://auth.itinerary.eu.org/">"Scratch Auth"</a> referenced.
        </p>
        <p>
            <a href="https://snail-ide.com">https://snail-ide.com</a>,
            <a href="https://editor.snail-ide.com"
                >https://editor.snail-ide.com</a
            >,
            <a href="https://snail-ide.js.org">https://snail-ide.js.org</a>,
            <a href="https://snailshare.dreamhosters.com">https://snailshare.dreamhosters.com</a>, and
            any other snail-ide.com subdomains are hereinafter known as "Snail
            IDE".
        </p>
        <p>
            A "Service Administrator", "Admin", "Moderator", "Mod" or
            "Administrator" is a person who can either directly access the
            server files for Snail IDE, or a person who can contact the server
            host that is able to access the server files and server process.
            "Host" may also refer to the server host of Snail IDE's project
            sharing.
        </p>
        <p>
            A "Project Moderator" is a person who has the ability to remove
            projects or content from those projects, and reply or send messages
            to users who had moderation actions happen towards their project or
            account. These users may also be able to edit profile information
            about another user.
        </p>
        <p>
            These people can contact Administrators aswell, and may have extra
            permissions such as banning users.
        </p>

        <h2>General</h2>
        <p>
            By using Snail IDE, you agree to the terms outlined below. If you do
            not agree with these terms, please refrain from using our website.
        </p>

        <h2>Your use of Snail IDE</h2>
        <p>
            When uploading projects or posting content on Snail IDE, your
            content must abide by the
            <a href="https://snail-ide.com/guidelines/uploading"
                >Uploading Guidelines</a
            >
            at all times.
        </p>
        <p>
            Snail IDE is allowed to cut access to your ability to publish,
            update, or remix projects if you do not abide by these rules, and
            Snail IDE has the right to cut your access to any services we
            provide if we believe you are violating these guidelines or the
            Terms of Service.
        </p>
        <p>
            Snail IDE is allowed to disable your ability to publish, update,
            remix if you do not use language appropriate for kids in your
            projects, and Snail IDE has the right to cut your access to any
            services we provide if we believe you are violating this ruling or
            the Terms of Service.
        </p>

        <h2>Copyright</h2>
        <p>
            You may not include copyrighted content in your projects. You are
            responsible for making sure you have the necessary rights, licenses,
            or permission for any user-generated content you submit to Snail
            IDE. You may get your projects, profile info or posts removed, and
            or face punishment if you do not properly check whether or not you
            have permission to include something in your content.
        </p>
        <p>
            Any content submitted to Snail IDE must be licensed
            to and through Snail IDE under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License v3.0</a>.
            If for whatever reason you are not allowed to release your
            content under that license, you are not allowed to publish it to
            Snail IDE.
        </p>

        <h2>Data Collection</h2>
        <p>
            <b>Information Collected:</b> We collect only the user's username,
            the content they upload, and their IP address.
            <br />
            <b>Purpose of Collection:</b>
        </p>
        <ul>
            <li>
                <b>Username:</b> Usernames are collected for the sole purpose of
                displaying them to other users within the Snail IDE community.
            </li>
            <li>
                <b>IP Address:</b> IP addresses are collected for security reasons
                to validate user identity and ensure the integrity of the Snail IDE
                platform. Requests coming from the same IP too many times may lose
                connection to Snail IDE's online services.
            </li>
            <li>
                <b>Cookie Usage:</b> Snail IDE uses cookies to enhance user experience
                and store user progress and preferences on the website. Users can
                manage cookie preferences through their browser settings.
            </li>
        </ul>

        <h2>Third-Party Information Sharing</h2>
        <p>
            Snail IDE does not share any user information, including usernames
            and IP addresses, with third parties.
        </p>

        <h2>Security</h2>
        <ul>
            <li>
                <b>Authentication System:</b> Snail IDE employs a secure authentication
                system ("Scratch Auth") to safeguard user login.
            </li>
            <li>
                <b>Vulnerabilities:</b> Snail IDE has active developers and a small
                set of users looking through our code to ensure proper security.
            </li>
        </ul>

        <h2>Limitation of Liability and Disclaimer</h2>
        <p>
            No Assumption of Responsibility: Snail IDE, its owners,
            administrators, and affiliates do not assume responsibility for any
            issues, damages, or consequences arising from the use of the
            website.
        </p>

        <h2>Exclusion of Damages</h2>
        <p>
            Snail IDE is not liable for any direct, indirect, incidental,
            consequential, or special damages, including but not limited to loss
            of data, revenue, or profits.
        </p>

        <h2>Use at Your Own Risk</h2>
        <p>
            Despite above security measures, users must acknowledge that they
            are using Snail IDE or its content at their own risk. Snail IDE is not responsible
            for any harm, loss, or damage to users' devices, data, or any other
            property.
        </p>

        <h2>Warranties</h2>
        <p>
            Snail IDE makes no warranties, express or implied, regarding the
            accuracy, reliability, or availability of the website or its
            content.
        </p>

        <h2>Changes to Terms</h2>
        <p>
            Snail IDE reserves the right to update or modify these terms of
            service at any time without prior notice. Users are encouraged to
            review this document periodically for any changes.
        </p>
        <p>
            By continuing to use Snail IDE, you agree to abide by the most
            recent version of these terms.
        </p>
        <p>
            We will place banners on the website when changes are made, they
            will only last for about 7 days, then they are removed.
        </p>

        <h2>Contact</h2>

        <p>
            Message <a href="https://scratch.mit.edu/users/Mr_rudy"
                >Mr_rudy on Scratch.</a
            >
        </p>

        <div style="width: 100%; height: 32px;"></div>
    </main>
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

    main {
        margin: 0 20%;
        width: 60%;
    }

    .small {
        font-size: 12px;
    }

    .detail-card {
        width: calc(100% - 24px);
        padding: 48px 12px;
        background: dodgerblue;
        color: white;
        text-align: center;
    }
    .detail-card p,
    .detail-card h1 {
        margin-block: 0;
    }
    .detail-card h1 {
        font-size: 48px;
    }

    .section-info {
        background: #6025ebad;
        height: 12rem;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0;
    }
    .section-info h1 {
        margin-block: 0;
        margin-left: 32px;
    }
    .section-info p {
        margin-block-end: 0;
        margin-left: 32px;
    }

    :global(body.dark-mode) a {
        color: dodgerblue;
    }
</style>
