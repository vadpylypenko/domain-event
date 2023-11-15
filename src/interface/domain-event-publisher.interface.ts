import { DomainEventInterface } from './domain-event-interface';

export interface DomainEventPublisherInterface {
  /**
   * Publishes the domain event to the event channel.
   * 
   * @param domainEvent 
   */
  publish(domainEvent: DomainEventInterface): Promise<void>;
}
