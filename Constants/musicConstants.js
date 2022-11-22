music = {
  1: {
    name: "1",
    resource:
      "https://cdn.discordapp.com/attachments/976631025683816461/1043856070952620072/videoplayback.mp3",
  },
  2: {
    name: "2",
    resource:
      "https://cdn.discordapp.com/attachments/976631025683816461/1043858712646922282/Y2Mate.is_-_Two_Hours_Later_Spongebob_-_Sound_Effect_HD-5uJ4AynrgcQ-128k-1654909489802.mp3",
  },
  3: {
    name: "3",
    resource: "Banana",
  },
  4: {
    name: "4",
    resource: "Banana",
  },
  5: {
    name: "5",
    resource: "Banana",
  },
  6: {
    name: "6",
    resource: "Banana",
  },
  7: {
    name: "7",
    resource: "Banana",
  },
  8: {
    name: "8",
    resource: "Banana",
  },
};
function setA(id, name, resource) {
  music[id]["name"] = name;
  music[id]["resource"] = resource;
}

exports.music = music;
exports.setA = setA;

//   export { music, setA };
