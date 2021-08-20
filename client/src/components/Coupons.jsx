import {useState,React, useEffect} from 'react';
import Coupon from './Coupon'

function Coupons(){
    const [coupons,setCoupons] = useState([])
    //update document title
    useEffect(() => {
        document.title = 'Coupons'
        const retrieveCouponsRequestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch('api/retrieve-coupons',retrieveCouponsRequestOptions)
        .then(response => response.json())
        .then(data => {
            setCoupons(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);
    return (
        <div>
            <h1>Coupons</h1>
            <table className="table table-striped overflow-auto">
                <thead>
                    <tr>
                        <th>CouponCode</th>
                        <th>MinimumAmount</th>
                        <th>Type</th>
                        <th>Discount</th>
                        <th>CreatedOn</th>
                        <th>ExpiresOn</th>
                    </tr>
                </thead>
                <tbody>
                {coupons.map((value,index) => {
                    return <Coupon key={index} coupon={value}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Coupons