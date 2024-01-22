import './Search.css';

export function Search({ setSearch }) {
    return (
        <input
            type="text"
            className="search"
            placeholder="Search"
            onChange={({ currentTarget: input }) => setSearch(input.value)}
        />
    );
}

export default Search;
