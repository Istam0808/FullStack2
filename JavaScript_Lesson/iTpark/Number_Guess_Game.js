function game() {
    while (true) { 
        let lives = 5;
        let random_number = Math.floor(Math.random() * 100) + 1; 
        let lastAnswer = null; 

        while (true) {
            if (lives === 0) {
                alert("Game over");
                let playAgain = confirm("Хотите сыграть ещё раз?");
                if (!playAgain) {
                    alert("Спасибо за игру!");
                    return; 
                } else {
                    lives = 5; 
                    random_number = Math.floor(Math.random() * 100) + 1; 
                    lastAnswer = null;
                    break; 
                }
            }

            let answer = prompt("Угадайте число от 1 до 100");
            answer = parseInt(answer);

            if (!isNaN(answer)) { 
                if (answer >= 1 && answer <= 100) { 
                    if (answer === lastAnswer) {
                        alert("Вы уже вводили это число! Попробуйте другое.");
                        continue; 
                    }

                    lastAnswer = answer; 

                    if (answer === random_number) {
                        alert("Поздравляю, вы угадали число!");
                        let playAgain = confirm("Хотите сыграть ещё раз?");
                        if (!playAgain) {
                            alert("Спасибо за игру!");
                            return; 
                        } else {
                            lives = 5; 
                            random_number = Math.floor(Math.random() * 100) + 1; 
                            lastAnswer = null; 
                            break; 
                        }
                    } else {
                        lives--;
                        if (answer > random_number) {
                            alert("Меньше! Осталось жизней: " + lives);
                        } else {
                            alert("Больше! Осталось жизней: " + lives);
                        }
                    }
                } else {
                    alert("Введите число от 1 до 100!");
                }
            } else {
                alert("Введите корректное число!");
            }
        }
    }
}

game();
