//hooks
import { useState } from "react"

//components
import Search from "../Search/Search"
import ProductList from "../ProductList/ProductList"
import Filter from "../Filter/Filter"

//data
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';


export default function App() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);

    const searchHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('query').trim().toLowerCase();
        setSearchQuery(query);
    }

    const ratingFilterHandler = (e) => {
        setSelectedRating(+e.target.value);
    }

    const filteredProducts = productsData
        .filter(item => item.title.toLowerCase().includes(searchQuery) && item.rating > selectedRating);

    return (
        <main>
            <Search onSearch={searchHandler} />
            <Filter onFilter={ratingFilterHandler} />
            <ProductList products={filteredProducts} categories={categoriesData} />
        </main>
    )
}