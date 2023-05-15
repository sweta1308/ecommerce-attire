import { hm, sassafras, levis, urbanic, zara, dolce, roadster, tokyoTalkies } from "../../assets";
import './brand.css';

export const Brand = () => {
    return (
        <>
            <h2>Brands ✨</h2>
            <div className="brand">
                <img src={hm} alt="hm" />
                <img src={sassafras} alt="sassafras" />
                <img src={levis} alt="levis" />
                <img src={urbanic} alt="urbanic" />
                <img src={zara} alt="zara" />
                <img src={dolce} alt="dolce" />
                <img src={roadster} alt="roadster" />
                <img src={tokyoTalkies} alt="tokyoTalkies" />
            </div>
        </>
    )
}