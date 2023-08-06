import css from './SearchInput.module.scss';
import Icon from '../Icon/Icon';

export default function SearchInput({ onSearch }) {
    return (
        <form className={css.search} onSubmit={onSearch}>
            <label
                className="visually-hidden"
                htmlFor="search">
                Find products and services
            </label>
            <Icon name="search" size="24" />
            <input className={css.searchInput}
                name='query'
                type='text'
                id='search'
                placeholder='Product, categories, service name...'
                autoComplete='off'
            />
            <button
                type='submit'
                className={css.searchButton}>
                <span>Search</span>
            </button>
        </form>
    )
}