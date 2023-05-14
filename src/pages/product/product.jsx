import { SideBar } from '../../components/sidebar/sidebar'
import './product.css'

export const Product = () => {
    return (
        <>
            <div className="product">
                <p className='text'>Home <i class="fa-solid fa-angle-right fa-xs"></i> <span>Browse Products</span></p>

                <div className='products'>
                    <div className='sidebar'>
                        <SideBar />
                    </div>
                    <div className='product-list'>
                        <h2>Products</h2>
                    </div>
                </div>
            </div>
        </>
    )
}