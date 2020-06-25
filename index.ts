import { Injector } from './injector';
import { Fruits } from './components/fruits';

const injector = new Injector();

const fruits = injector.resolve<Fruits>(Fruits);
fruits.get();