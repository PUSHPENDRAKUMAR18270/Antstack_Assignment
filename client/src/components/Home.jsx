import {useEffect,React} from 'react';

function Home(){
    useEffect(() => {
        document.title = 'Home'
        document.body.style.backgroundColor = "#E5FBB8"
    });
    return (
        <div style={{"margin":"200px"}}>
            <h1>Validate Your AntStack Coupons</h1>
        </div>
    )
}
export default Home