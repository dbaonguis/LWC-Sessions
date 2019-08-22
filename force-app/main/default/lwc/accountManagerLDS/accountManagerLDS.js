/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';

const fieldArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountManagerLDS extends LightningElement {
    @track
    accountName;

    @track
    accountPhone;

    @track
    accountWebsite;

    @track
    recordId;

    //recordId: $recordId
    @wire(getRecord, {recordId: '$recordId', fields: fieldArray})
    newAccountRecord;

    
    accountNameChangeHandler(event) {
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event) {
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event) {
        this.accountWebsite = event.target.value;
    }

    createAccount() {
        const fields = {};
        fields.Name = this.accountName;
        fields.Phone = this.accountPhone;
        fields.Website = this.accountWebsite;

        const recordInput = {'apiName': 'Account', 'fields': fields};
        createRecord(recordInput).then(response => {
            console.log('Account has been created: ', response.id);
            this.recordId = response.id;
        }).catch(error => {
            console.error('Error in creating account: ', error);
        });
    }

    get retAccountName() {
        if (this.newAccountRecord.data) {
            return this.newAccountRecord.data.fields.Name.value;
        }
        return undefined;
    }

    get retAccountPhone() {
        if (this.newAccountRecord.data) {
            return this.newAccountRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retAccountWebsite() {
        if (this.newAccountRecord.data) {
            return this.newAccountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}