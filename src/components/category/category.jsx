import { tops, bottom, dresses, ethnic } from "../../assets";
import './category.css';

export const Category = () => {
    return (
        <>
            <h2>Currated Picks ✨</h2>
            <div className="category">
                <div>
                    <img src={tops} alt="tops" />
                    <a href="/">Tops <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    <img src={bottom} alt="bottom" />
                    <a href="/">Bottom Wear <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    <img src={dresses} alt="dresses" />
                    <a href="/">Dresses <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    <img src={ethnic} alt="ethnic" />
                    <a href="/">Ethnic Wear <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </>
    )
}