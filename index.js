// writeCards(["Ada", "Brendan", "Ali"], "birthday");
function writeCards(names, shindig){
    let output = [];
    for(let i = 0; i < names.length; i++)
    {
        output.push(`Thank you, ${names[i]}, for the wonderful ${shindig} gift!`);
    }
    return output;
}

function countDown(number){
    while (number >= 0)
    {
        console.log(number);
        --number;
    }

}