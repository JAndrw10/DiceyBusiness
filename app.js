let dieArray = [];
let counter = 1;

const dieContainer = document.createElement("div");
dieContainer.className = "die-container";
document.body.appendChild(dieContainer);

const generateDieBtn = document.getElementById('Generate-die-btn');
const rerollDieBtn = document.getElementById('reroll-die-btn');
const sumDieBtn = document.getElementById('sum-die-btn');

// create a class names Die that represents a single die.
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die'
        this.value = document.createTextNode(counter);
        this.roll();
        dieArray.push(this)
        dieContainer.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());
        // this.div.addEventListener('click' , function() {
        //     this.roll();
        // })
    }

    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        this.div.textContent = this.value;
    }
}


generateDieBtn.addEventListener("click", function () {
    //create new instance of class 
    new Die();
    counter++;
    console.log(" you clicked for new die ");

});



rerollDieBtn.addEventListener('click', () => {
    for( let i = 0; i < dieArray.length; i++){
        dieArray[i].roll();
    }
});



sumDieBtn.addEventListener('click', () => {
    let sum  = 0;
    for(let i = 0; i < dieArray.length; i++){
        sum += dieArray[i].value
    }
    alert(`The sum is ${sum}.`);

})























































// // 	const addDieButton = document.createElement("button");
// // 	addDieButton.textContent = "Add Die";
// // 	addDieButton.addEventListener("click", function(){
// // 		const newDie = document.createElement("die");
// // 		newDie.classNmae = "Die";

// // 	dieContainer.appendChild(newDie);
// // });
// // document.body.appendChild(addDieButton);
