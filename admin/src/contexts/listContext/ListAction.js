export const getListsRequest = () => ({
    type: 'GET_LISTS_REQUEST'
});

export const getListsSuccess = (lists) => ({
    type: 'GET_LISTS_SUCCESS',
    payload: lists
});

export const getListsFailure = () => ({
    type: 'GET_LISTS_FAILURE'
});

export const createListRequest = () => ({
    type: 'CREATE_LIST_REQUEST'
});

export const createListSuccess = (list) => ({
    type: 'CREATE_LIST_SUCCESS',
    payload: list
});

export const createListFailure = () => ({
    type: 'CREATE_LIST_FAILURE'
});


export const deleteListRequest = () => ({
    type: 'DELETE_LIST_REQUEST'
});

export const deleteListSuccess = (id) => ({
    type: 'DELETE_LIST_SUCCESS',
    payload: id
});

export const deleteListFailure = () => ({
    type: 'DELETE_LIST_FAILURE'
});