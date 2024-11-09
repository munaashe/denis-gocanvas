import React, { useState } from 'react';
import { useFetchBreweries } from '../../api/breweries';
import SearchBar from '../../components/search-bar';
import FilterDropdown from '../../components/filter-dropdown';
import BreweryCard from '../../components/brewery-card';
import styled from 'styled-components';
import { Brewery } from '../../utils/types';
import Text from '../../components/text';

const MainContainer = styled.div`
    padding: 4px; /* Small screen padding */
    @media (min-width: 600px) {
        padding: 8px; /* Large screen padding */
    }
`;

const TitleSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 1024px) {
        display: flex;
        width: full;
        flex-direction: row;
    }
`;

const ControlsContainer = styled.div`
    display: flex;
    padding: 4px;
    gap: 4px;
    width: 100%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding: 16px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
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
    const [country, setCountry] = useState('');
    const perPage = 10;

    const countries = [
        'United States',
        'Canada',
        'Germany',
        'United Kingdom',
        'Belgium',
        'South Korea',
    ];

    const { data, error, isLoading } = useFetchBreweries(search, page, perPage, country);

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

    const handleSearch = (searchTerm: string) => {
        setSearch(searchTerm);
        setPage(1);
    };

    return (
        <MainContainer>
            <TitleSectionContainer>
                <Text variant='title5' style={{whiteSpace: 'nowrap', width: '100%'}}>Great Breweries</Text>
                <ControlsContainer>
                    <SearchBar onSearch={handleSearch} />
                    <FilterDropdown options={countries} selectedOption={country} setSelectedOption={setCountry} />
                </ControlsContainer>
            </TitleSectionContainer>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.length > 0 ? (
                <>
                    <Grid>
                        {data.map((brewery: Brewery) => (
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
        </MainContainer>
    );
};

export default Home;