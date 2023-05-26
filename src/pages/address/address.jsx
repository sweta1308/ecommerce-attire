import { useNavigate } from "react-router";
import { AddressCard } from "../../components/address/addressCard";
import { useAddress } from "../../context/addressContext";
import { AddressForm } from "./addressForm";
import { CheckoutCard } from "./checkoutCard";

export const Address = () => {
  const { isAddressCardVisible } = useAddress();
  const navigate = useNavigate();
  return (
    <>
      <div className="address">
        <p className="text add-check">
          <p onClick={() => navigate("/cart")}>Cart</p>{" "}
          <i class="fa-solid fa-angle-right fa-xs"></i>{" "}
          <span onClick={() => navigate("/address")}>Address</span>
        </p>
        <div
          className="address-checkout"
          style={{ filter: isAddressCardVisible ? "blur(10px)" : "" }}
        >
          <AddressForm />
          <CheckoutCard />
        </div>
        <AddressCard />
      </div>
    </>
  );
};
