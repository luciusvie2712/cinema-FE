import Layout from "../layouts/MainLayout"
import Banner from "../components/BannerHome"
import SlideMovieShowing from "../components/SlideMovieShowing"
import SlideMovieComing from "../components/SlideMovieComing"
import SearchMovie from "../components/SearchMovie"

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <SlideMovieShowing />    
            <SlideMovieComing />
            <SearchMovie />
        </Layout>
    )
}

export default HomePage;