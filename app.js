const channels = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck",
"habathcx", "RobotCaleb", "noobs2ninjas"]

const corsanywhere = "https://cors-anywhere.herokuapp.com/";
const channelUrl = "https://wind-bow.glitch.me/twitch-api/channels/";
const streamUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
const twitchUrl = "https://go.twitch.tv/";

let fetchStreamUrls = channels.map(channel => {
  fetch(corsanywhere + streamUrl + channel)
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(console.log("Error"));
});

let fetchChannelUrls = channels.map(channel => {
  fetch(corsanywhere + channelUrl + channel)
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(console.log("Error"));
});

let twitchUrls = channels.map(channel => console.log(twitchUrl + channel));
