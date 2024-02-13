// this extension will not be discussed


/*
   This extension was made with TurboBuilder!
   https://turbobuilder-steel.vercel.app/
*/
(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = [];


    function doSound(ab, cd, runtime) {
        const audioEngine = runtime.audioEngine;

        const fetchAsArrayBufferWithTimeout = (url) =>
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                let timeout = setTimeout(() => {
                    xhr.abort();
                    reject(new Error("Timed out"));
                }, 5000);
                xhr.onload = () => {
                    clearTimeout(timeout);
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(`HTTP error ${xhr.status} while fetching ${url}`));
                    }
                };
                xhr.onerror = () => {
                    clearTimeout(timeout);
                    reject(new Error(`Failed to request ${url}`));
                };
                xhr.responseType = "arraybuffer";
                xhr.open("GET", url);
                xhr.send();
            });

        const soundPlayerCache = new Map();

        const decodeSoundPlayer = async (url) => {
            const cached = soundPlayerCache.get(url);
            if (cached) {
                if (cached.sound) {
                    return cached.sound;
                }
                throw cached.error;
            }

            try {
                const arrayBuffer = await fetchAsArrayBufferWithTimeout(url);
                const soundPlayer = await audioEngine.decodeSoundPlayer({
                    data: {
                        buffer: arrayBuffer,
                    },
                });
                soundPlayerCache.set(url, {
                    sound: soundPlayer,
                    error: null,
                });
                return soundPlayer;
            } catch (e) {
                soundPlayerCache.set(url, {
                    sound: null,
                    error: e,
                });
                throw e;
            }
        };

        const playWithAudioEngine = async (url, target) => {
            const soundBank = target.sprite.soundBank;

            let soundPlayer;
            try {
                const originalSoundPlayer = await decodeSoundPlayer(url);
                soundPlayer = originalSoundPlayer.take();
            } catch (e) {
                console.warn(
                    "Could not fetch audio; falling back to primitive approach",
                    e
                );
                return false;
            }

            soundBank.addSoundPlayer(soundPlayer);
            await soundBank.playSound(target, soundPlayer.id);

            delete soundBank.soundPlayers[soundPlayer.id];
            soundBank.playerTargets.delete(soundPlayer.id);
            soundBank.soundEffects.delete(soundPlayer.id);

            return true;
        };

        const playWithAudioElement = (url, target) =>
            new Promise((resolve, reject) => {
                const mediaElement = new Audio(url);

                mediaElement.volume = target.volume / 100;

                mediaElement.onended = () => {
                    resolve();
                };
                mediaElement
                    .play()
                    .then(() => {
                        // Wait for onended
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

        const playSound = async (url, target) => {
            try {
                if (!(await Scratch.canFetch(url))) {
                    throw new Error(`Permission to fetch ${url} denied`);
                }

                const success = await playWithAudioEngine(url, target);
                if (!success) {
                    return await playWithAudioElement(url, target);
                }
            } catch (e) {
                console.warn(`All attempts to play ${url} failed`, e);
            }
        };

        playSound(ab, cd)
    }
    class Extension {
        getInfo() {
            return {
                "blockIconURI": "data:image/jpeg;base64,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",
                "id": "poopooutils",
                "name": "Poo Poo Utils",
                "color1": "#3b1c02",
                "color2": "#000000",
                "blocks": blocks
            }
        }
    }
    blocks.push({
        opcode: `poo`,
        blockType: Scratch.BlockType.COMMAND,
        text: `poo 🚽`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`poo`] = async (args, util) => {
        doSound(`https://t.ly/2gHlM`, Scratch.vm.runtime.targets.find(target => target.isStage), Scratch.vm.runtime);
    };

    blocks.push({
        opcode: `rizz`,
        blockType: Scratch.BlockType.COMMAND,
        text: `rizz 🤪🤪🤪🤪🚽🐌🐌`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`rizz`] = async (args, util) => {
        doSound(`https://sn-bapi.vercel.app/buauauau.mp3`, Scratch.vm.runtime.targets.find(target => target.isStage), Scratch.vm.runtime);
    };

    blocks.push({
        opcode: `smelly`,
        blockType: Scratch.BlockType.BOOLEAN,
        text: `smelly?`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`smelly`] = async (args, util) => {
        return true
    };

    Scratch.extensions.register(new Extension());
})(Scratch);