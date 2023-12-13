

function Quote() {
    var the_quote = [" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ", " “You only live once, but if you do it right, once is enough.” ", " “Be yourself; everyone else is already taken.” ", " “So many books, so little time.” ", " “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” "];



    var name_of_quote = [" ― Albert Einstein ", " ― Mae West ", " ― Oscar Wilde ", " ― Frank Zappa ", " ― Albert Camus "];


    

    

    var num = Math.floor(Math.random() * name_of_quote.length);

    let set = new Set();



    document.getElementById("demo-1").innerHTML = the_quote[num];
    document.getElementById("demo-2").innerHTML = name_of_quote[num];

}


