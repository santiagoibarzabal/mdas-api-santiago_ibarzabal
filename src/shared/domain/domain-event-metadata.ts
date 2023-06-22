export default class DomainEventMetadata {
    private aggregateId: string;
    private occurredOn: Date;

    constructor(
        aggregateId: string,
    ) {
        this.aggregateId = aggregateId;
        this.occurredOn = new Date();
    }
}
