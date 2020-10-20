

document.addEventListener('DOMContentLoaded',function(){
    console.log('extention running');
    
    var index=Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerHTML=conversion(quotes[index].quote);
    document.getElementById("author").innerHTML="- "+quotes[index].author;
        
});


function conversion(str){
    return str.replace(/’/g,"&apos;").replace(/"/g,"&quot;");
}





var quotes=[
    {
        "author":"Walt Disney",
        "quote":"All our dreams can come true, if we have the courage to pursue them."
    },
    {
        "author":"Mark Twain",
        "quote":"The secret of getting ahead is getting started."
    },
    {
        "author":"Michael Jordan",
        "quote":"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed."
    },
    {
        "author":"Mary Kay Ash",
        "quote":"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."
    },
    {
        "author":"Andy Grove",
        "quote":"Only the paranoid survive."
    },
    {
        "author":"Babe Ruth",
        "quote":"It’s hard to beat a person who never gives up."
    },
    {
        "author":"Leah Busque",
        "quote":"I wake up every morning and think to myself, how far can I push this company in the next 24 hours."
    },
    {
        "author":"Michele Ruiz",
        "quote":"If people are doubting how far you can go, go so far that you can’t hear them anymore."
    },
    {
        "author":"Arianna Huffington",
        "quote":"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes understanding that failure is not the opposite of success, it’s part of success.   "
    },
    {
        "author":"Joss Whedon",
        "quote":"Write it. Shoot it. Publish it. Crochet it, saute it, whatever. MAKE."
    },
    {
        "author":"Dalai Lama XIV",
        "quote":"Happiness is not something ready made. It comes from your own actions."
    },
    {
        "author":"Eleanor Roosevelt",
        "quote":"Do what you feel in your heart to be right – for you’ll be criticized anyway."
    },
    {
        "author":"Socrates",
        "quote":"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."
    },
    {
        "author":"Lewis Carroll",
        "quote":"It’s no use going back to yesterday, because I was a different person then."
    },
    {
        "author":"Eleanor Roosevelt",
        "quote":"Do what you feel in your heart to be right for you’ll be criticized anyway."
    },
    {
        "author":"Socrates",
        "quote":"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."
    },
    {
        "author":"Lewis Carroll",
        "quote":"It’s no use going back to yesterday, because I was a different person then."
    },
    {
        "author":"Eleanor Roosevelt",
        "quote":"Do one thing every day that scares you."
    },
    {
        "author":"Helen Keller",
        "quote":"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."
    },
    {
        "author":"Joss Whedon",
        "quote":"Everything you can imagine is real."
    },
    {
        "author":"Neil Gaiman",
        "quote":"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."
    },
    {
        "author":"William W. Purkey",
        "quote":"You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth."
    },
    {
        "author":"Abraham Lincoln",
        "quote":"Whatever you are, be a good one."
    }

];
