import React, { useState } from 'react';
import { useFetchBreweries } from '../../api/breweries';
import BreweryCard from '../../components/brewery-card';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Default to 1 column */
    gap: 16px; /* Space between cards */
    padding: 16px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); /* 4 columns on large screens */
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Button = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const Home = () => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10; 
    const { data, error, isLoading } = useFetchBreweries(search, page, perPage);

    const handleNextPage = () => {
        if (data && data.length === perPage) {
            setPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }
    };

    return (
        <div>
            <h1>Home Page</h1>
            <input
                type="text"
                placeholder="Search breweries by name"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1); 
                }}
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.length > 0 ? (
                <>
                    <Grid>
                        {data.map((brewery: any) => (
                            <BreweryCard
                                key={brewery.id}
                                id={brewery.id}
                                name={brewery.name}
                                breweryType={brewery.brewery_type}
                                city={brewery.city}
                                state={brewery.state}
                            />
                        ))}
                    </Grid>
                    <Pagination>
                        <Button onClick={handlePrevPage} disabled={page === 1}>
                            Previous
                        </Button>
                        <Button onClick={handleNextPage}>
                            Next
                        </Button>
                    </Pagination>
                </>
            ) : (
                !isLoading && <p>No breweries found.</p>
            )}
        </div>
    );
};

export default Home;