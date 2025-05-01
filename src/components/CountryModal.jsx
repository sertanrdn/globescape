import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';

Modal.setAppElement('#root');

export function CountryModal({ isOpen, onRequestClose, countryName }) {
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
            <h2>{countryName}</h2>
            <p>Details about the country</p>
        </Modal>
    );
}