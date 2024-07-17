module.exports = {
    app: {
        token: 'MTI2MDU0NDE3MDk3MjY4MDE5Mg.GnNLzs.O0viS5VGIojpgNC0LKRpV-Qktws9ZUDIM3hmfs',
        playing: '/play | Aisaka - Music Come from Heart',
        global: true,
        guild: '',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: true,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
