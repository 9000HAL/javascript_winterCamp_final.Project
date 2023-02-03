$(document).ready(function(){
  
  var magic8Ball = {};
  magic8Ball.listofanswers = ["It is certain---btw--- HAPPY BIRTHDAY JUSTICE!", "It is decidedly so--btw--thanks 4 everything Juan & Linda!", "Without a doubt---btw--much love to Casa Zavala!", "Yes, definitely---btw--definitely miss my BITWISE super friends!", "You may rely on it--btw--rely on Raiders to win without Derek Carr!", "As I see it, yes--btw--as I see it Melody & Flakey are cute!", "Most likely-btw--most likely you win if you buy a scratcher today!", "Outlook good--btw--outlook good for 49ers with Purdy this year!", "Yes--btw--yes ChatGPT can teach you to code", "Signs point to yes--btw--signs point to warm weather soon hang in there!", "Reply hazy, try again---btw--not purple hazy just lil' bit hazy", "Ask again later--btw--don't ask again about the Broncos", "Better not tell you now--btw--better not tell you now about Steelers either", "Cannot predict now--btw--can't predict earthquakes so be ready", "Concentrate and ask again--btw--don't strain your brain 'tho!", "Don't count on it--btw--easy meditation: close your eyes & count to 500 silently", "My reply is no--btw--sometimes I say no when I mean maybe", "My sources say no--btw--my secret sources are Orangy, Whitey & Bella", "Outlook not so good--btw--outlook great for a Happy 2023 for all y'all!", "Very doubtful---btw--not doubtful I thank you for trying my Magic 8 Ball app!"];
 
  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    console.log(question);
    console.log(answer);
  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    var question = prompt("What do you want to know?");
    magic8Ball.getAnswer(question);
  };
  
  $("#questionButton").click( onClick );
});

