import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleClick(event){
        event.preventDefault();
        this.props.handleClick(this.state.value);
    }

    render(){
        return(
            <div className={'text-center py-3'}>
                <form>
                    <input type='text' placeholder='Enter movie name here' value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Search</button>
                </form> 
            </div>
        );
    }
}

export default Search;