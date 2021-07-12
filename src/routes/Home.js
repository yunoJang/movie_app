import React from 'react';
import axios from 'axios';
import Movie from './../components/Movie';
import Paging from './../components/Paging';
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading : true,
        movies : [],
        pageNumber : 1,
    };

    cacheMovies = new Map();

    async getMovies(page) {
        const {cacheMovies} = this;

        if(!cacheMovies.has(page)) {
            this.setState({isLoading : true})

            const {data:{data:{movies}}} = await axios.get(`https://yts-proxy.now.sh/list_movies.json?page=${page}&sort_by=rating`);
            cacheMovies.set(page,movies);
        }

        const movies =  cacheMovies.get(page);
        
        this.setState({
            isLoading : false,
            pageNumber : page,
            movies
        })
    }

    componentDidMount() {
        this.getMovies(this.state.pageNumber);
    }

    renderMovies() {
        const {movies} = this.state;

        return movies.map( (movie)=> 
            <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating = {movie.rating}
                ytCode = {movie.yt_trailer_code}
            />)
    }

    render() {
        const {isLoading,pageNumber} = this.state;

        return (
            <section className='container'>
                {isLoading
                    ? (
                        <div className='loader'>
                            <span className='loader-text'>Loading...</span>
                        </div>
                    )
                    : (
                        <main>
                            <div className='movies'>
                                {this.renderMovies()}
                            </div>

                            <Paging 
                                pageNumber = {pageNumber}
                                getMovies = {this.getMovies.bind(this)}
                            />
                        </main>
                    )
                }
            </section>
        )
    }
}

export default Home;