import axios from 'axios';
const apikey = '57585867c017425c442cf8a689ef42aa';

export const searchAction = (iv) => async (dispatch) => {
    dispatch({type: 'SEARCH_GET_REQUEST'})
    try{
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${iv}&appid=${apikey}`)
        dispatch({type: 'SEARCH_GET_SUCCESS', payload: data.data});
    }catch (err){
        dispatch({type: 'SEARCH_GET_FAILURE', payload: err})
    }
}