const BASE_URL = 'https://fakestoreapi.com';

export const fakeStoreApi = {
    //Get all products
    getAllProducts: async () => {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Get single product by ID
    getProduct: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    },

    // Get products by category
    getProductsByCategory: async (category) => {
        try {
            const response = await fetch(`${BASE_URL}/products/category/${category}`);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching products in category ${category}:`, error);
            throw error;
        }
    }
};