const channels = ["FreeCodeCamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck",
"habathcx", "RobotCaleb", "noobs2ninjas"];

const corsanywhere = "https://cors-anywhere.herokuapp.com/";
const channelUrl = "https://wind-bow.glitch.me/twitch-api/channels/";
const streamUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
const twitchUrl = "https://go.twitch.tv/";

let fetchStreamUrls = channels.map(channel => {
  fetch(corsanywhere + streamUrl + channel)
    .then(response => response.json())
    .then(content => {
      //let streamStatus =
      content.stream === null ? document.getElementById(channel + 'status').innerText = "Not streaming" : document.getElementById(channel + 'status').innerText = content.stream.channel.status;;
    })
    .catch(error => console.log(error));
});

let fetchChannelUrls = channels.map(channel => {
  fetch(corsanywhere + channelUrl + channel)
    .then(response => response.json())
    .then(content => {
      let channelName = content.display_name;
      let logo = content.logo;
      let imgId = content._id;
      logo !== null ? document.getElementById(imgId).src = logo : document.getElementById(imgId).alt = channelName;
      document.getElementById(channelName).innerText = channelName;
    })
    .catch(error => console.log(error));
});

//let twitchUrls = channels.map(channel => console.log(twitchUrl + channel));
