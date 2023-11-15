import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <button className="btn btn-dark "><div onClick={() => props.handleShow(false)} >Go to Shopping</div></button>
            <button className="btn btn-dark "><div onClick={() => props.handleShow(true)}> <i className="bi bi-cart3"> Go to cart</i>
                <sup> {props.count} </sup>
            </div></button>
        </div>
    );
}

export default Header;