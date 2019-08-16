import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track
    value = ['red'];

    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Black Marker', value: 'black' }
    ];

    @api
    selectCheckbox(checkboxValue) {
        //TODO: pag-aralan yung 'find' ng javascript
        const selectedCheckbox = this.options.find(option => {
            return checkboxValue === option.value;
        });

        if (selectedCheckbox) {
            this.value = selectedCheckbox.value;
            return "Successfully checked";
        }
        return "No checkbox found";

    }

}