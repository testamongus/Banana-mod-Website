import ProjectApi from "./projectapi"

export default {
    /**
     * PenguinMod's normal page
     */
    base: "https://snail-ide.js.org/",

    /**
     * PenguinMod's editor page
     */
    editor: "https://snail-ide.js.org/editor.html",

    /**
     * PenguinMod's credits page
     */
    credits: "https://snail-ide.js.org/credits.html",

    /**
     * PenguinMod's terms of service page
     */
    terms: "https://snail-ide.js.org/terms.html",

    /**
     * PenguinMod's privacy policy page
     */
    privacy: "https://snail-ide.js.org/privacy.html",

    /**
     * PenguinMod's guideline pages for services
     */
    guidelines: {
        /**
         * PenguinMod's project uploading guidelines
         */
        projects: "https://snail-ide.js.org/PenguinMod-Guidelines/PROJECTS"
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin"
    },

    /**
     * PenguinMod's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * PenguinMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * PenguinMod's home page
     */
    home: "https://home.penguinmod.com/",

    /**
     * PenguinMod's packager page
     */
    packager: "https://snail-ide.vercel.app/PenguinMod-Packager/",

    /**
     * PenguinMod's unofficial wiki
     */
    wiki: "https://penguinmod.fandom.com/wiki/Penguinmod",

    /**
     * Snail IDE's Guild. Only visible in Livetests until snail man approves of it.
     */
    discord: "https://www.guilded.gg/i/2V1VLBXE",

    /**
     * Snail IDE's group (for the funny)
     */
    group: "https://scratch.mit.edu/studios/33532977/",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website, but I changed it to Penguinmod because we are based off of that
     */
    turbowarp: "https://snail-ide.vercel.app",

    /**
     * PenguinMod's github page
     */
    github: "https://github.com/snail-ide/",

    /**
     * PenguinMod's basic API
     */
    basicApi: "https://snailbasicapi.nmsderp.repl.co/",

    /**
     * The admin panel for pm projects api
     */
    adminPanel: "https://snail-ide.vercel.app/panel",

    /**
     * donate to use yipeee
     */
    donate: "https://snail-ide.vercel.app/donate",
/**
     * our status page lol
     */
    status: "https://snail-ide.betteruptime.com/",
/**
     * direct page to upload
     */
    upload_project: "https://snail-ide.vercel.app/upload"
}
