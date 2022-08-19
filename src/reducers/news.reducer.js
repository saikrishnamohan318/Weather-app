export const weatherNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'WEATHERNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'WEATHERNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'WEATHERNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const generalNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'GENERALNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'GENERALNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'GENERALNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const businessNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'BUSINESSNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'BUSINESSNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'BUSINESSNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const techNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'TECHNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'TECHNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'TECHNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const moviesNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'MOVIESNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'MOVIESNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'MOVIESNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const sportsNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SPORTSNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'SPORTSNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'SPORTSNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}

export const searchNewsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCHNEWS_GET_REQUEST':
            return {isLoading: true};
        case 'SEARCHNEWS_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'SEARCHNEWS_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}