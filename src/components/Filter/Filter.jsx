import css from './Filter.module.scss';

export default function Filter({ onFilter }) {
    return (
        <section className={css.filter}>
            <div className="container">
                <div className={css.wrapper}>
                    <h3 className={css.title}>Popular products</h3>
                    <div className={css.select}>
                        <label htmlFor="rating" className='visually-hidden'>Select your city</label>
                        <div class={css.selectWrapper}>
                            <select name="rating" id="rating" onChange={onFilter}>
                                <option value="0">All rates </option>
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

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.36358 7.28027C4.71505 6.92879 5.2849 6.92879 5.63637 7.28027L9.99998 11.6439L14.3636 7.28027C14.7151 6.92879 15.2849 6.92879 15.6364 7.28027C15.9878 7.63174 15.9878 8.20159 15.6364 8.55306L10.6364 13.5531C10.4676 13.7218 10.2387 13.8167 9.99998 13.8167C9.76128 13.8167 9.53236 13.7218 9.36358 13.5531L4.36358 8.55306C4.01211 8.20159 4.01211 7.63174 4.36358 7.28027Z" fill="#464A56"/>
</svg>
