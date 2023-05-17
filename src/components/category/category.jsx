import './category.css';
import { useProducts } from '../../context/productContext';

export const Category = () => {
    const {productState} = useProducts();
    return (
        <>
            <h2>Currated Picks ✨</h2>
            <div className="category">
                {productState?.categoriesData?.map(category => (
                    <div>
                        <img src={category.image} alt={category.categoryName} />
                        <a href='/'>{category.categoryName} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                ))}
            </div>
        </>
    )
}