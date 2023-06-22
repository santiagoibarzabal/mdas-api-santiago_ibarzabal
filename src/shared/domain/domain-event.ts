import DomainEventMetadata from "./domain-event-metadata";

export default abstract class DomainEvent {
    private aggregateId: string;
    private metadata: DomainEventMetadata
    private type: string;

    protected constructor(
        aggregateId: string,
        type: string,
    ) {
        this.aggregateId = aggregateId;
        this.type = type;
        this.metadata = new DomainEventMetadata(aggregateId);
    }
}
