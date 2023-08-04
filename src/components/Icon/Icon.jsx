export default function Icon(
    {
        name,
        size
    }
) {
    return (
        <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <use
                xlinkHref={`/spritemap.svg#icon-${name}`}
            />
        </svg>
    )
}