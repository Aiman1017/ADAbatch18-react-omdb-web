import React from 'react';
import Search from './Search';
import Movie from './Movie';

//Pass data from son to parent -Lifting up data
class Main extends React.Component{
    constructor(){
        super();
        this.state = {movies: []}
        this.getSearch = this.getSearch.bind(this);
    }

    render() {
        return(
            <main>
                <Search handleClick={this.getSearch}/>
                <Movie movies = {this.state.movies} />
            </main>
        )
    }

    // getId(imdbID){
    //     console.log(imdbID)
    // }

    getSearch(searchTerm){
        console.log(searchTerm)
        let url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=87d10179`
        fetch(url).then(response => response.json()).then(data => {
            this.setState({
                movies: data['Search']
            })
            console.log(this.state.movies)
        })
    }
}

export default Main;