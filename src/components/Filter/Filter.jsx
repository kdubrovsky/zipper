import css from './Filter.module.scss';

export default function Filter({ onFilter, onReset, isResetVisible }) {
    return (
        <section className={css.filter}>
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.headerWrapper}>
                        <h3 className={css.title}>Popular products</h3>
                        {isResetVisible && <button className={css.resetButton} onClick={onReset}>Show all</button>}
                    </div>
                    <div className={css.select}>
                        <label htmlFor="rating" className='visually-hidden'>Select your city</label>
                        <div className={css.selectWrapper}>
                            <select name="rating" id="rating" onChange={onFilter}>
                                <option defaultValue value="0">All rates</option>
                                <option value="2">2+ rating</option>
                                <option value="3">3+ rating</option>
                                <option value="4">4+ rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
