import { useQuery } from '@tanstack/react-query';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl)

const fetchBreweries = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch breweries');
    }
    return response.json();
};

const fetchBreweryById = async (id: string) => {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch brewery of id ${id}`);
    }
    return response.json();
};

export const useFetchBreweries = (search: string) => {
    const url = `${apiUrl}${search ? `?by_name=${search}` : ''}`;

    return useQuery({
        queryKey: ['breweries', search],
        queryFn: () => fetchBreweries(url),
        retry: false,
        refetchOnWindowFocus: false,
    });
};

export const useFetchBreweryById = (id: string) => {
    return useQuery({
        queryKey: ['brewery', id],
        queryFn: () => fetchBreweryById(id),
        enabled: !!id,
        retry: false,
        refetchOnWindowFocus: false,
    });
};