import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loading: false,
        error: ''
    },
    reducers: {
        fetchProducts: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        fetchProductsSuccess: (state, action) => (
            {
                ...state,
                loading: false,
                data: action.payload.data
            }
        ),
        fetchProductsFailure: (state, action) => (
            {
                ...state,
                loading: false,
                data: [],
                error: action.payload.data
            }
        )
    }
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = async (dispatch) => {
    dispatch(fetchProducts());
    try {
        const response = await fetch('https://66759893a8d2b4d072f0b881.mockapi.io/api/products/products');
        const data = await response.json();
        if (data) {
            dispatch(fetchProductsSuccess({ data }));
        } else {
            dispatch(fetchProductsFailure({ data }));
        }
    } catch {
        throw new Error('Failed to retrieve data');
    }
};

