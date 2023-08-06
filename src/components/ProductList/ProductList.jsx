import ProductCard from '../ProductCard/ProductCard';
import css from './ProductList.module.scss';

export default function ProductList({ products, categories }) {

    const emptyResultsMessage =
        <p className={css.emptyStateMessage}>
            Sorry, we don't have any products that match your request
        </p>

    const categoriesMap = {};
    categories.forEach(item => categoriesMap[item.id] = item)

    const productCards = products
        .sort((a, b) => b.priority - a.priority)
        .map((item, i) => item.visible &&
            <ProductCard
                key={item.id}
                index={i}
                product={item}
                categoriesMap={categoriesMap} />
        )

    return (
        <section className={css.productList}>
            <div className='container' >
                <div className={css.wrapper}>
                    {
                        productCards.length
                            ? productCards
                            : emptyResultsMessage
                    }
                </div>
            </div>
        </section>
    )
}
