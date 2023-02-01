import {ADD_ITEM, REMOVE_ITEM, CLEAR_CART, REDUCE_COUNT, ADD_COUNT, COUNT_ITEMS, FILTER_CATEGORY, FILTER_AUTHOR } from './actionTypes'

export const addItem = (item) => {
    return (dispatch) => {
        // console.log(item)
        dispatch({
            type: ADD_ITEM,
            payload: item
        })
       
    }
}

export const removeItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }
}

export const addCount = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_COUNT,
            payload: item
        })
    }
}

export const reduceCount = (item) => {
    return (dispatch) => {
        dispatch({
            type: REDUCE_COUNT,
            payload: item
        })
    }
}

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART
        })
    }   
}

export const countItems = () => {
    return (dispatch) => {
        dispatch({
            type: COUNT_ITEMS
        })
    }
}

export const filterCategory = (category) => {
    return (dispatch) => {
        // console.log(category)
        dispatch({
            type: FILTER_CATEGORY, 
            payload: category
        })
    }
}

export const filterAuthor = (author) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_AUTHOR, 
            payload: author
        })
    }
}


