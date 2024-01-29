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
    timeZone: 'Asia/Dhaka', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setApplicationId('1079010612769722508')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/nocopyrightsounds') //Must be a youtube video link 
    .setState('The Ultimate Masterpiece of the White Room‌')
    .setName('Kiyotaka Ayanokōji')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/868886105473298432/1201467592636899419/20240129_160232.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Kiyotaka Ayanokōji') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1102093230906023946/1135219284071698562/HB_VerifyWhite.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Verify') //Text when you hover the Small image
    .addButton('Discord Server', 'https://discord.gg/PBED6yEXpT')
    .addButton('Facebook Page', 'https://facebook.com/patkhet.lol');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ℭ𝔩𝔞𝔰𝔰𝔯𝔬𝔬𝔪 𝔬𝔣 𝔱𝔥𝔢 𝔈𝔩𝔦𝔱𝔢`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
