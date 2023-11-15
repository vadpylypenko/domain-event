import { DomainEventInterface } from './domain-event-interface';

export interface DomainEventHandlerInterface {
    /**
     * Handles the domain event.
     * 
     * @param domainEvent - The domain event.
     */
    handle(domainEvent: DomainEventInterface)
}