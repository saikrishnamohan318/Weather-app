import axios from 'axios';

export const weatherNewsAction = () => async (dispatch) => {
    dispatch({type: 'WEATHERNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'weather rain', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'WEATHERNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'WEATHERNEWS_GET_FAILURE', payload: err})
    }
}

export const generalNewsAction = () => async (dispatch) => {
    dispatch({type: 'GENERALNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'india politics', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'GENERALNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'GENERALNEWS_GET_FAILURE', payload: err})
    }
}

export const businessNewsAction = () => async (dispatch) => {
    dispatch({type: 'BUSINESSNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'business markets', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'BUSINESSNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'BUSINESSNEWS_GET_FAILURE', payload: err})
    }
}

export const techNewsAction = () => async (dispatch) => {
    dispatch({type: 'TECHNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'technology AI', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'TECHNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'TECHNEWS_GET_FAILURE', payload: err})
    }
}

export const moviesNewsAction = () => async (dispatch) => {
    dispatch({type: 'MOVIESNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'movies tollywood bollywood', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'MOVIESNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'MOVIESNEWS_GET_FAILURE', payload: err})
    }
}

export const sportsNewsAction = () => async (dispatch) => {
    dispatch({type: 'SPORTSNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'sports cricket football', lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'SPORTSNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'SPORTSNEWS_GET_FAILURE', payload: err})
    }
}

export const searchNewsAction = (value) => async (dispatch) => {
    dispatch({type: 'SEARCHNEWS_GET_REQUEST'})
    try{
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: value, lang: 'en', countries: 'in', sort_by: 'date',  page: '1'},
            headers: {
                'x-api-key': '43pLf2Na40pqswTeGsD-Ol5UPh0P7PECijmrdNXDMZc'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'SEARCHNEWS_GET_SUCCESS', payload: data.data.articles});
    }catch (err){
        dispatch({type: 'SEARCHNEWS_GET_FAILURE', payload: err})
    }
}