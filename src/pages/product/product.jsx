import { ProductCard } from '../../components/product-card/productCard'
import { SideBar } from '../../components/sidebar/sidebar'
import './product.css'
import { useState } from 'react'
import { useFilters } from '../../context/filterContext'

export const Product = () => {
    const {filteredData} = useFilters();
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    return (
        <>
            <div className="product">
                <div className='text-filter'>
                    <p className='text'>Home <i class="fa-solid fa-angle-right fa-xs"></i> <span>Browse Products</span></p>
                    <button onClick={() => setIsFilterVisible(prev => !prev)}><i class="fa-solid fa-filter" style={{color: '#e80071'}}></i> Filters</button>
                </div>

                <div className='products'>
                    <div className='sidebar'>
                        <SideBar isFilterVisible={isFilterVisible} />
                    </div>
                    <div className='product-list'>
                        {filteredData.map(product => {
                            return (
                                <li key={product._id}>
                                    <ProductCard data={product} />
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}