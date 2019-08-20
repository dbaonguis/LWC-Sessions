import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SelectedMeetingRoom2 extends LightningElement {
    @track
    selectedMeetingRoom = {};

    //The 'subscriber' must have a 'pageRef' variable.
    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        registerListener('pubsubtileclick', this.onMeetingRoomSelectHandler, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    onMeetingRoomSelectHandler(payload) {
        this.selectedMeetingRoom = payload;
    }

}