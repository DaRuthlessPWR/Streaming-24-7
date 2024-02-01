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
    .setDetails(`♠♠♠ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/968309668600496198/988828316968562728/36DB555A-F589-42EB-B43F-EC3A46D1E5CE.gif?ex=655ccd22&is=654a5822&hm=ad572076d7ca6408559923f44de548d9f3a8801496afbd9e877e48b1cf7276b4&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('DM TO GET ON') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1161404154669969501/1172745935751741540/ruthlessskullpfp.jpg?ex=65616fc3&is=654efac3&hm=a396d0c8319ad8d82fd5300427cb2c0567f54b05b2856cb3c517812ec38d45d9&=&width=418&height=450') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('.gg/grapes') //Text when you hover the Small image
    .addButton('Who Is Ruthless?', 'https://guns.lol/ruthless')
    .addButton('.gg/GRAPES', 'https://discord.gg/grapes');

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
