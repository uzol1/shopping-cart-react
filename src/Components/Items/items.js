import React from 'react'
import { connect } from 'react-redux'
import { totalPrice } from '../../Store/Actions/actions'
import Item from '../item'
import './Items.css'

const Items = ({ items }) => {

    const item = Object.keys(items).map((item, index) => {
        return <Item name={item} price={items[item]} key={index} />
    })

    return (
        <React.Fragment>
            <section className="items" style={{ margin: '20px 0' }}>
                <div className='container'>
                    <ul>
                        <li>
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#collapse1">Show Cart Items +</a>
                                </h4>
                                <div id="collapse1" className="panel-collapse collapse">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>items</th>
                                                <th >price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </React.Fragment >
    )
}
const mapStateToProps = state => {
    return {
        items: state.items,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getSum: (items) => dispatch(totalPrice(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);