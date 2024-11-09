import React, { useState } from 'react';
import { useFetchBreweries } from '../../api/breweries';

const Home = () => {
    const [search, setSearch] = useState('');
    const { data, error, isLoading } = useFetchBreweries(search);
    console.log(data)

    return (
        <div>
            <h1>Home Page</h1>
            <input
                type="text"
                placeholder="Search breweries by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.length > 0 ? (
                <ul>
                    {data.map((brewery: any) => (
                        <li key={brewery.id}>
                            <h3>{brewery.name}</h3>
                            <p>{brewery.brewery_type} - {brewery.city}, {brewery.state}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                !isLoading && <p>No breweries found.</p>
            )}
        </div>
    );
};

export default Home;