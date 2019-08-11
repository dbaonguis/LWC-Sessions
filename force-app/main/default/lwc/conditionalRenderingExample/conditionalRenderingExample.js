import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track
    showDiv = false;

    @track
    cityList = ['Manila', 'Rome', 'Toronto', 'Morris Plains'];

    showDivHandler(event) {
        this.showDiv = event.target.checked;
    }

}