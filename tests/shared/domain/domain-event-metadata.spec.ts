import DomainEventMetadata from "../../../src/shared/domain/domain-event-metadata";

describe('DomainEventMetadata', () => {
  it("should be defined", () => {
    expect(DomainEventMetadata).toBeDefined();
  });

  it("should be able to create a new instance", () => {
    new DomainEventMetadata(1);
  });

  it('should set the aggregateId correctly', () => {
    const metadata = new DomainEventMetadata(1);
    expect(metadata.getAggregateId()).toBe(1);
  });

  it('should set the occurredOn property with the current date', () => {
    const metadata = new DomainEventMetadata(1);
    const date = new Date();
    expect(metadata.getOccurredOn().getTime()).toBeCloseTo(date.getTime(), -2);
  });
});
