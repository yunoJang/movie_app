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

        return movies.map( ({id,year,title,summary,medium_cover_image:poster})=> 
            <Movie 
                key={id}
                id={id}
                year={year}
                title={title}
                summary={summary}
                poster={poster}
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