import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedMovieName: ''
        }
        this.searchOnChange = this.searchOnChange.bind(this)
    }

    searchOnChange (e) {
        this.setState({searchedMovieName: e.target.value})
    }

    render() {
        return (
            <header>
                <div className='search-container'>
                    <form onSubmit={(e) => this.props.searchByName(e, this.state.searchedMovieName)}>
                        <input type="text" placeholder="Search for Movies..." 
                        name="search" 
                        autoComplete="off"
                        onChange={this.searchOnChange}
                        />
                    </form>
                </div>
            </header>
        )
    }

}

export default Header
