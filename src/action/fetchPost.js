import { apiUrl } from '../config/api';

export const POST_INIT = 'TEST INIT';
export const POST_SUCCESS = 'TEST_SUCCESS';
export const POST_FAIL= 'TEST_FAIL';


export function fetchPostAction(){
    return dispatch =>  {
        let initMessage = "Fetch initi";
        dispatch(actionInit(initMessage));
        fetch(apiUrl+'wp-json/wp/v2/posts').then(res => {return res.json()})
        .then(res => {
            dispatch(actionSuccess(res));
        }).catch(err=>{
            dispatch(actionFail(err));
        })
    }
}


function actionInit(initMessage){
    return {
        type: POST_INIT,
        initMessage
    }
} 

function actionSuccess(message){
    return {
        type: POST_SUCCESS,
        message
    }
}

function actionFail(err) {
    return {
        type: POST_FAIL,
        err
    }
}