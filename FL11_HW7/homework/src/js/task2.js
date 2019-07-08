const ask = confirm('Do you want to play a game?');
let prise1= 100;
let prise2= 50;
let prise3= 25;
let attempts = 3;
let total_prise=0;
let min = 0;
let max = 8;
let one =1;
let two =2;
const double_cicle = 2;
const range_4 = 4;
let rand = Math.round(Math.random() * (max - min) + min);

if(!ask) {
    alert('You did not become a billionaire, but can.');
} else if (ask) {
        do {
            const enter_number_1 = prompt('Chose a roulette pocket number from 0 to 8 \nAttempts left: '
                + attempts+ ' \nTotal price: ' + total_prise + '$ \nPossible price at current attempt: '
                + prise1 + '$');
            if (enter_number_1 === rand) {
                total_prise = total_prise + prise1;
                alert('Congratulation, you won! Your prize is: ' + total_prise + ' $');
            } else if (enter_number_1 !== rand) {
                const enter_number_2 = prompt('Chose a roulette pocket number from 0 to 8 \nAttempts left: '
                    + (attempts-one) + ' \nTotal price: ' + total_prise + '$ \nPossible price at current attempt: '
                    + prise2 + '$');
                if (enter_number_2 === rand) {
                    total_prise = total_prise + prise2;
                    alert('Congratulation, you won! Your prize is:  ' + total_prise + ' 50$');
                } else if (enter_number_2 !== rand) {
                    const enter_number_3 = prompt('Chose a roulette pocket number from 0 to 8 ' +
                        '\nAttempts left: ' + (attempts-two) + ' \nTotal price: ' + total_prise
                        + '$ \nPossible price at current attempt: ' + prise3 + '$');
                    if (enter_number_3 === rand) {
                        total_prise = total_prise + prise3;
                        alert('Congratulation, you won! Your prize is:  ' + total_prise + ' $');
                    } else if (enter_number_1 !== rand && enter_number_2 !== rand
                        && enter_number_3 !== rand) {
                        alert('Thank you for your participation. Your prize is: ' + total_prise +'$');
                        const ask_2 = confirm('Do you want to play again?');
                        if (!ask_2) {
                            break;
                        } else if(ask) {
                            attempts = attempts*double_cicle;
                            max = max+range_4;
                            prise1 *=double_cicle;
                            prise2 *=double_cicle;
                            prise3 *=double_cicle;
                        }
                    }
                }
            }
        } while (ask)
}