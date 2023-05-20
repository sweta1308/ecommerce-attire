import { useAddress } from '../../context/addressContext';
import './addressCard.css';

export const AddressCard = () => {
    const {checkoutState} = useAddress();
    const {name, street, city, state, pincode} = checkoutState
    return (
        <>
            <div className='address-card'>
                <i class="fa-solid fa-xmark"></i>
                <h3>Enter Your Address</h3>
                <label for="name">Name: </label>
                <input id='name' placeholder='Adarsh Balika' value={name} />
                <label for="street">Street: </label>
                <input id='street' placeholder='114, New Colony' value={street} />
                <label for="city">City: </label>
                <input id='city' placeholder='Baripada' value={city} />
                <label for="city">State: </label>
                <input id='city' placeholder='Odisha' value={state} />
                <label for="pincode">Pincode: </label>
                <input id='pincode' placeholder='757001' value={pincode} />
                <button>Add Address</button>
            </div>
        </>
    )
}