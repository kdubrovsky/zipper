//hooks
import { useRef, useState } from "react"

//components
import Search from "../Search/Search"
import ProductList from "../ProductList/ProductList"
import Filter from "../Filter/Filter"

//data
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';


export default function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const refSearchKey = useRef(crypto.randomUUID());
    const refFilterKey = useRef(crypto.randomUUID());

    const searchHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('query').trim().toLowerCase();
        setSearchQuery(query);
    }

    const ratingFilterHandler = (e) => {
        setSelectedRating(+e.target.value);
    }

    const resetFilter = () => {
        setSearchQuery('');
        setSelectedRating(0);
        refSearchKey.current = crypto.randomUUID();
        refFilterKey.current = crypto.randomUUID();
    }

    const filteredProducts = productsData
        .filter(item => item.title.toLowerCase().includes(searchQuery) && item.rating > selectedRating);

    return (
        <main>
            <Search onSearch={searchHandler} key={refSearchKey.current} />
            <Filter onFilter={ratingFilterHandler} onReset={resetFilter} key={refFilterKey.current} />
            <ProductList products={filteredProducts} categories={categoriesData} />
        </main>
    )
}