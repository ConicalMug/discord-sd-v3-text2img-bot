require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const request = require('request');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log('Stable Diffusion bot is online!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.CHANNEL_ID) return;
    if (!message.content.startsWith('!sdbot ')) return;
    
    try {
        let prompt = message.content.slice(7);
        await message.channel.sendTyping();
        var options = {
            'method': 'POST',
            'url': 'https://stablediffusionapi.com/api/v3/text2img',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "key": process.env.SD_KEY,
                "prompt": prompt,
                "negative_prompt": null,
                "width": "512",
                "height": "512",
                "samples": "1",
                "num_inference_steps": "20",
                "seed": null,
                "guidance_scale": 7.5,
                "safety_checker": "no",
                "multi_lingual": "no",
                "panorama": "no",
                "self_attention": "no",
                "upscale": "no",
                "webhook": null,
                "track_id": null
            })
        };

        request(options, function (error, response) {
            if (error) throw new Error(error);
            let responseJSON = JSON.parse(response.body);
            console.log(responseJSON);
            if(responseJSON.status == "success") {
                message.reply(`Generated image for '${prompt}': ${responseJSON.output[0]}`);
            }
        });
    } catch(error) {
        console.log(`An error has occurred: ${error}`);
    }
});

client.login(process.env.DISCORD_TOKEN);
