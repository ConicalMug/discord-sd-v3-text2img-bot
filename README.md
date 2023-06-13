# discord-sd-v3-text2img-bot
A simple Discord bot that uses discord.js and Stable Diffusion API's V3 Text2Image API to allow for basic AI image generation in a Discord channel.

Stable Diffusion API: https://stablediffusionapi.com/

## How to Setup

1. Clone the repository

```powershell
git clone https://github.com/ConicalMug/discord-sd-v3-text2img-bot.git
```

2. Install the required dependencies

```powershell
npm install
```

3. Create a `.env` file from the example file or create one from scratch

```powershell
cp .env.example .env
```

4. Fill in the required details in the newly created `.env` (Do not share these keys! They will give anyone access to their associated bots/APIs.)

5. Start the bot

```powershell
npm run start
```

## How to Use

The bot responds to any message starting with `!sdbot`. The message should only consist of the Stable Diffusion prompt.

Example:

```powershell
!sdbot cat wearing a hat
```
