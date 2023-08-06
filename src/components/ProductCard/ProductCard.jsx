import css from './ProductCard.module.scss';
import Icon from '../Icon/Icon';
import { useState } from 'react';

export default function ProductCard({
    index,
    product,
    categoriesMap
}) {

    const {
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

    const ratingFixed = rating.toFixed(1);
    const imageSrc = `/images/products/${image}`;
    const priceValue = (priceMin === priceMax) ? priceMin : `${priceMin}\u2006–\u2006${priceMax}`;
    const priceInfo = `$${priceValue} / Month`;

    const categoriesTitles = categoriesIds
        .map(id => categoriesMap[id])
        .sort((a, b) => b.priority - a.priority)
        .map(item => item.title).
        join(', ');

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const toggleClassnames = isDescriptionVisible ? `${css.actionButton} ${css.opened}` : css.actionButton;

    const descriptionToggleHandler = () => setIsDescriptionVisible(prev => !prev);

    return (
        <div className={css.card}>
            <div className={css.product}>
                <p className={css.numbering}>{index + 1}</p>
                <div className={css.productLogo}>
                    <img src={imageSrc} alt={title} />
                </div>
                <div className={css.titleWrapper}>
                    <h4 className={css.title}>{title}</h4>
                    <div className={css.rating}>
                        <Icon name="star" size="24" />
                        <p>{ratingFixed}</p>
                    </div>
                </div>
                <div className={css.secondaryInfo}>
                    <p className={css.price}>{priceInfo}</p>
                    <p className={css.categories}>{categoriesTitles}</p>
                </div>
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
                    <button className={toggleClassnames} onClick={descriptionToggleHandler}>
                        <Icon name="down" size="24" />
                        <span className='visually-hidden'>Toggle description</span>
                    </button>
                </div>
                {isDescriptionVisible && <div className={css.description}>
                    <p>{description}<a href={externalLink} target="_blank">Read&nbsp;more</a></p>
                </div>}
            </div>
        </div>
    )
}