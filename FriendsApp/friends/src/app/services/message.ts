export class Message {
    message: string;
    senderUid: string;
    receiverUid: string;
    timestamp: number;

    constructor(
        message: string,
        senderUid: string,
        receicerUid: string,
        timestamp: number
    ) {
        this.message = message;
        this.senderUid = senderUid;
        this.receiverUid = receicerUid;
        this.timestamp = timestamp;
    }
}
