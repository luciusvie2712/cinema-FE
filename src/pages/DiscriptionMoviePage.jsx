import React from 'react'
import Discription from '../components/DiscriptionMovie'
import CommentForm from '../components/CommentForm'
import Layout from '../layouts/MainLayout'

const DiscriptionMoviePage = () => {
    return (
        <Layout>
            <Discription />
            <CommentForm />
        </Layout>
    )
}

export default DiscriptionMoviePage