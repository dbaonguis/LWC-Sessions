/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
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
        }).catch(error => {
            console.error('Error in getting the accounts', error.body.message);
        });
    }
}