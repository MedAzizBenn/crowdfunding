import { combineReducers } from ' redux ' ;
import posts from './posts'
import auth from './auth' ;

export const reducers = combineReducers ( { posts,auth } ) ;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));