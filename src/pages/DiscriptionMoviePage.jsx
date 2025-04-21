import React from 'react'
import Discription from '../components/DiscriptionMovie'
import CommentForm from '../components/CommentForm'
import MainLayout from '../layouts/MainLayout'

const DiscriptionMoviePage = () => {
    return (
        <MainLayout>
            <Discription />
            <CommentForm />
        </MainLayout>
    )
}

export default DiscriptionMoviePage