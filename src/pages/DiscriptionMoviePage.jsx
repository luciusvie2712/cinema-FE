import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Discription from '../components/DiscriptionMovie';
import Layout from '../layouts/MainLayout';
import { useAuth } from '../context/AuthContext';

const DiscriptionMoviePage = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/movie/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Không thể tải thông tin phim');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;
    if (!movie) return <div>Không tìm thấy phim</div>;

    return (
        <Layout>
            <Discription movie={movie} user={user} />
        </Layout>
    );
};

export default DiscriptionMoviePage;
