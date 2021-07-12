import PropTypes from 'prop-types';
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Paging.css';

function Paging({pageNumber,getMovies}) {
    return (
        <div className='paging'>
            {pageNumber === 1 ? <div className='padding' /> :
                <button className='prev' onClick = {getMovies.bind(null,pageNumber-1)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            }
            <span className='page-number'>{pageNumber}</span>
            <button className='next' onClick = {getMovies.bind(null,pageNumber+1)}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    )
}

Paging.propTypes = {
    pageNumber : PropTypes.number.isRequired,
    getMovies : PropTypes.func.isRequired,
}

export default Paging;