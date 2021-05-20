import React from 'react';
import { withRouter } from 'react-router';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: null }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let imdbId = this.props.match.params.imdbId;
        let infoUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=87d10179`
        fetch(infoUrl).then(response => response.json()).then(data => {
            console.log(data)
            this.setState({
                movie: data
            });
        });
    }

    handleClick() {
        this.props.history.goBack();
    }

    render() {
        return (
            <main>

                <button onClick={this.handleClick} className={'btn btn-primary py-3'} style={{marginTop: 30, marginLeft: 50}}>Go Back</button>

                <div>
                    {
                        this.state.movie ?
                            <div className={'row'}>
                                <div className={'col-lg-4 col-sm-8'}>
                                    <img src={this.state.movie.Poster} width={450} style={{marginLeft: 100, marginTop: 40}}></img>
                                </div>

                                <div className={'col-lg-8 col-sm-4'} style={{marginTop: 50}}>
                                    <h2>{this.state.movie.Title}</h2>
                                    <p> Year: {this.state.movie.Year}</p>
                                    <p>Runtime: {this.state.movie.Runtime}</p>
                                    <p>Genre: {this.state.movie.Genre}</p>
  
                                    <p>Metascore: {this.state.movie.Metascore}</p>
                                    <p>IMDB Rating: {this.state.movie.imdbRating}</p>

                                    <p>Director: {this.state.movie.Director}</p>
                                    <p>Writers: {this.state.movie.Writer}</p>
                                    <p>Actors: {this.state.movie.Actors}</p>

                                    <h5>Plot: {this.state.movie.Plot}</h5>
                                </div>
                            </div>
                            :
                            <div>
                                <h3>The Page Is Loading!!</h3>
                            </div>

                    }
                </div>
            </main>
        );
    }
}

export default withRouter(Detail);