const R6StatsKey = String("key");
/*To obtain the code, contact the R6Stats Discord.
https://discord.com/invite/pUdraS3
*/
importClass(org.jsoup.Jsoup);
const R6stats = require("player-stats.js");


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith('!')) {
    replier.reply(Main("Pepe.Joker","pc"));
  }
}

function Main(username, platform) {
  const data = JSON.parse(Jsoup.connect("https://api2.r6stats.com/public-api"+ R6stats.seasonalStats(username,platform).url).header("Authorization", "Bearer " + R6StatsKey).ignoreContentType(true).ignoreHttpErrors(true).timeout(5000).get().text());
  return data
}
function Stats(username, platform) {
  const data = Main(username, platform);
  return replier.reply("Level : " + data.progression.level + "\n");
}
