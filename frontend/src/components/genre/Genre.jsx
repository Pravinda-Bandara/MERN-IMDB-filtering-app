import './Genre.css'
export function Genre({ genres, filterGenre, setFilterGenre }) {
    const onChange = ({ currentTarget: input }) => {
        if (input.checked) {
            const state = [...filterGenre, input.value];
            setFilterGenre(state);
        } else {
            const state = filterGenre.filter((val) => val !== input.value);
            setFilterGenre(state);
        }
    };
    return (
        <div className="container-genre">
            <h1 className="heading-genre">Filter By Genre</h1>
            <div className="genre-container">
                {genres.map((genre) => (
                    <div className="genre" key={genre}>
                        <input
                            className="genre_input"
                            type="checkbox"
                            value={genre}
                            onChange={onChange}
                        />
                        <p className="genre_label">{genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Genre;