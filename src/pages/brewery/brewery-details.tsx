import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBreweryById } from '../../api/breweries';
import styled from 'styled-components';
import Text from '../../components/text';

const Container = styled.div`
    padding: 16px;
    margin-bottom: 32px;
    max-width: 800px;
    margin: auto;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
            <Detail>
                <Text variant='title5'>Type:</Text> <Text variant='body1'>{data?.brewery_type}</Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Address:</Text> <Text variant='body1'>{data?.street}, {data?.city}, {data?.state} {data?.postal_code}</Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Phone:</Text> <Text variant='body1'>{data?.phone || 'N/A'}</Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Website:</Text> <Text variant='body1'><a href={data?.website_url} target="_blank" rel="noopener noreferrer">{data?.website_url}</a></Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Established:</Text> <Text variant='body1'>{data?.established || 'N/A'}</Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Description:</Text> <Text variant='body1'>{data?.description || 'No description available.'}</Text>
            </Detail>
            <Detail>
                <Text variant='title5'>Coordinates:</Text> <Text variant='body1'>Latitude: {data?.latitude}, Longitude: {data?.longitude}</Text>
            </Detail>
            <BackButton onClick={() => window.history.back()}>Back to Breweries</BackButton>
        </Container>
    );
};

export default BreweryDetails;