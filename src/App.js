import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
    state = {
        isLoading : true,
        movies : [],
    };

    async getMovies() {
        const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

        this.setState({movies,isLoading : false});
    }

    componentDidMount() {
        this.getMovies();
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
            />)
    }

    render() {
        const {isLoading} = this.state;

        return (
            <section className='container'>
                {isLoading
                    ? (
                        <div className='loader'>
                        <span className='loader-text'>Loading...</span>
                        </div>
                    )
                    : (
                        <div className='movies'>
                            {this.renderMovies()};
                        </div>
                    )
                }

            </section>
            
        )
    }
}

export default App;