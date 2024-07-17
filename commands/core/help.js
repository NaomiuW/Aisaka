const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'help',
    description:("All the commands this bot has!"),
    showHelp: false,

    async execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor('#D0DDFF')
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
            .setDescription(await Translate('Aisaka is a discord music bot that can play music from youtube, spotify, soundcloud and more!.<\n>if you want to invite it to your server, click [here](https://discord.com/oauth2/authorize?client_id=1260544170972680192&permissions=1738318823816512&integration_type=0&scope=bot).<\n>Have fun! - Music come from heart.'))
            .addFields([{ name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') }])
            .setTimestamp()
            .setFooter({ text: await Translate('Music comes first - Made with heart by Naomi V and the Community <Kiriyuka kitsune>'), iconURL: inter.member.avatarURL({ dynamic: true }) });

        inter.editReply({ embeds: [embed] });
    }
};