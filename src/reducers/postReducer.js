import { POST_INIT, POST_SUCCESS, POST_FAIL } from '../action/fetchPost';

export function post(state={
    start:true,
    init:false,
    success:false,
    fail:false,
    data:null
}, action){
    switch(action.type){
        case POST_INIT :  {
            const message = action.initMessage; 
          return Object.assign({}, state, { 
              start: false,
              init: true,
              success: false,
              fail: false,
              data: message,
          })
        }

        case POST_SUCCESS : {
            const message = action.message;
            return Object.assign({}, state, {
                start: false,
                init: false,
                success: true,
                fail: false,
                data: message
            })
        }

        case POST_FAIL: {
            const message = action.err;
            return Object.assign({}, state, {
                start: false,
                init: false,
                success: false,
                fail: true,
                data: message
            })
        }

        default:
            return state
    }

}
