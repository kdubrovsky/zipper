import css from './ProductCard.module.scss';
import Icon from '../Icon/Icon';

export default function ProductCard({
    index,
    product,
    categoriesMap
}) {

    let {
        title,
        rating,
        image,
        monthlySubscriptionPrice: {
            min: priceMin,
            max: priceMax
        },
        website,
        categories: categoriesIds,
        office,
        description,
        externalLink
    } = product;

    rating = rating.toFixed(1);
    image = `/images/products/${image}`;

    const priceValue = (priceMin === priceMax) ? priceMin : `${priceMin}\u2006–\u2006${priceMax}`;
    const priceInfo = `$${priceValue} / Month`;

    const categoriesTitles = categoriesIds
        .map(id => categoriesMap[id])
        .sort((a, b) => b.priority - a.priority)
        .map(item => item.title).
        join(', ');

    return (
        <div className={css.card}>
            <div className={css.product}>
                <div className={css.primaryInfo}>
                    <p className={css.numbering}>{index + 1}</p>
                    <div className={css.productLogo}>
                        <img src={image} alt={title} />
                    </div>
                    <div className={css.titleWrapper}>
                        <h4 className={css.title}>{title}</h4>
                        <div className={css.rating}>
                            <Icon name="star" size="24" />
                            <p>{rating}</p>
                        </div>
                    </div>
                    <p className={css.price}>{priceInfo}</p>
                    <p className={css.categories}>{categoriesTitles}</p>
                    <div className={css.actions}>
                        <button className={css.actionButton} title="Send message">
                            <Icon name="message" size="24" />
                            <span className='visually-hidden'>Message</span>
                        </button>
                        <a href={office} target="_blank" title="Show on Google Maps" className={css.actionButton}>
                            <Icon name="office" size="24" />
                            <span className='visually-hidden'>Location</span>
                        </a>
                        <a href={website} title="Open website" target="_blank" className={css.actionButton}>
                            <Icon name="globe" size="24" />
                            <span className='visually-hidden'>Website</span>
                        </a>
                        <button className={css.actionButton}>
                            <Icon name="down" size="24" />
                            <span className='visually-hidden'>Toggle description</span>
                        </button>
                    </div>
                </div>
                <div className={css.secondaryInfo}>
                    <p className={css.description}>{description}<a href={externalLink} target="_blank">Read more</a>
                    </p>
                </div>
            </div>
        </div>
    )
}