import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        <div className='navigation'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
        </div>
    )
}

export default Navigation;