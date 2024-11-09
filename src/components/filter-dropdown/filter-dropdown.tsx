import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface FilterDropdownProps {
    options: string[];
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin-left: 16px;
    height: 54px;
`;

const DropdownSelect = styled.select`
    width: 100%;
    height: 54px;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.75rem; 
    background-color: white;
    color: #4a4a4a;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #4a90e2;
    }
`;

const FilterDropdown: React.FC<FilterDropdownProps> = ({ options, selectedOption, setSelectedOption }) => {
    const handleOptionSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
    };

    return (
        <DropdownContainer>
            <DropdownSelect value={selectedOption} onChange={handleOptionSelect}>
                <option value="">All Countries</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </DropdownSelect>
        </DropdownContainer>
    );
};

export default FilterDropdown;