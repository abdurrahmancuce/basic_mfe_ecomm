import { mount as prooductsMount } from 'products/ProductsIndex';
import { mount as cartMount} from 'cart/CartShow';

console.log('Container!');
 
prooductsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));