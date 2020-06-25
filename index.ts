import { Injector } from './injector';
import { Fruits } from './components/fruits';
import { Vegetables } from './components/vegetables';

const injector = new Injector();

const fruits = injector.resolve<Fruits>(Fruits);
const vegetables = injector.resolve<Vegetables>(Vegetables);

fruits.get();
vegetables.get();