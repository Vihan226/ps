const btn = document.getElementById('btn');
const result = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function(){
    console.log("You can speak now")
}

recognition.onresult = function(event){
var text = event.results[0][0].transcript;
console.log(text)
document.getElementById('result').innerHTML= text
read(text)
}

function read(text){
    var speech= new SpeechSynthesisUtterance();
    speech.text = text 
    if(text.includes('time')){
        speech.text = 'It is ' + new Date().getHours()+" "+new Date().getMinutes()+" right now"
    }
    else if(text.includes('my birthday'))
    speech.text= ' How would I know'

    if(text.includes('date')){
        speech.text= 'It is' + new Date()
    }

    // greetings
    if(text.includes('how are you')|| text.includes('how is it been')){
       speech.text = 'I am good, how are you. Welcome to you own personal assistant'
    }
    if(text.includes('Hello')|| text.includes('hello')){
        speech.text = 'Welcome to your own personal assistant, where you can talk to me as your own worker. You can start by saying How are you or maybe what is the date'
     }

    if(text.includes('what is your name')){
        speech.text= 'you can call me by any name' 
    }
 
    if(text.includes('thank you')){
        speech.text= 'you are welcome' 
    }

    if(text.includes('what is pi')){
        speech.text= 'its a very delicious food' 
    }

    if(text.includes('making food')||text.includes('what food should I make')||text.includes('what food should I create')||text.includes('what food should I prepare')){
        speech.text= 'You can eat salad, chicken, soup, ice cream, sandwhich or even an egg' 
    }

    if(text.includes('eat in Kalahari')||text.includes('best places to eat at the Kalahari')){
        speech.text= 'The best places to eat at the Kalahari is Sortino’s Italian Kitchen,the last bite, blux grill and bar or the pizza pub' 
    }

    if(text.includes('make money')){
        speech.text= 'You can create money by doing chores, helping to clean the snow area for someone,  or maybe applying for part time jobs such as , mc donald, chick fil a, popeyes and more' 
    }

    
    if(text.includes('games to play')){
        speech.text= 'The best games are fortnite, minecraft, call of duty but my personal favorite is fifa' 
    }

    if(text.includes('unity')||text.includes('Unity')){
        speech.text= 'You can get started by using their already made game such as the car game or the fps game to get started with unity. Or you can watch some tutorial on youtube' 
    }
    
    if(text.includes('can you play')){
        speech.text= 'yes I can, complete the dash, jingle bells jingle on the dash' 
    }

    if(text.includes('way')){
        speech.text= 'You got it! Awesome! Now you can say I want to have a memory competition for a very chellanging competition!' 
    }
    if(text.includes('I want to have a memory competition')){
        speech.text= 'Now you are getting starter for the memory competition. Make sure you say number by number such as two four nine. OK, all set. Repeat this. 2' 
    }
    if(text.includes('2')){
        speech.text= 'You got it. Easy Enough right. Now repeat this. 278' 
    }

    if(text.includes('278')){
        speech.text= 'You got it. Easy Enough right. Now repeat this. 45678' 
    }

    if(text.includes('4 5 6 7 8')){
        speech.text= 'Well Done! Now repeat this. 640842' 
    }

    if(text.includes('640 842')){
        speech.text= 'Very Impressive! Can you repeat this. 78422156' 
    }

    if(text.includes('78422 156')){
        speech.text= 'Amazing. Make sure you get this right to prove you are the real one at memory and focus. Repeat this. 45826784' 
    }

    if(text.includes('4582 6784')){
        speech.text= 'You have finished all the levels. You are pro at remembering things! Amazing job!' 
    }
    if(text.includes('most richest person in the world')){
        speech.text= 'The most richest person in the world is Jeff Bezos! He is the CEO of Amazon! ' 
    }

    if(text.includes('most expensive trophy')){
        speech.text= 'The most expensive trophy is the fifa world cup trophy. It  is so special that no one can touch it besides the winners. The cost of the trophy is 20 million you s dollars ' 
    }

    if(text.includes('online shopping')){
        speech.text= 'The best places for online shopping are, amazon, ebay, alibaba, aliexpress, etsy, poshmark, and some brand stores such as gucci, l v, and versacci ' 
    }

    if(text.includes('vacation') ){
        speech.text= 'The best places to go on a vacation is Diseny World, Singapores sentosa, universal studio or some beaches in miami, hawaii, or virginia ' 
    }

    if(text.includes('how to make a robot') ){
        speech.text= 'You can get started by buying an arduino uno kit and try to play with it. Go see some tutorials of programming arduino uno. Thats the way to get started ' 
    }

    if(text.includes('robot dog')|| text.includes('robot dogs') ){
        speech.text= 'The best robot dog is sony aibo. Yes it is a little bit expensive but it is very cool. If you want something cool but in your price rate, you can buy the robot jennie dog. It costs 449 dollars. Jennie robot dog does everthing besides walking. Its also a lebrador puppy style dog. Its cool right!' 
    }
    


 
    
    window.speechSynthesis.speak(speech)
}