import React from 'react'
import { useEffect } from 'react'
import { totalPrice } from '../Store/Actions/actions'
import { connect } from 'react-redux'

const Summary = ({ items, getSum, sum, total }) => {

    useEffect(() => {
        getSum(items)
    }, [items])

    return (
        <React.Fragment>
            <section className='summary' style={{ margin: '50px 0' }}>
                <div className='container'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th>title</th>
                                <th >sum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >1</th>
                                <td>sum</td>
                                <td>{sum}$</td>
                            </tr>
                            <tr>
                                <th >2</th>
                                <td>discount</td>
                                <td>6%</td>
                            </tr>
                            <tr>
                                <th >3</th>
                                <td >vat</td>
                                <td>13%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className='summary' >
                <div className='container' style={{ textAlign: 'center' }}>
                    <h2>Total:{total}$</h2>
                </div>
            </section>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        items: state.items,
        total: state.total,
        sum: state.priceWithouTax
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSum: (items) => dispatch(totalPrice(items))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary)