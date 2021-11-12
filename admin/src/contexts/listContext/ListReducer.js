const ListReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LISTS_REQUEST':
            return {
                lists: [],
                isLoading: true,
                error: false
            };
        case 'GET_LISTS_SUCCESS':
            return {
                lists: action.payload,
                isLoading: false,
                error: false
            };
        case 'GET_LISTS_FAILURE':
            return {
                lists: [],
                isLoading: false,
                error: true
            };
        case 'CREATE_LIST_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'CREATE_LIST_SUCCESS':
            return {
                lists: [...state.lists, action.payload],
                isLoading: false,
                error: false
            };
        case 'CREATE_LIST_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case 'DELETE_LIST_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case 'DELETE_LIST_SUCCESS':
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                isLoading: false,
                error: false
            };
        case 'DELETE_LIST_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: true
            };
        default:
            return {
                ...state
            }
    }
};

export default ListReducer;