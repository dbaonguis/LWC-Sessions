import { LightningElement, api } from 'lwc';

export default class GenericRecordForm extends LightningElement {
    @api
    recordId;

    @api
    objectApiName;

    successHandler(event) {
        this.recordId = event.detail.id;
    }
}