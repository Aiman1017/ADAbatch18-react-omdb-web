import React from 'react';
import {Link} from 'react-router-dom';

function Movie(props) {
    return(
        <div>
            <ul>
                {
                    props.movies.map(val => {
                        console.log(val)
                        return <Link to={`/detail/${val.imdbID}`}>
                            <div key={val.imdbID} className={'card text-center'}>
                                
                                <div className={'card-body'}>
                                    <div className={'row'}>
                                        <div>
                                        <img src={val.Poster} width={300}></img>
                                        </div>
                                    </div>

                                    <div>
                                        <h4>{val.Title}</h4>
                                        <p>{val.Year}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })
                }
            </ul>
        </div>
    );
}
export default Movie;