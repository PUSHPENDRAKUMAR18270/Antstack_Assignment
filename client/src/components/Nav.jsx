import {React} from 'react'

function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-brand" href="#">Coupons</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/apply-coupon">Apply <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/add-coupon">Add</a>
            <a className="nav-item nav-link" href="/coupons">Retrieve</a>
            </div>
        </div>
        </nav>
    )
}
export default Nav;