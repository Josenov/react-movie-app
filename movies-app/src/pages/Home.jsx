import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'


const Home = () => {


    return (
        <>
            <Main />
            <Row rowID='1' title='Upcoming' fetchUrl={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchUrl={requests.requestPopular} />
            <Row rowID='3' title='Top Rated' fetchUrl={requests.requestTopRated} />
            <Row rowID='4' title='Trending' fetchUrl={requests.requestTrending} />
            <Row rowID='5' title='Erotic' fetchUrl={requests.requestErotic} />
            
        </>
    )
}

export default Home