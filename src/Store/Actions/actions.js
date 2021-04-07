import * as actionTypes from './types'

export const applyDiscount = (percent) => {
    return {
        type: actionTypes.DISCOUNT,
        value: percent
    }
}

export const totalPrice = (items) => {
    return {
        type: actionTypes.SUM,
        value: items
    }
}