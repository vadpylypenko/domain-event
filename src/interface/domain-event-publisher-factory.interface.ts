import { DomainEventPublisherInterface } from './domain-event-publisher.interface';

export interface DomainEventPublisherFactoryInterface<T> {
  /**
   * Creates the instance of the event publisher.
   * 
   * @param options - The options for the publisher creation.
   */
  create(options: T): DomainEventPublisherInterface;
}
