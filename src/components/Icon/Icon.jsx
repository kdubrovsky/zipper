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

            // !!! change path to `dist/spritemap.svg#icon-${name}`
            // to make it works locally (vite-plugin-svg-spritemap issue)

            />
        </svg>
    )
}