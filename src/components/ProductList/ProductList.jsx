import ProductCard from '../ProductCard/ProductCard';
import css from './ProductList.module.scss';

export default function ProductList({ products, categories }) {



    const categoriesMap = {};
    categories.forEach(item => categoriesMap[item.id] = item)

    const productCards = products
        .sort((a, b) => b.priority - a.priority)
        .map((item, i) => {
            if (item.visible)
                return (
                    <ProductCard
                        key={item.id}
                        index={i}
                        product={item}
                        categoriesMap={categoriesMap}
                    />
                )
        })

    return (
        <section className={css.productList}>
            <div className='container' >
                <div className={css.wrapper}>
                    {
                        productCards.length ? productCards :
                            <p className={css.emptyStateMessage}>
                                Sorry, we don't have any products that match your request
                            </p>
                    }
                </div>
            </div>
        </section>
    )
}
