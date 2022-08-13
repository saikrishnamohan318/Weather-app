export const searchReducer = (state = {}, action) => {
    switch(action.type){
        case 'SEARCH_GET_REQUEST':
            return {isLoading: true};
        case 'SEARCH_GET_SUCCESS':
            return {isLoading: false, data: action.payload};
        case 'SEARCH_GET_FAILURE':
            return {isLoading: true, error: action.payload};
        default:
            return state;
    }
}