import ProjectApi from "./projectapi"

export default {
    /**
     * PenguinMod's normal page
     */
    base: "https://editor.snail-ide.com",

    /**
     * PenguinMod's editor page
     */
    editor: "https://editor.snail-ide.com/editor.html",

    /**
     * PenguinMod's credits page
     */
    credits: "https://editor.snail-ide.com/credits.html",

    /**
     * PenguinMod's terms of service page
     */
    terms: "https://snail-ide.com/terms",

    /**
     * PenguinMod's privacy policy page
     */
    privacy: "https://editor.snail-ide.com/privacy.html",

    /**
     * PenguinMod's guideline pages for services
     */
    guidelines: {
        /**
         * PenguinMod's project uploading guidelines
         */
        projects: "https://editor.snail-ide.com/PenguinMod-Guidelines/PROJECTS"
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
    home: "https://snail-ide.com",

    /**
     * PenguinMod's packager page
     */
    packager: "https://snail-ide.com/PenguinMod-Packager/",

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
    turbowarp: "https://snail-ide.com",

    /**
     * PenguinMod's github page
     */
    github: "https://github.com/snail-ide/",

    /**
     * PenguinMod's basic API
     */
    basicApi: "https://sn-bapi.onrender.com/",

    /**
     * The admin panel for pm projects api
     */
    adminPanel: "https://snail-ide.com/panel",

    /**
     * donate to use yipeee
     */
    donate: "https://snail-ide.com/donate",
/**
     * our status page lol
     */
    status: "https://snail-ide.betteruptime.com/",
/**
     * direct page to upload
     */
    upload_project: "https://snail-ide.vercel.app/upload",
    /**
     * docs url
     */
    docs: "https://docs.snail-ide.com/",
}
