import 'reflect-metadata';
import { Type } from '../injector';

/**
 * Decorator function to annotate classes which can inject another ones in constructors.
 * A decorator is required to be able to get Reflect's metadata.
 */
export const Injection = () => (target: Type<any>) => {}; 