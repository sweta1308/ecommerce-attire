import './category.css';
import { categories } from "../../backend/db/categories";

export const Category = () => {
    return (
        <>
            <h2>Currated Picks ✨</h2>
            <div className="category">
                {categories.map(category => (
                    <div>
                        <img src={category.image} alt={category.categoryName} />
                        <a href='/'>{category.categoryName} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                ))}
            </div>
        </>
    )
}