const Discord = require("discord.js");
const downvote = "👎";
module.exports.run = async (bot, message, args) => {


	await message.channel.send("awaiting shitty memes");
	bot.on('messageReactionAdd', (reaction, user) => {
  		let limit = 3;
  		console.log(reaction.count);
  		if ((reaction.emoji.name == '👎') && (reaction.count >= limit)){
  			reaction.message.delete();

  		}   		

		});
	}
	

module.exports.help = {
	name: "await"
}