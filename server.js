var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'hE7u0sbyOnLth4NJBHbQgZ0zp',
  consumer_secret: 'V6h4i60wc48x6LFHupmZMjoNlneKJWgeAeEnG5XZhwBpq9UfLf',
  access_token_key: '56804007-9VMcKiEd8cUDa4TdyxAMTduEoDy29FDCOWZd0oxaz',
  access_token_secret: 'jbulWtSuA27jIKb5JzskSAzRG2cqgAwZpr6zW40Jb0W37'
})

var params = {screen_name: 'smi_lo'}

//client.get('statuses/user_timeline', params, function(error, tweets, response) {
//  console.log(tweets);
//})I:q

I



//client.stream('statuses/user_timeline', params, function(stream) {
//  stream.on('data', function(tweet) {
//    console.log(tweet.text);
//  });
//
//  stream.on('error', function(error) {
//    console.log(error)
//  })
//});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {locations: '115.710953,-32.159486,116.040543,-31.783198'},  function(stream){
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
