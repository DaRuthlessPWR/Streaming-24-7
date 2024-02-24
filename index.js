const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Europe/London', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1202681824271142955')
    .setType('STREAMING')
    .setURL('https://twitch.tv/dapwr') //Must be a youtube video link 
    .setState('The Game Of Life')
    .setName('mrnekrozyt')
    .setDetails(`♠♠♠ .gg/grapes [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1175370961122500618/1211061126062940171/cashmoneybandzruthless.gif?ex=65ecd390&is=65da5e90&hm=131cfc372f2c3862ab5e3e719004c0c555acac468383d0e0261486e7e4454c71&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('DM TO GET ON') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1175370961122500618/1211061055481061407/2pfpruthless.jpg?ex=65ecd380&is=65da5e80&hm=cc1db7ab44b4ed2e7e390f76557dbbf767c5884caee310ee58b2a7694b77b4cf&=&format=webp&width=411&height=442') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('.gg/grapes') //Text when you hover the Small image
    .addButton('Who Is Ruthless?', 'http://ruthless.my.id')
    .addButton('#1 NITRO/BOOST SALES', 'https://discord.gg/grapes');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `♠♠♠ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
