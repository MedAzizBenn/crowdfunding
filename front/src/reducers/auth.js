import {AUTH,LOGOUT} from '../constants/actionType'

    const authReducer = ( state={authData:null} , action ) => {
      switch ( action.type ) {
        case AUTH :
          localStorage.setItem('profile',JSON.stringify(...action?.data));
          return { ...state,authData:action?.data};

                       
        default :
          break ;
                        }
    } ;
    export default authReducer ;