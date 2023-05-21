import { AddressCard } from "../../components/address/addressCard";
import { useAddress } from "../../context/addressContext";
import { AddressForm } from "./addressForm";
import { CheckoutCard } from "./checkoutCard";

export const Address = () => {
    const {isAddressCardVisible} = useAddress();
    return (
        <>
            <div className="address">
                <div className="address-checkout" style={{filter: isAddressCardVisible ? 'blur(10px)' : ''}}>
                    <AddressForm />
                    <CheckoutCard />
                </div>
                <AddressCard />
            </div>
        </>
    )
}