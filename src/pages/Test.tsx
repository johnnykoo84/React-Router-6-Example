import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface ITestPageProps {}

const TestPage: React.FunctionComponent<ITestPageProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [brand, setBrand] = useState('');
    const car = searchParams.get('car');
    const all = searchParams.toString();

    console.log('searchParams', searchParams);

    const handleCarBrandInput = (e: any) => {
        setBrand(e.target.value);
    };

    const setCarBrand = () => {
        console.log('set!');
        console.log('all strings before action', searchParams.toString());
        // create a new key & value or update existing key using .set
        searchParams.set('car', brand);
        console.log('all strings after action', searchParams.toString());

        // now use setSearchParams to update the latest url you want
        setSearchParams(searchParams);
    };

    const appendCarBrand = () => {
        console.log('append!');
        console.log('all strings before action', searchParams.toString());

        // append extra key & value using .append
        searchParams.append('car', brand);
        console.log('all strings after action', searchParams.toString());

        // now use setSearchParams to update the latest url you want
        setSearchParams(searchParams);
    };

    return (
        <div>
            <p>This is the test page.</p>
            {car && <p>Favorite Car Brand is: {car}</p>}
            {all && <p>all car params in string: {all}</p>}
            <input style={{ display: 'block', margin: '1rem' }} onChange={handleCarBrandInput} />
            <button style={{ display: 'block', margin: '1rem' }} onClick={setCarBrand}>
                reset and update car brand params
            </button>
            <button style={{ display: 'block', margin: '1rem' }} onClick={appendCarBrand}>
                Append car brand params
            </button>
        </div>
    );
};

export default TestPage;
