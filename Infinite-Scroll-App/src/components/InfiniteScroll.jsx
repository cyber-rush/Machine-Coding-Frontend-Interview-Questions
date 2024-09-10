import React, { useState, useEffect } from 'react';
import View from './View';

const InfiniteScroll = () => {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        setResponse((oldData) => [...oldData, ...data]);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, [page]);
    const handleInfiniteScroll = async () => {
        console.log('Inner Height', window.innerHeight)
        console.log('Scroll top', document.documentElement.scrollTop)
        console.log('Scroll Height(right scrollers total height)', document.documentElement.scrollHeight)
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener('scroll', handleInfiniteScroll);
    }, []);

    return (
        <>
            <View response={response} />
            {loading && <div className="loading"> </div>}
        </>
    );
};

export default InfiniteScroll;
