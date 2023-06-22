import DomainEventMetadata from "./domain-event-metadata";

export default abstract class DomainEvent {
    protected aggregateId: number;
    protected metadata: DomainEventMetadata
    protected type: string;

    public eventType(): string {
        return this.type;
    }

    protected constructor(
        aggregateId: number,
        type: string,
    ) {
        this.aggregateId = aggregateId;
        this.type = type;
        this.metadata = new DomainEventMetadata(aggregateId);
    }
}
