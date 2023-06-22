export default class DomainEventMetadata {
    private readonly aggregateId: number;
    private readonly occurredOn: Date;

    constructor(
        aggregateId: number,
    ) {
        this.aggregateId = aggregateId;
        this.occurredOn = new Date();
    }
}
