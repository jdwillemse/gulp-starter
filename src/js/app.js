import $ from 'jquery';
import {whaaaat} from './module';


var message = '<h2>World</h2>';

$('body').append(message);

console.log('page.js loaded!', whaaaat());
