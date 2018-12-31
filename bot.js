const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
 console.log('Bot started!');
});

client.on('message', message => {
  let messageArray = message.content.split(' ')
let command = messageArray[0]
let args = messageArray.slice(1) 
 let owners = 'Yioutra, Emile, MCArTyR. Helper - MegaMix_Craft'
    let prefix = 'tb!';
  if(message.content == `${prefix}help`){
      let emb = new Discord.RichEmbed()
      .setColor('ff0000')
      .setTitle('Список команд:')
      .addField(`${prefix}help - помощь`, `Пример: ${prefix}help`)
      .addField(`${prefix}invite - приглашения`, `Пример: ${prefix}invite`)
      .addField(`${prefix}developer - создатели бота`, `Пример: ${prefix}developer`)
      .setFooter(`Сервер поддержки бота: https://discord.gg/R4kGmkR`);
    message.channel.send(emb);
  }else
  if(message.content == `${prefix}developer`){
      message.channel.send(`Создатели бота: ${owners}`);
  }else
  if(message.content == `${prefix}invite`){
      let emb = new Discord.RichEmbed()
      .setColor('00ff54')
      .setTitle('Приглашения:')
      .setDescription(`[Пригласить бота](https://discordapp.com/oauth2/authorize?client_id=528496375004921857&scope=bot&permissions=8)\n[Сервер поддержки](https://discord.gg/R4kGmkR)`);
message.channel.send(emb)
      }
});
if(message.content == `${prefix}say`){
  let words = args[0];
        if(!words) return message.reply("Вы должны указать текст!");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
}
client.on('ready', () => {
client.user.setPresence({
    game:{
name:"TubleBoat | tb!help",
type: 'WATCHING'    
}
})
});
client.login(process.env.BOT_TOKEN);
