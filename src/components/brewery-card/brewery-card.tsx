import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const Button = styled.button`
    margin-top: 8px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

interface BreweryCardProps {
    id: string;
    name: string;
    breweryType: string;
    city: string;
    state: string;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ id, name, breweryType, city, state }) => {
    return (
        <Card>
            <h3>{name}</h3>
            <p>{breweryType} - {city}, {state}</p>
            <Link to={`/brewery/${id}`}>
                <Button>View Details</Button>
            </Link>
        </Card>
    );
};

export default BreweryCard;