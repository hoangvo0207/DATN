const RecommendReducer = (state, action) => {
    switch (action.type) {
        case 'GET_RECOMMENDS_REQUEST':
            return {
                recommends: [],
                isLoading: true,
                error: false
            };
        case 'GET_RECOMMENDS_SUCCESS':
            return {
                recommends: action.payload,
                isLoading: false,
                error: false
            };
        case 'GET_RECOMMENDS_FAILURE':
            return {
                recommends: [],
                isLoading: false,
                error: true
            };
        case 'FIND_RECOMMEND':
            return {
                ...state,
                recommend: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default RecommendReducer;