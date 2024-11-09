import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 54px;
`;

const Input = styled.input`
    flex: 1; /* Takes up the available space */
    padding: 0.5rem 1rem; /* Padding for the input */
    border: 1px solid #d1d5db; /* Light gray border */
    border-radius: 0.75rem 0 0 0.75rem; /* Rounded corners for left side */
    outline: none; /* Remove outline */
    border-right: none; /* Remove right border for seamless look */
    
    &:focus {
        border-color: #4a90e2; /* Change border color on focus */
    }
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: white; 
    border: 1px solid #d1d5db; 
    border-radius: 0 0.75rem 0.75rem 0; 
    display: flex;
    align-items: center; 
    cursor: pointer; 
    
    &:hover {
        background-color: #357ab8; 
    }
`;

const SearchIcon = styled.svg`
    width: 1rem; 
    height: 1rem; 
    color: #6b7280; 
`;

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Search breweries by name"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Button>
                <SearchIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </SearchIcon>
            </Button>
        </Container>
    );
};

export default SearchBar;