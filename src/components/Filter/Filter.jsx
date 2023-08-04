import css from './Filter.module.scss';

export default function Filter({ onFilter }) {
    return (
        <section className={css.filter}>
            <div className="container">
                <div className={css.wrapper}>
                    <h3 className={css.title}>Popular products</h3>
                    <select name="rating" id="rating" onChange={onFilter}>
                        <option value="0">All rates </option>
                        <option value="2">2+ rating</option>
                        <option value="3">3+ rating</option>
                        <option value="4">4+ rating</option>
                    </select>
                </div>
            </div>
        </section>
    )
}