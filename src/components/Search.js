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
        const searchInput = {
            paddingTop: '4px',
            paddingBottom: '10px'
        }

        return(
            <div className={'text-center'} style={{marginTop: 25}}>
                <form>
                    <input style={searchInput} type='text' placeholder='Enter movie name here' value={this.state.value} onChange={this.handleChange}/>
                    <button className={'btn btn-primary'} onClick={this.handleClick}>Search</button>
                </form> 
            </div>
        );
    }
}

export default Search;