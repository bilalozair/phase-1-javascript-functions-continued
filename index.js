// code your solution here
saturdayFun();

function saturdayFun(activity) {
    let string1 ='This Saturday, I want to roller-skate!';
    let string2 = 'This Saturday, I want to ';
    return (activity === undefined) ? (string1) : (string2 + activity + "!");
}

const mondayWork = function(activity) {
    let string3 ='This Monday, I will go to the office.';
    let string4 = 'This Monday, I will '
    return (activity === undefined) ? (string3) : (string4 + activity +".");
}
function wrapAdjective(string) {
    const innerFunction = function (inner = "special") {
      return `You are ${string}${inner}${string}!`;
    };
    return innerFunction;
  }