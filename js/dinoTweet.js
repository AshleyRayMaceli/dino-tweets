//
exports.DinoTweet = function(emoji, verb, dino, job, fruit, corporation) {
  this.emoji = emoji;
  this.verb = verb;
  this.dino = dino;
  this.job = job;
  this.fruit = fruit;
  this.corporation = corporation;

};
//
// exports.DinoTweet.prototype.create = function(myFunction){
//
//   $.get('/emoji.json').then(function(response) {
//     myFunction(response);
//   });

exports.getEmojis = function() {
  var newEmoji = $.get('/emoji.json').then(function(response) {
    newEmoji = response.seaEmoji[Math.floor((Math.random() * response.seaEmoji.length) + 1)];
    console.log(newEmoji);
    return newEmoji;
  });

};
