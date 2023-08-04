import SearchInput from '../SearchInput/SearchInput';
import css from './Search.module.scss';

export default function Search({ onSearch }) {
    return (
        <section className={css.search}>
            <div className="container">
                <div className={css.wrapper}>
                    <h2 className={css.title}>Where leading company find&nbsp;best software</h2>
                    <div className={css.searchBox}>
                        <SearchInput onSearch={onSearch} />
                    </div>
                </div>
            </div>
        </section >
    )
}