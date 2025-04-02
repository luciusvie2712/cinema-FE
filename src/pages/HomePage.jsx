import Layout from "../layouts/MainLayout"
import Banner from "../components/BannerHome"
import SlideMovieShowing from "../components/SlideMovieShowing"
import SlideMovieComing from "../components/SlideMovieComing"
import SearchMovie from "../components/SearchMovie"
import ShowsTime from "../components/ShowsTime"
import NewsAndPromotion from "../components/NewsAndPromotion"

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <SlideMovieShowing />    
            <SlideMovieComing />
            <ShowsTime />
            <SearchMovie />
            <NewsAndPromotion />
        </Layout>
    )
}

export default HomePage;