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

    const isResetVisible = searchQuery || (selectedRating !== 0);

    const filteredProducts = productsData
        .filter(item => item.title.toLowerCase().includes(searchQuery) && item.rating > selectedRating);

    return (
        <main>
            <Search
                key={refSearchKey.current}
                onSearch={searchHandler}
            />
            <Filter
                key={refFilterKey.current}
                isResetVisible={isResetVisible}
                onFilter={ratingFilterHandler}
                onReset={resetFilter}
            />
            <ProductList
                products={filteredProducts}
                categories={categoriesData}
            />
        </main>
    )
}