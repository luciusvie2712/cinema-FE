import Layout from "../layouts/MainLayout"
import Banner from "../components/BannerHome"
import SlideMovieRating from "../components/SlideMovieRating"
import SlideMovieComing from "../components/SlideMovieComing"
import ListMovieShowing from "../components/ListMovieShowing"

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <SlideMovieRating />
            <ListMovieShowing />
            <SlideMovieComing />
        </Layout>
    )
}

export default HomePage;