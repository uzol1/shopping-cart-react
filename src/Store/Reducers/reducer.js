import * as actionTypes from '../Actions/types'

const initialState = {
    items: {
        chair: 100,
        pillow: 40,
    },
    total: 0,
    priceWithouTax: 0,
    disabled: false,

}

const calculateDiscountPrice = (state, action) => {

    const discountprice = state.priceWithouTax - (state.priceWithouTax / 100) * action.value

    return { ...state, total: discountprice + (discountprice / 100) * 13, disabled: true }
}

const calculateSum = (state, action) => {
    // let prices = [];
    // for (let item in action.value) {
    //     prices.push(action.value[item])
    // }
    // const value = prices.reduce((curr, abbr) => curr + abbr, 0)

    const value = Object.keys(action.value).map((item) => {
        return action.value[item]
    }).reduce((curr, abbr) => curr + abbr, 0)

    let vat = (value / 100) * 13
    return { ...state, priceWithouTax: value, total: value + vat }

}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SUM:
            return calculateSum(state, action);

        case actionTypes.DISCOUNT:
            return calculateDiscountPrice(state, action)

        default:
            return state
    }

}

export default reducer