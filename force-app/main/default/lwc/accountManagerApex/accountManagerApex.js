/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';

export default class AccountManagerApex extends LightningElement {
    
    //@wire(getAllAccounts)
    //accounts;

    @track
    accounts;

    @track
    numberOfRecords;
    
    get accountsRetrieved() {
        if (this.accounts) {
            console.log('accounts:', this.accounts);
            return true;
        }
        return false;
    }

    numberOfAccountChangeHandler(event) {
        this.numberOfRecords = event.target.value;
    }

    getAccounts() {
        getAllAccounts({numberOfRecords: this.numberOfRecords}).then(response => {
            console.log('response', response);
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title: 'Accounts Loaded',
                message: this.numberOfRecords + ' Accounts fetched from server.',
                variant: 'success'
            });
            this.dispatchEvent(toastEvent);
        }).catch(error => {
            console.error('Error in getting the accounts', error.body.message);
            const toastEvent = new ShowToastEvent({
                title: 'An Error Occured',
                message: error.body.message,
                variant: 'error'
            });
            this.dispatchEvent(toastEvent);
        });
    }
}