import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track
    selectedMeetingRoom;

    meetingRoomInfoList = [
        {roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'13'},
        {roomName:'A-03', roomCapacity:'14'},
        {roomName:'B-01', roomCapacity:'15'},
        {roomName:'B-02', roomCapacity:'16'},
        {roomName:'B-03', roomCapacity:'17'},
        {roomName:'C-01', roomCapacity:'18'},
        {roomName:'C-02', roomCapacity:'19'},
        {roomName:'C-03', roomCapacity:'20'},
        {roomName:'D-01', roomCapacity:'21'}
    ];

    onTileSelectHandler(event) {
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName;
    }

    constructor() {
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
}