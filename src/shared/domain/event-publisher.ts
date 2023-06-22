import DomainEvent from "./domain-event";

export default interface EventPublisher {
    publish(events: DomainEvent[]): void;
}
