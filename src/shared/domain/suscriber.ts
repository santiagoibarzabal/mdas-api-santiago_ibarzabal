import DomainEvent from "./domain-event";

export interface Subscriber {
  connect(): void
  on(event: DomainEvent): void
}
