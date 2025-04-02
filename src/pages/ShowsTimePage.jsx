import React from "react";
import Layout from "../layouts/MainLayout";
import ShowsTime from "../components/ShowsTime";
import NewsAndPromotion from "../components/NewsAndPromotion";

const ShowsTimePage = () => {
    return (
        <Layout>
            <ShowsTime />
            <NewsAndPromotion />
        </Layout>
    )
}

export default ShowsTimePage;