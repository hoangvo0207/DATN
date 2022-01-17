export const getRecommendsRequest = () => ({
    type: 'GET_RECOMMENDS_REQUEST'
});

export const getRecommendsSuccess = (recommends) => ({
    type: 'GET_RECOMMENDS_SUCCESS',
    payload: recommends
});

export const getRecommendsFailure = () => ({
    type: 'GET_RECOMMENDS_FAILURE'
});

export const deleteRecommendRequest = () => ({
    type: 'DELETE_RECOMMEND_REQUEST'
});

export const deleteRecommendSuccess = (id) => ({
    type: 'DELETE_RECOMMEND_SUCCESS',
    payload: id
});

export const deleteRecommendFailure = () => ({
    type: 'DELETE_RECOMMEND_FAILURE'
});