import { useNavigate } from 'react-router'
import { ProductCard } from '../../components/product-card/productCard'
import { SideBar } from '../../components/sidebar/sidebar'
import { useProducts } from '../../context/productContext'
import './product.css'

export const Product = () => {
    const {productData} = useProducts();
    const navigate = useNavigate();
    return (
        <>
            <div className="product">
                <div className='text-filter'>
                    <p className='text'>Home <i class="fa-solid fa-angle-right fa-xs"></i> <span>Browse Products</span></p>
                    <button><i class="fa-solid fa-filter" style={{color: '#e80071'}}></i> Filters</button>
                </div>

                <div className='products'>
                    <div className='sidebar'>
                        <SideBar />
                    </div>
                    <div className='product-list'>
                        {productData.map(product => {
                            const {_id, title, brand, price, originalPrice, ratings, image} = product;
                            return (
                                <li key={_id} onClick={() => navigate(`/products/${_id}`)}>
                                    <ProductCard title={title} brand={brand} price={price} originalPrice={originalPrice} image={image} ratings={ratings} />
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}