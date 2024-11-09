import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../button/button';
import Text from '../text';

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    text-align: start;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/brewery/${id}`);
    };

    return (
        <Card>
            <Text variant='body1' weight='bold' style={{height: '40px'}}>{name}</Text>
            <Text variant='body2'>{breweryType} - {city}, {state}</Text>
            <Button onClick={handleDetailsClick} style={{paddingTop: '4px'}}>
                Details
            </Button>
        </Card>
    );
};

export default BreweryCard;