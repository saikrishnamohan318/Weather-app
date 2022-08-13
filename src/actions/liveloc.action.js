import axios from 'axios';
const apikey = '57585867c017425c442cf8a689ef42aa';

export const liveLocAction = (latlon) => async (dispatch) => {
    dispatch({type: 'LIVELOC_GET_REQUEST'})
    try{
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}`)
        dispatch({type: 'LIVELOC_GET_SUCCESS', payload: data.data})
    }catch (err){
        dispatch({type: 'LIVELOC_GET_FAILURE', payload: err})
    }
}