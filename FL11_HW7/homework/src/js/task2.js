let question = prompt('Do you want to play a game?')
let chose = true;
let wantstoplayagain = true;
if(!question) {
    alert('You did not become a billionaire, but can.')
} else {
    let winer = false;
    let playagain = true;
    let prizefull = 100;
    let prizehalf = 50;
    let pricequad = 25;
    let randomlow = 0;
    let randomhigh = 8;
    let startattempts = 3;
    let prize = 0;
    let start = 0;
    let entered = '';
    let multiplier = 1;
    let attemptsleft = 3;
    let attemptscount = 3;
    let possibleprize = 0;
    let extendrange = 4;
    let continueincrese = 2;
        attemptsleft = startattempts;
            for (let w = 0; w < attemptscount; w++) {
                if (winer === false) {
                    start = Math.floor(Math.random() * (randomhigh - randomlow + 1) + randomlow);
                    switch (w) {
                        case 0:
                            possibleprize = prizefull * multiplier;
                            break;
                        case attemptscount - (attemptscount-1):
                            possibleprize = prizehalf * multiplier;
                            break;
                        case attemptscount-1:
                            possibleprize = pricequad * multiplier;
                            break;
                        default:
                            console.log('Out of range for possible');
                            break;
                    }
                    entered = Number(prompt('Choose a roulette pockett number from ' + randomlow + ' to ' 
					+ randomhigh + '  Attempts left: ' + attemptsleft 
					+ ' \nTotal prize: ' + prize + '$ \nPossible prize on current attempt: ' + possibleprize + '$'));
                    attemptsleft = attemptsleft - 1;
                    if (start === entered) {
                        prize = prize + possibleprize;
                        winer = true;
                    }
                }
            }
            if (winer === false) {
                alert('x');
                wantstoplayagain = confirm('Do you want to play again?');
                chose = true;
                playagain = false;  
            } else {
                playagain = confirm('Congratulation, you won! Your prize is:'
                 + prize + '$' + 'Do you want to continue?');
                if (playagain) {
                    winer = false;
                    multiplier = multiplier * continueincrese;
                    randomhigh = randomhigh + extendrange;
                }
            }
        
    }
