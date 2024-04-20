const menuItems = [
    {
        name: '3D',
        extensionId: 'jg3d',
        tags: ['penguinmod'],
        customInsetColor: '#B200FF',
        description: 'Use the magic of 3D to spice up your project.',
        collaborator: 'PenguinMod',
        featured: true
    },
    {
        name: 'Monitors Plus',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Monitors-Plus.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Monitors-Plus.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'New variable blocks and new monitor types.',
        featured: true
    },
    {
        name: 'Tune Shark',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tune-Shark.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tune-Shark.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Advanced Sound Engine for playing your sounds and more. Inspired by LilyMakesThings',
        featured: true
    },
    {
        name: 'Screensharing',
        extensionId: 'https://editor.snail-ide.com/screen-sharing.js',
        iconURL: 'https://editor.snail-ide.com/Screensharing.png', // please forgive me the text is slightly offcenter
        collaborator: 'pooiod7',
        tags: ['penguinmod'],
        description: 'Share your screen and get the current frame as a image.',
        featured: true
    },
    {
        name: 'Lazy Collisions',
        extensionId: 'https://editor.snail-ide.com/Lazy-Collisions.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Lazy-Collisions.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'Newgrounds Audio',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Newgrounds-Audio.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Newgrounds-Audio.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Fetch Audio and Audio Information from Newgrounds. Works best with Tune Shark',
        featured: true
    },
    {
        name: 'Scratch Utitlites',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Scratch-Utilities.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Scratch-Utilities.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'Do many things via the Scratch API; you can even fetch cloud data from projects!',
        featured: true
    },

    {
        name: 'Prompts',
        extensionId: 'https://editor.snail-ide.com/Prompts.js',
        iconURL: 'https://editor.snail-ide.com/Prompts.png',
        collaborator: 'LoganCreatez',
        tags: ['penguinmod', 'ai'],
        description: 'Good prompts for PenguinGPT',
        featured: true
    },
    {
        name: 'SnailShare API',
        extensionId: 'https://editor.snail-ide.com/api.js',
        iconURL: 'https://editor.snail-ide.com/snailideapiext.png',
        snailExt: true,
        collaborator: 'BA4X',
        tags: ['penguinmod'],
        description: 'Fetch details of projects and users from Snailshare.',
        featured: true
    },
    {
        name: 'Pang API',
        extensionId: 'https://extensions.penguinmod.com/extensions/SammerLOL/pangapi.js',
        iconURL: 'https://extensions.penguinmod.com/images/SammerLOL/pangapi.png',
        collaborator: 'oc9x97',
        tags: ['penguinmod'],
        description: 'Fetch details of projects and users from PenguinMod.',
        featured: true
    },
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        iconURL: 'https://www.adacraft.org/studio/static/assets/cc4d68fe9d6a77c7f35f9d5461b60967.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/posenet2scratch/master/scratch-gui/src/lib/libraries/extensions/posenet2scratch/posenet2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods', 'ai'],
        description: 'Detect human poses quickly and accurately with a normal WebCam without using a special device',
        featured: true
    },
    {
        name: 'Facemesh2scratch',
        extensionId: 'facemesh2scratch',
        iconURL: 'https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/facemesh2scratch/master/scratch-gui/src/lib/libraries/extensions/facemesh2scratch/facemesh2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods', 'ai'],
        description: 'Use facetracking in your projects!',
        featured: true
    },
    {
        name: 'Scratch2WebSerialAPI',
        extensionId: 'scratch2webserialapi',
        iconURL: 'https://raw.githubusercontent.com/champierre/scratch2webserialapi/main/scratch-gui/src/lib/libraries/extensions/scratch2webserialapi/scratch2webserialapi.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/scratch2webserialapi/main/scratch-gui/src/lib/libraries/extensions/scratch2webserialapi/Icon.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods'],
        description: 'Do more complex things with hardware via the serial ports.',
        featured: true
    },
    {
        name: 'scratch2maqueen',
        extensionId: 'scratch2maqueen', // update reference once file names are updated
        tags: ['other_mods'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        iconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/scratch2maqueen/master/scratch-gui/src/lib/libraries/extensions/scratch2maqueen/scratch2maqueen-small.png',
        description: 'Control DFRobot Maqueen.',
        featured: true,
        collaborator: 'Vernier',
    },
    {
        name: 'ImageClassifer2Scratch',
        extensionId: 'ic2scratch',
        iconURL: 'https://raw.githubusercontent.com/champierre/ic2scratch/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch.png',
        insetIconURL: 'https://raw.githubusercontent.com/champierre/ic2scratch/master/scratch-gui/src/lib/libraries/extensions/ic2scratch/ic2scratch-small.png',
        collaborator: 'champierre',
        internetConnectionRequired: true,
        tags: ['other_mods', 'ai'],
        description: 'Image Classification Blocks.',
        featured: true
    },
    {
        name: 'Tile Grids',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Tile-Grids.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Tile-Grids.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'Key Simulator',
        extensionId: 'https://editor.snail-ide.com/keysim.js',
        collaborator: 'CubesterYT',
        tags: ['turbowarp'],
        description: 'Simulate pressing a key on the keyboard.',
        featured: true
    },
    {
        name: 'Site Runtime',
        extensionId: 'https://gabsthecuriouskid.github.io/FirstExtension/extensions/webextension.js',
        tags: ['other_mods'],
        iconURL: 'https://gabsthecuriouskid.github.io/FirstExtension/images/site-runtime.png',
        description: 'A Combined version of 2 Extensions: Packager Applications & AdaBrowser',
        featured: true,
        collaborator: 'MrIncredibleMaker',
        internetConnectionRequired: true,
    },
    {
        name: 'AdaBrowser',
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        tags: ['other_mods'],
        customInsetColor: '#B200FF',
        description: 'Interact with the web browser, orginally in Adacraft.',
        featured: true
    },
    {
        name: 'PenguinGPT',
        extensionId: 'https://editor.snail-ide.com/penguingpt.js',
        collaborator: 'cicerorph & Anonymous-cat1',
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/penguingpt.png',
        tags: ['turbowarp', 'ai'],
        description: 'ChatGPT in Snail IDE/PenguinMod has been taken to a whole new level with PenguinGPT. (This replaces the ChatGPT extension and is backwards compatible)',
        featured: true
    },
    {
        name: 'Gemini',
        extensionId: 'https://rubyteam.tech/cdn/extensions/geminiai.js',
        collaborator: 'cicerorph',
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/turbogemini.webp',
        tags: ['turbowarp', 'ai'],
        description: 'Use Google Gemini in your projects',
        featured: true
    },
    {
        name: 'Analytics',
        extensionId: 'https://rubyteam.tech/cdn/extensions/analytics.js',
        collaborator: 'cicerorph',
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/analytics.webp',
        tags: ['turbowarp', 'penguinmod'],
        description: 'Measure how many people are using your projects using the Ruby API.',
        featured: true
    },
    {
        name: 'PenguinPedia',
        extensionId: 'https://rubyteam.tech/cdn/extensions/penguinpedia.js',
        collaborator: 'Gen1X',
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/penguinpedia.webp',
        tags: ['penguinmod'],
        description: 'Get a lot of data from Wikipedia, like definitions and images!',
        featured: true,
    },
    {
        name: '1MB Shortener',
        extensionId: 'https://rubyteam.tech/cdn/extensions/1mb.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://rubyteam.tech/cdn/thumbnails/1mb.svg',
        description: 'Using 1mb Api you can now share links without it being long!',
        featured: true,
        collaborator: 'cicerorph'
    },
    {
        name: 'Random Utils',
        extensionId: 'https://editor.snail-ide.com/random_utils.js',
        snailExt: true,
        iconURL: 'https://editor.snail-ide.com/random.png',
        tags: ['penguinmod'],
        description: "Random utilites that you may or may not use.",
        featured: true
    },
    {
        name: 'Perlin Noise',
        extensionId: 'iygPerlin',
        iconURL: 'https://studio.penguinmod.com/static/assets/39f37f1b00fbf96926276701d8de4c89.png',
        tags: ['penguinmod'],
        description: "Blocks for generating and using Perlin noise. Good for generating terrain, clouds, and other things.",
        featured: true
    },
    {
        name: 'Save Data',
        extensionId: 'https://editor.snail-ide.com/save.js',
        collaborator: 'Mr_rudy',
        tags: ['penguinmod'],
        description: "Extremely easy way to save data.",
        featured: true
    },
    {
        name: 'Grayscale',
        extensionId: 'https://editor.snail-ide.com/grayscale.js',
        collaborator: 'Mr_rudy',
        iconURL: 'https://editor.snail-ide.com/grayscale.svg',
        tags: ['penguinmod'],
        description: "Toggle a dramatic grayscale effect on your project. ",
        featured: true
    },
    {
        name: 'Roku',
        extensionId: 'roku',
        internetConnectionRequired: true,
        collaborator: 'gvbvdxx',
        tags: ['other_mods'],
        description: 'Interact with your Roku tv via the GM2Helper software!',
        featured: true
    },
    {
        name: 'Randomly Blocks',
        extensionId: 'https://editor.snail-ide.com/randomlyBlocks.js',
        collaborator: 'mariocraft987',
        tags: ['other_mods'],
        description: 'Utilitys to have your project feel like a website',
        featured: true
    },
    // {
    //    name: 'NES Emulator',
    //     extensionId: 'nesemulator',
    //     internetConnectionRequired: true,
    //     collaborator: 'gvbvdxx',
    //     iconURL: 'https://gvbvdxx.github.io/GvbvdxxMod2/static/assets/5cce782349e882908aaf73c3adda0c5a.svg',
    //     tags: ['other_mods'],
    //     description: 'Run NES games and play them, right in Snail IDE',
    //    featured: true
    // },
    {
        name: 'TurboBuilder',
        href: 'https://turbobuilder-steel.vercel.app',
        extensionId: 'special_turboBuilder',
        iconURL: 'https://studio.penguinmod.com/static/assets/93db39f338237e6a51790829ba22a879.png',
        description: 'Create your own amazing extensions using a scratch-based UI!',
        collaborator: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['builders'],
        featured: true
    },
    {
        name: 'ExtCreate',
        href: 'https://extcreate.snail-ide.com/',
        extensionId: 'special_ExtCreate',
        description: 'Snail IDE version of TurboBuilder',
        collaborator: 'Started by JeremyGamer13, continued by jwklong, modified by nmsderp',
        tags: ['builders'],
        featured: true
    },
    {
        name: 'PenguinBuilder',
        href: 'https://chickencuber.github.io/PenguinBuilder/editor/',
        extensionId: 'special_PenguinBuilder',
        iconURL: 'https://u.cubeupload.com/Mr_rudy/costume1.png',
        description: 'Create your own extensions using Blockly.',
        collaborator: 'chickencuber',
        tags: ['builders'],
        featured: true
    },
    {
        name: 'Blockly2Math',
        extensionId: 'blockly2math',
        collaborator: 'Google',
        tags: ['penguinmod'],
        description: "Blockly math blocks.",
        featured: true
    },
    {
        name: "Pen",
        extensionId: 'pen',
        tags: ['scratch'],
        description: "Draw with your sprites.",
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: 'Bring words to life.',
        featured: true
    },
    {
        name: 'Objects',
        extensionId: 'https://extensions.penguinmod.com/extensions/skyhigh173/object.js',
        iconURL: 'https://extensions.penguinmod.com/images/skyhigh173/object.svg',
        tags: ['penguinmod'],
        collaborator: 'skyhigh173',
        description: 'Handle large JSON files at an extreme speed',
        featured: true
    },
    {
        name: 'Money Utilities',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Money-Utilities.js',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Money-Utilities.svg',
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: "Convert Currencies and get Currency Information.",
        featured: true
    },
    {
        name: "Video Sensing",
        extensionId: 'videoSensing',
        customInsetColor: '#74BDDC',
        tags: ['scratch'],
        description: "Sense motion with the camera.",
        featured: true
    },
    {
        name: 'Cloud Storage',
        extensionId: 'https://editor.snail-ide.com/cloudstorage.js',
        collaborator: 'pooiod7',
        tags: ['penguinmod'],
        description: 'Store data in a database, similar to Storage and Better Storage, but powered by a Snap! extension.',
        featured: true
    },
    {
        name: 'Text to Speech 2.0',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Text-to-Speech.js',
        twDeveloper: 'SharkPool',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Text-to-Speech.svg',
        tags: ['turbowarp'],
        description: 'Make your projects talk with the TikTok API.',
        featured: true
    },
    {
        name: 'Asset Manager',
        extensionId: 'https://extensions.turbowarp.org/Lily/Assets.js',
        twDeveloper: 'LillyMakesThings',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Assets.svg',
        tags: ['turbowarp'],
        description: 'Add, remove, and get data from various types of assets.',
        featured: true
    },
    {
        name: 'Inline Blocks',
        extensionId: 'pmInlineBlocks',
        collaborator: 'PenguinMod',
        tags: ['penguinmod'],
        description: 'Create quick blocks for simple tasks. Insert them into any circle spot and have them return any value you want.',
        featured: true
    },
    {
        name: "Text to Speech",
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        customInsetColor: '#9966FF',
        tags: ['scratch'],
        description: "Make your projects talk.",
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: "Speech to Text",
        extensionId: 'https://sayamindu.github.io/scratch-extensions/speech_to_text_extension.js',
        collaborator: 'sayamindu',
        iconURL: 'https://dinosaurmod.github.io/static/assets/0294d390ec3c5a58f3701b3098646770.png',
        insetIconURL: 'https://dinosaurmod.github.io/static/assets/eb4eeab5e4befb734d8d5b06cd78813f.svg',
        tags: ['scratch'],
        description: "Talk to your projects.",
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: "Translate",
        extensionId: 'translate',
        collaborator: 'Google',
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: "Translate text into many languages.",
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: "Make anything into a key.",
        featured: true
    },
    {
        name: 'Streamilator',
        extensionId: 'https://streamilator.github.io/Streamilator/extension.js',
        twDeveloper: 'mdwalters',
        tags: ['turbowarp'],
        description: 'A better way to handle audio from urls.',
        featured: true
    },
    {
        name: 'Search Params',
        extensionId: 'https://extensions.turbowarp.org/ZXMushroom63/searchApi.js',
        twDeveloper: 'ZXMushroom63',
        iconURL: 'https://extensions.turbowarp.org/images/ZXMushroom63/searchApi.svg',
        tags: ['turbowarp'],
        description: 'Interact with URL search parameters: the part of the URL after a question mark.',
        featured: true
    },
    {
        name: 'Numerical Encoding',
        extensionId: 'https://extensions.turbowarp.org/cs2627883/numericalencoding.js',
        twDeveloper: 'cs2627883',
        iconURL: 'https://extensions.turbowarp.org/images/cs2627883/numericalencoding.svg',
        tags: ['turbowarp'],
        description: 'Encode strings as numbers for cloud variables',
        featured: true
    },
    {
        name: 'Augmented Reality',
        extensionId: 'https://extensions.turbowarp.org/ar.js',
        twDeveloper: 'Vadik1',
        iconURL: 'https://extensions.turbowarp.org/images/ar.svg',
        tags: ['turbowarp'],
        description: 'Shows image from camera and performs motion tracking, allowing 3D projects to correctly overlay virtual objects on real world.',
        featured: true
    },
    {
        name: 'Camera Sensing Plus',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Camera-Sensing-Plus.js',
        twDeveloper: 'SharkPool',
        iconURL: 'https://sharkpools-extensions.vercel.app/extension-thumbs/Camera-Sensing-Plus.svg',
        tags: ['turbowarp'],
        description: 'Improved camera sensing',
        featured: true
    },
    {
        name: 'Cats',
        extensionId: 'https://extensions.penguinmod.com/extensions/Gen1x/CATS.js',
        collaborator: 'Gen1X',
        tags: ['penguinmod'],
        description: 'Blocks to give you cat facts. 😻',
        featured: true,
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        twDeveloper: 'CST1229',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        tags: ['turbowarp'],
        description: 'Create and edit .zip format files, including .sb3 files.',
        featured: true
    },

    {
        name: 'Files',
        extensionId: 'twFiles',
        twDeveloper: 'GarboMuffin',
        tags: ['turbowarp'],
        description: 'Blocks for reading and creating files.',
        featured: true
    },
    {
        name: 'Extended Sound',
        extensionId: 'jgExtendedAudio',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'Free speed and pitch control, starting sounds at certain positions, stopping sounds, etc.',
        featured: true
    },
    {
        name: 'Operators Expansion',
        extensionId: 'pmOperatorsExpansion',
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More operators like nand, nor, character code to character, reading multiple lined text line by line, etc.',
        featured: true
    },
    {
        name: 'Sensing Expansion',
        extensionId: 'pmSensingExpansion',
        tags: ['penguinmod', 'categoryexpansion'],
        description: "More sensing blocks for specific use cases or interacting with the user's device.",
        featured: true
    },
    {
        name: 'JSON',
        extensionId: 'jgJSON',
        tags: ['penguinmod'],
        description: 'Blocks for handling JSON objects and Arrays.',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        description: 'Box2D Physics extension created by Griffpatch.',
        customInsetColor: '#D9F0FF',
        featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net & Arrow',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        description: "Expansion of Scratch's clone features.",
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Multiple Timers',
        extensionId: 'jgTimers',
        tags: ['penguinmod'],
        description: 'Create different timers you can control seperately.',
        eventSubmittor: 'Arrow',
        featured: true
    },
    {
        name: 'Temporary Variables',
        extensionId: 'tempVars',
        tags: ['penguinmod'],
        description: 'Create variables for use in one block stack. Useful to not clutter the variable list with variables you only use once.',
        featured: true
    },
    {
        name: 'Runtime Modifications',
        extensionId: 'jgRuntime',
        tags: ['penguinmod'],
        description: 'Blocks for updating Scratch objects like the stage and sprites.',
        credits: 'TheShovel, showierdata9978',
        featured: true
    },
    {
        name: 'Storage',
        extensionId: 'jgStorage',
        docsURI: 'https://docs.snail-ide.com/extensions/storage',
        tags: ['penguinmod'],
        description: 'Store data after PenguinMod has already been closed out. Basic Server Storage is also included.',
        eventSubmittor: 'Fir & silvxrcat',
        featured: true
    },
    {
        name: 'Website Requests',
        extensionId: 'jgWebsiteRequests',
        tags: ['penguinmod'],
        description: 'Blocks to communicate with APIs and websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'CloudLink 4',
        extensionId: 'https://extensions.penguinmod.com/extensions/MikeDev101/cloudlink.js',
        tags: ['penguinmod', 'turbowarp'],
        iconURL: 'https://extensions.penguinmod.com/images/MikeDev101/cloudlink.svg',
        description: 'A powerful WebSocket extension for Scratch.',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: false
    },
    {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['penguinmod'],
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
    {
        name: 'Odd Messages',
        extensionId: 'oddMessage',
        description: 'For logging and variable utilization.',
        featured: true,
        extDeveloper: 'silvxrcat'
    },
    {
        name: 'HTML iframe Elements',
        extensionId: 'jgIframe',
        tags: ['penguinmod'],
        description: 'Blocks to place and move around frames that contain HTML content or websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Color Utility Blocks',
        extensionId: 'colors',
        tags: ['penguinmod'],
        description: 'Converters for Hex, RGB, HSV and Decimal colors and other color related things.',
        featured: true
    },
    {
        name: "Labels",
        extensionId: 'jwProto',
        tags: ['penguinmod'],
        description: "Labelling and Placeholders.",
        featured: true
    },
    {
        name: "Object Oriented Programming",
        extensionId: 'jwStructs',
        tags: ['penguinmod'],
        description: "OOP blocks. OOp is a programming paradigm that uses objects and their interactions to design applications and computer programs.",
        featured: true
    },
    {
        name: 'McUtils',
        extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
        description: 'Basic utilities for any fast food employee',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Skins',
        extensionId: 'https://extensions.turbowarp.org/Lily/Skins.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Skins.svg',
        description: 'Have your sprites render as other images or costumes',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Longman Dictionary',
        extensionId: 'https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://extensions.turbowarp.org/images/veggiecan/LongmanDictionary.png',
        description: 'Get the definitions of words from the Longman Dictionary',
        featured: true,
        twDeveloper: 'veggiecan0419'
    },
    {
        name: 'Beepbox',
        extensionId: 'beepboxsynth', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://jasonglenevans.github.io/GvbvdxxMod2/static/assets/d0a53858e0c079c8b99e85a652b4d1d9.png',
        insetIconURL: 'https://jasonglenevans.github.io/GvbvdxxMod2/static/assets/ba43bca2715721d8cb5ddbdb38267da0.png',
        description: 'Make some moosic',
        featured: true,
        twDeveloper: 'jasonglenevans'
    },
    {
        name: "HTML Canvas",
        extensionId: 'canvas',
        tags: ['penguinmod'],
        customInsetColor: '#0094FF',
        description: "Extra drawing tools using an HTML Canvas. Works well when used with other extensions.",
        featured: true
    },
    {
        name: 'Gamepad',
        extensionId: 'Gamepad',
        tags: ['turbowarp'],
        twDeveloper: 'GarboMuffin',
        iconURL: 'https://extensions.turbowarp.org/images/gamepad.svg',
        description: "Directly access gamepads instead of just mapping buttons to keys.",
        featured: true
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'xeltallivclipblend',
        tags: ['turbowarp'],
        description: 'Clipping outside of a specified rectangular area and additive color blending.',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        description: "A extension to lock the mouse pointer in the stage.",
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        description: "A extension to change what the mouse cursor looks like on the stage",
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        tags: ['penguinmod'],
        description: "Get a user's scratch name to prove they are a real scratch user.",
        featured: true
    },
    {
        name: 'Video',
        extensionId: 'https://extensions.turbowarp.org/Lily/Video.js',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Video.svg',
        twDeveloper: 'LillyMakesThings',
        tags: ['turbowarp'],
        description: "Play videos from URLs.",
        featured: true
    },
    {
        name: "micro:bit with USB",
        tags: ['hardware'],
        extensionId: 'vittamicrobit',
        collaborator: 'Vittascience',
        iconURL: 'https://www.adacraft.org/studio/static/assets/36854ae363289b372d95a65546decb87.png',
        insetIconURL: 'https://www.adacraft.org/studio/static/assets/42f568ea43bc3ccb3de1c575cfc04484.svg',
        description: "Blocks to interact with micro:bit through a USB cable connection",
        featured: true,
        disabled: false,
        usbConnectionRequired: true,
        launchSerialConnectionFlow: true,
        useAutoscan: false,
    },

    {
        name: 'Adacraft Runtime',
        extensionId: 'adaruntime',
        iconURL: 'https://www.adacraft.org/studio/static/assets/53d3dbd30eb60a7860a3ffdb4753a43f.png',
        tags: ['other_mods'],
        description: "Special blocks that interact with the vm.",
        featured: true
    },
    {
        name: '3D VR',
        extensionId: 'jg3dVr',
        iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsXcntVmSk264zyLaS3GdbOBQPhk3JjE5Vg&usqp=CAU',
        tags: ['penguinmod'],
        description: "Unfinished PenguinMod Extension.",
        collaborator: "PenguinMod",
        featured: true
    },

    // https://extensions.turbowarp.org/shreder95ua/resolution.js
    {
        name: 'Screen Resolution',
        extensionId: 'https://extensions.turbowarp.org/shreder95ua/resolution.js',
        iconURL: 'https://extensions.turbowarp.org/images/shreder95ua/resolution.svg',
        twDeveloper: 'shreder95ua',
        description: 'Get the resolution of the primary screen.',
        featured: true

    },
    {
        name: 'TypeScript',
        extensionId: 'typescratch',
        tags: ['penguinmod', 'programminglanguage'],
        description: "Similar to the JavaScript extension but for TypeScript",
        featured: true
    },
    {
        name: 'JavaScript',
        extensionId: 'jgJavascript',
        tags: ['penguinmod', 'programminglanguage'],
        description: 'Run your own custom code written in JavaScript!',
        featured: true
    },
    {
        name: 'Better Input',
        extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/BetterInput.js',
        iconURL: 'https://extensions.penguinmod.com/images/SharkPool/BetterInput.svg',
        tags: ['penguinmod'],
        collaborator: 'SharkPool-SP',
        description: 'Expansion to the Ask and Wait blocks.',
        featured: true
    },
    {
        name: 'GD API',
        extensionId: 'https://sharkpools-extensions.vercel.app/extension-code/Geometry-Dash-API.js',
        tags: ['penguinmod'],
        collaborator: 'SharkPool-SP',
        description: 'Access the GD api.',
        featured: true
    },
    {
        name: 'ISS',
        snailExt: true,
        extensionId: 'https://editor.snail-ide.com/iss.js',
        tags: ['penguinmod'],
        description: 'Get the latitude and longitude of the International Space Station',
        featured: true
    },
    {
        name: "TurboWarp Blocks",
        extensionId: 'tw',
        twDeveloper: 'GarboMuffin and Mr_rudy/nmsderp',
        tags: ['turbowarp'],
        description: 'Special blocks from TurboWarp, even more added from Snail IDE.',
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        tags: ['scratch'],
        description: "Connect your projects with the world.",
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectingMessage: "Connecting",
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        tags: ['scratch', 'hardware'],
        description: "Build interactive robots and more.",
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        customInsetColor: '#FFBF00',
        connectingMessage: "Connecting. Make sure the pin on your EV3 is set to 1234.",
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        tags: ['scratch', 'hardware'],
        description: "Bring robotic creations to life.",
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        customInsetColor: '#FFAB19',
        connectingMessage: "Connecting",
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        description: "Build with motors and sensors.",
        featured: true,
        disabled: false,
        tags: ['scratch', 'hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        customInsetColor: '#FF6680',
        connectingMessage: "Connecting",
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        customInsetColor: '#4C97FF',
        tags: ['scratch', 'hardware'],
        description: "Sense pull, push, motion, and spin.",
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectingMessage: "Connecting",
        helpLink: 'https://scratch.mit.edu/vernier'
    }
];

export default menuItems;