import { LightningElement, track } from 'lwc';

//this is to give a HARD REFERENCE to the fields or objects.  
//this is preferred as it will automatically pickup the changes when you modify your fields or objects.
//it will also prevent the users to delete those fields/objects.
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {
    @track
    recordId;

    fieldsArray = [NAME_FIELD, PHONE_FIELD, WEBSITE_FIELD];

    successHandler(event) {
        this.recordId = event.detail.id;
    }
}