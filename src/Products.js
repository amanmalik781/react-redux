import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./slices/ProductsSlice";

function Products() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div className="Products">
            <button onClick={() => getProducts(dispatch)}>FETCH Products</button>
            {
                state?.productsSlice?.loading ? (
                    <h4>Loading...</h4>
                ) : (
                    <ul>
                        {
                            state?.productsSlice?.data?.map((item, index) => (
                                <li key={item.productId}>
                                    {item?.productName}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default Products;
