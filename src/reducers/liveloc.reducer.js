export const liveLocReducer = (state = {}, action) => {
    switch(action.type){
        case 'LIVELOC_GET_REQUEST':
            return {isLoading: true}
        case 'LIVELOC_GET_SUCCESS':
            return {isLoading: false, data: action.payload}
        case 'LIVELOC_GET_FAILURE':
            return {isLoading: true, err: action.payload}
        default:
            return state
    }
}