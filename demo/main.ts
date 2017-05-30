import app, { Router } from '../index';
import home from './router-components/home';
import counter from './router-components/counter';
import counters from './router-components/counters';
import echo from './router-components/echo';
import dragdrop from './router-components/dragdrop';
import todo from './router-components/todo';
import typeahead from './router-components/typeahead';
import multi from './router-components/typeahead-multi-selection';

const element = document.getElementById('my-app');
[home, counter, counters, echo, dragdrop, todo, typeahead, multi].forEach(c => c(element));

new Router();

