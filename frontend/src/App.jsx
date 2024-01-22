import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from "./components/search/Search.jsx";
import Table from "./components/table/Table.jsx";
import {Pagination} from "./components/pagination/Pagination.jsx";

function App() {
    const base_url = 'http://localhost:5050/api/v1/movies';
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
    const [filterGenre, setFilterGenre] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const getAllMovies = () => {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;

        axios.get(url)
            .then(response => {
                setObj(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllMovies();
    }, [sort, filterGenre, page, search]);

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="head">
                        <img src="/images/logo.png" alt="logo" className="logo"/>
                        <Search setSearch={setSearch} />
                    </div>
                    <div className="body">
                        <div className="table-container">
                            <Table movies={obj.movies?obj.movies:[]}/>
                            <Pagination
                                page={page}
                                limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={setPage}
                            />
                        </div>
                        <div className="filter_container"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
