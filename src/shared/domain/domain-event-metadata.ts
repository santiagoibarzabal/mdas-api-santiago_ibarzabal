export default class DomainEventMetadata {
    private readonly aggregateId: string;
    private readonly occurredOn: Date;

    constructor(
        aggregateId: string,
    ) {
        this.aggregateId = aggregateId;
        this.occurredOn = new Date();
    }
}
