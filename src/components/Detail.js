import React from 'react';
import {withRouter} from 'react-router';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {movie: null}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        let imdbId = this.props.match.params.imdbId;
        let infoUrl = `http://www.omdbapi.com/?i=${imdbId}&apikey=87d10179`
        fetch(infoUrl).then(response => response.json()).then(data => {
            console.log(data)
            this.setState({
                movie: data
            });
        });
    }

    handleClick(){
        this.props.history.goBack();
    }

    render(){
        return(
        <main>

            <button onClick={this.handleClick} className={'btn btn-primary'}>Go Back</button>

            <div className={'text-center'}>
                {
                this.state.movie ? 
                <div>
                    <img src={this.state.movie.Poster}></img>
                    <h2>{this.state.movie.Title}</h2>
                    <p>{this.state.movie.Year}</p>
                    <p>{this.state.movie.Runtime}</p>
                    <p>{this.state.movie.genre}</p>
                    <br/>

                    <h4>Metascore: {this.state.movie.Metascore}</h4>
                    <h4>IMDB Rating: {this.state.movie.imdbRating}</h4>
                    <br/>

                    <p>{this.state.movie.Director}</p>
                    <p>{this.state.movie.Writer}</p>
                    <p>{this.state.movie.Actors}</p>
                    <br/>

                    <h5>{this.state.movie.Plot}</h5>
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