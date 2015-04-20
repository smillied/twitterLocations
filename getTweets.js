var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'hE7u0sbyOnLth4NJBHbQgZ0zp',
  consumer_secret: 'V6h4i60wc48x6LFHupmZMjoNlneKJWgeAeEnG5XZhwBpq9UfLf',
  access_token_key: '56804007-9VMcKiEd8cUDa4TdyxAMTduEoDy29FDCOWZd0oxaz',
  access_token_secret: 'jbulWtSuA27jIKb5JzskSAzRG2cqgAwZpr6zW40Jb0W37'
})

/**
 * Retrieve all smi_lo tweets
 **/
client.get('statuses/user_timeline', {screen_name: 'martinfowler'}, function(error, tweets, response) {
  for(i=0;i<tweets.length;i++) {
    var tweet = tweets[i];
    console.log(tweet.user.screen_name + ' : ' + tweet.text);
  }
})
