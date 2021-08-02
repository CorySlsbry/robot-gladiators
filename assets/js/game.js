// this creates a function names "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Robert";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function fight() {
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + "still has " + enemyHealth + " health left.");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(enemyName + " attacked " + playerName + ". " + playerName + ' now has ' + playerHealth + " health.");

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still as " + playerHealth + " health left.");
}
}

fight()
var promptFight = window.prompt("Would you like to LIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
if (promptFight === "fight"  ||  promptFight === "FIGHT")
{    
    enemyHealth = enemyHealth - playerAttack;

    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + "still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + " attacked " + playerName + ". " + playerName + ' now has ' + playerHealth + " health.");

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still as " + playerHealth + " health left.");
    }
} else if (promptFight === "skip"  || promptFight === "SKIP") {

    var confirmSkip = window.confirm("Are ou sure you'de like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skit this fight. Goodbye!");
        playerMoney = playerMoney -2;
    }
    else {
        fight();
    }
}
else {
    window.alert("you need to choose a valid option. Tray again!");
}

  

