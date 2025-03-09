const Word = ["apple", "dance", "guitar", "mountain", "Elephant", "Coffee", "Book", "Light", "Chair", "Window", "Laptop",
"House", "Beach", "River", "Dream", "Rocket", "Galaxy", "Happy", "Star", "Ocean", "Paper", "Mirror", "Music", "Forest", "Travel",
"Earth", "Time", "Cookie", "Grass", "Cloud", "Forest", "Banana", "Cup", "Stone", "Snow", "Table", "Bicycle", "Freedom", "Turtle", 
"Lion", "Universe", "Love", "Phone", "Smile", "Winter", "Keyboard", "Robot", "Pencil", "Art", "Laptop", "Camera", "Jacket", "Puzzle", 
"Tiger", "Airplane", "Mushroom", "Blanket", "Blanket", "Door", "Chocolate", "Flag", "Bike", "Basket", "Pizza", "Storm", "Birthday", 
"Clothes", "Train", "Adventure", "Journey", "Banana", "Sweet", "Adventure", "Ocean", "Water", "Ghost", "Notebook", "Writing", "Family", 
"Universe", "School","Study", "Idea", "Business", "House", "Car", "Flower", "Dog", "Cat", "Bird", "Tree", "Fish", "Frog", 
"Keyboard", "Mobile","Computer", "Peace", "Vacation", "Glass", "Moon", "Lake", "Bed", "Brush", "King", "Queen", "Monkey", 
"Sun", "Coffee", "Paper", "Desk", "Cup", "Cell", "Window", "Ocean"];

const game = document.getElementById("answers");
const guessWord = document.getElementById("input_word");
const letterCount = document.getElementById("letter_count")
const lettersUsed = document.getElementById("letters_used")
let guesses = 0;
const letters = []
const mainWord = Word[Math.floor(Math.random() * Word.length)].toLowerCase()
console.log(mainWord)
letterCount.innerHTML = "Your word has " + mainWord.length + " letters."
guessWord.maxLength = mainWord.length

guessWord.addEventListener("keypress", e => {
    if (e.key === "Enter" && guesses < 6) {
        const rightLetter = document.createElement("p");
        const notRightLetter = []
        guessWord.maxLength = mainWord.length+1
        const userGuess = guessWord.value.trim().toLowerCase();
        guessWord.value = " ";

        if (userGuess === mainWord) {
            const answer = document.createElement("p");
            answer.classList.add('correct')
            game.innerHTML = "";
            answer.textContent = "Correct! Answer was "+ mainWord + " !";
            game.appendChild(answer);
            guesses = 6;
        } else {
            const guessRow = document.createElement("div")
            guessRow.classList.add("word")
            for (let i = 0; i < mainWord.length; i++) {
                const letter = document.createElement("span");
                if(!letters.includes(userGuess[i])){
                    letters.push(userGuess[i])
                }
                lettersUsed.innerHTML = "Letters used: " + letters.join(", ")
                if (mainWord[i] === userGuess[i]) {
                    letter.textContent = mainWord[i];
                } else {
                    letter.textContent = "_"
                }

                if(mainWord.includes(userGuess[i]) && mainWord[i] != userGuess[i]){
                    notRightLetter.push(userGuess[i])
                }
                rightLetter.textContent = "Not right position: " + notRightLetter.join(", ")
                guessRow.appendChild(letter)
                game.appendChild(rightLetter)
            }
            game.appendChild(guessRow)
        }
        guesses++;
    }

    if(guesses === 6){
        const answer = document.createElement("p");
        answer.classList.add('correct')
        game.innerHTML = "";
        answer.textContent = "WRONG! Answer was " + mainWord
        game.appendChild(answer)
    }
});

const button = document.getElementById("play_again")

button.addEventListener("click", e =>{
    location.reload()
    console.log("play again")
})

// nav
const menuButton = document.getElementById("menu_button")
const navList = document.getElementById("nav_list")
menuButton.addEventListener("click", e =>{
    navList.classList.toggle("hidden")
})