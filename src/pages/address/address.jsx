import { AddressCard } from "../../components/address/addressCard";
import { AddressForm } from "./addressForm";
import { CheckoutCard } from "./checkoutCard";

export const Address = () => {
    return (
        <>
            <div className="address">
                <div className="address-checkout">
                    <AddressForm />
                    <CheckoutCard />
                </div>
                <AddressCard />
            </div>
        </>
    )
}