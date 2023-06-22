import DomainEventMetadata from "./domain-event-metadata";

export default abstract class DomainEvent {
    protected aggregateId: string;
    protected metadata: DomainEventMetadata
    protected type: string;

    public eventType(): string {
        return this.type;
    }

    protected constructor(
        aggregateId: string,
        type: string,
    ) {
        this.aggregateId = aggregateId;
        this.type = type;
        this.metadata = new DomainEventMetadata(aggregateId);
    }
}
