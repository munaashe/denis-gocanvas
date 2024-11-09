import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBreweryById } from '../../api/breweries'; // Import the fetching hook
import styled from 'styled-components';
import Text from '../../components/text';

// Define styled components
const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 10px;
`;

const Detail = styled.p`
    font-size: 1.2rem;
    margin: 5px 0;
`;

const BackButton = styled.button`
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
`;

const BreweryDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useFetchBreweryById(id!);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Container>
            <Text variant='title4'>{data?.name}</Text>
            <Detail><strong>Type:</strong> {data?.brewery_type}</Detail>
            <Detail><strong>Address:</strong> {data?.street}, {data?.city}, {data?.state} {data?.postal_code}</Detail>
            <Detail><strong>Phone:</strong> {data?.phone || 'N/A'}</Detail>
            <Detail><strong>Website:</strong> <a href={data?.website_url} target="_blank" rel="noopener noreferrer">{data?.website_url}</a></Detail>
            <BackButton onClick={() => window.history.back()}>Back to Breweries</BackButton>
        </Container>
    );
};

export default BreweryDetails;