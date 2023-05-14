import { hm, louis, levis, prada, zara, dolce, gucci, calvin } from "../../assets";
import './brand.css';

export const Brand = () => {
    return (
        <>
            <h2>Brands ✨</h2>
            <div className="brand">
                <img src={hm} alt="hm" />
                <img src={louis} alt="louis" />
                <img src={levis} alt="levis" />
                <img src={prada} alt="prada" />
                <img src={zara} alt="zara" />
                <img src={dolce} alt="dolce" />
                <img src={gucci} alt="gucci" />
                <img src={calvin} alt="calvin" />
            </div>
        </>
    )
}