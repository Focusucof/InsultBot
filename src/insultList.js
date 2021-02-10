module.exports.getInsult = function() {

    return randPicker();

}

let insultList = [

    "You must be an experiment in Artificial Stupidity.",
    "You're not stupid... just possessed by a retarded ghost.",
    "",
    "Get your money up not your funny up :pig:",
    "test5",
    "test6"

]

//some insults from randominsults.net

function randPicker() {

    var item = insultList[Math.floor(Math.random() * insultList.length)];
    return item;

}
