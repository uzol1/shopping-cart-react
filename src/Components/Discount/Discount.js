import { connect } from 'react-redux'
import { applyDiscount } from '../../Store/Actions/actions'
import './Discount.css'
import M from 'materialize-css'


const Discount = ({ getDiscount, disable }) => {
    const discountHandler = (event) => {
        event.preventDefault()

        const value = document.querySelector('#form-control').value;
        if (value === 'DISCOUNT') {
            getDiscount(6)
            M.toast({ html: 'Promo Code Applied', classes: 'green lighten-1' });

        } else {
            M.toast({ html: 'Incorrect Promo Code', classes: 'red lighten-1' });
        }


    }

    return (
        <section className='form' >
            <div className='container'>
                <ul>
                    <li>
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href="#search">Use Promo Code +</a>
                            </h4>
                            <div id="search" className="panel-collapse collapse">
                                <form onSubmit={discountHandler} style={{ margin: '20px' }}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" id="form-control" className="form-control" placeholder="Use Promo Code: DISCOUNT to get 10$ off" />
                                        </div>
                                        <div className="col">
                                            <button type="submit" disabled={disable} className="btn btn-primary btn-danger">Apply Discount</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </section >

    )

}
const mapStateToProps = state => {
    return {
        disable: state.disabled
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDiscount: (percent) => dispatch(applyDiscount(percent))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Discount)