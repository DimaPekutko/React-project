import state from './redux/state'
import {addPost} from './redux/state'
import * as serviceWorker from './serviceWorker';
import { rerender } from './render.js';


rerender(state, addPost);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
