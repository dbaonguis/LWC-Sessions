import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api
    meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'};

    @api
    showRoomInfo = false;

    @wire(CurrentPageReference)
    pageRef;


    tileClickHandler() {
        //this is to communicate with the parent component
        const tileClicked = new CustomEvent('tileclick', {detail: this.meetingRoomInfo, bubbles: true});
        this.dispatchEvent(tileClicked);

        //this is to communicate with another component within the same page (also one who subscribed to listen to this event)
        fireEvent(this.pageRef, 'pubsubtileclick', this.meetingRoomInfo);
    }
}