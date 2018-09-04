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
        this.onSubmitClearInputField = this.onSubmitClearInputField.bind(this)
    }

    searchOnChange (e) {
        this.setState({searchedMovieName: e.target.value})
    }

    onSubmitClearInputField(e){
        e.target.searchInput.value = ''
        this.props.searchByName(e, this.state.searchedMovieName)
    }

    render() {
        return (
            <header>
                <div className='search-container'>
                    <form onSubmit={this.onSubmitClearInputField}>
                        <input type="text" id="searchInput" placeholder="Search for Movies..." 
                        name="search" 
                        autoComplete="off"
                        onChange={this.searchOnChange}
                        />
                    </form>
                </div>
                <div className='advanced-options'>
                    <div className='sort-by-year'>
                        <div>Sort By Title Year: &nbsp;&nbsp;&nbsp;</div>
                        <select value={this.props.defaultValue} onChange={this.props.handleSortByYear}>
                            <option value="None">None</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header
