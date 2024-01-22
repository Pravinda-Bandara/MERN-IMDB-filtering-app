// Pagination.jsx
import './Pagination.css';

export function Pagination({ page, limit, total, setPage }) {
    const totalPages = Math.ceil(total / limit);

    const onClick = (newPage) => {
        setPage(newPage + 1);
    };

    return (
        <div className="container-pagination">
            {totalPages > 0 &&
                [...Array(totalPages)].map((val, index) => (
                    <button
                        onClick={() => onClick(index)}
                        className={
                            page === index + 1
                                ? "page_btn active"
                                : "page_btn"
                        }
                        key={index}
                    >
                        {index + 1}
                    </button>
                ))}
        </div>
    );
}
