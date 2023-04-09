const saturdayFun = function (activity = 'roller-skate') {
return 'This Saturday, I want to ' + activity + '!';
}

const mondayWork = function (activity = 'go to the office') {
    return 'This Monday, I will ' + activity + '.';
}

function wrapAdjective (visualFlair = "*") {
    return function (adj = "special") {
        return "You are " + visualFlair.toString() + adj + visualFlair.toString() + "!";
    }
}
