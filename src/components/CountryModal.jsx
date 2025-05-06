import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import '../styles/CountryModal.css';
import { useCountryContext } from '../context/useCountryContext';

Modal.setAppElement('#root');

export function CountryModal({ isOpen, onRequestClose, countryName, countryData, isLoading, error, countryCode, selectedCountryCode }) {
    const country = countryData?.[0];
    const { visited, wishlist, addToVisited, addToWishlist } = useCountryContext();

    if (countryCode === selectedCountryCode) {
        return null; // Prevent render if it's the same
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className='country-modal'
            overlayClassName='modal-overlay'
        >
            <button className='close-button' onClick={onRequestClose}>
                <IoClose />
            </button>
            {isLoading && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            {!error && !isLoading && country && (
                <div>
                    <h2>{countryName}</h2>
                    <img src={country.flags.png} alt={`Flag of ${countryName}`} />
                    <p><strong>Official Name: </strong>{country.name.official}</p>
                    <p><strong>Capital: </strong>{country.capital?.[0]}</p>
                    <p><strong>Continent: </strong>{country.continents?.[0]}</p>
                    <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
                    <p><strong>Languages: </strong>{country.languages && Object.values(country.languages).join(', ')}</p>
                    <p><strong>Currency: </strong>{country.currencies && Object.values(country.currencies).map(cur => cur.name).join(', ')}</p>

                    <div className='button-container'>
                        <button 
                            onClick={() => addToVisited(countryCode)} 
                            className='visited-button'
                        >
                            {visited.includes(countryCode) ? 'Remove from visited' : 'Mark as visited'}
                        </button>
                        <button 
                            onClick={() => addToWishlist(countryCode)} 
                            className='wishlist-button'
                        >
                            {wishlist.includes(countryCode) ? 'Remove from wishlist' : 'Add to wishlist'}
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
}