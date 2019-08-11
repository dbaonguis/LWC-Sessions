import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track
    currentResult;

    @track
    previousResults = [];

    @track
    showPreviousResults = false;
    
    firstNumber;
    secondNumber;

    numberChangeHandler(event) {
        const inputBoxName = event.target.name;

        if (inputBoxName === 'firstNumber') {
            this.firstNumber = parseInt(event.target.value);
        } else if (inputBoxName === 'secondNumber') {
            this.secondNumber = parseInt(event.target.value);
        }
    };

    addHandler() {
        //this.currentResult = 'Result of ' + this.firstNumber + ' + ' + this.secondNumber + ' is equal to ' + (this.firstNumber + this.secondNumber);
        this.currentResult = `Result of ${this.firstNumber} + ${this.secondNumber} is equal to ${(this.firstNumber + this.secondNumber)}`;
        this.previousResults.push(this.currentResult);
    };

    subtractHandler() {
        //this.currentResult = 'Result of ' + this.firstNumber + ' - ' + this.secondNumber + ' is equal to ' + (this.firstNumber - this.secondNumber);
        this.currentResult = `Result of ${this.firstNumber} - ${this.secondNumber} is equal to ${(this.firstNumber - this.secondNumber)}`;
        this.previousResults.push(this.currentResult);
    };

    multiplyHandler() {
        //this.currentResult = 'Result of ' + this.firstNumber + ' x ' + this.secondNumber + ' is equal to ' + (this.firstNumber * this.secondNumber);
        this.currentResult = `Result of ${this.firstNumber} x ${this.secondNumber} is equal to ${(this.firstNumber * this.secondNumber)}`;
        this.previousResults.push(this.currentResult);
    };

    divideHandler() {
        //this.currentResult = 'Result of ' + this.firstNumber + ' / ' + this.secondNumber + ' is equal to ' + (this.firstNumber / this.secondNumber);
        this.currentResult = `Result of ${this.firstNumber} / ${this.secondNumber} is equal to ${(this.firstNumber / this.secondNumber)}`;
        this.previousResults.push(this.currentResult);
    };

    togglePreviousResults(event) {
        this.showPreviousResults = event.target.checked;
    };
}