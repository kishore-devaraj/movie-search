import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedMovieName: '',
            selectedFilter: 'all',
            placeholderText: '',
            searchByValue: ''
        }
        this.searchOnChange = this.searchOnChange.bind(this)
        this.onSubmitClearInputField = this.onSubmitClearInputField.bind(this)
        this.filterChange = this.filterChange.bind(this)
        this.searchBySubmit = this.searchBySubmit.bind(this)
        this.searchByValueOnChange = this.searchByValueOnChange.bind(this)
        this.inputRef = React.createRef()
    }

    searchOnChange (e) {
        this.setState({searchedMovieName: e.target.value})
    }

    searchBySubmit (e) {
        e.preventDefault()
        this.props.filterChange(this.state.selectedFilter, e.target.filterValue.value)
    }

    searchByValueOnChange (e) {
        e.preventDefault(e)
        this.setState({searchByValue: e.target.value})
    }


    onSubmitClearInputField(e) {
        this.props.searchByName(e, this.state.searchedMovieName)
    }

    filterChange(e) {
        let placeholderText
        this.setState({selectedFilter: e.target.id, searchByValue: ''})
        if(e.target.id === 'lang'){
            placeholderText = 'Type the full langauge name'
            this.inputRef.current.style.display = 'block'

        } else if(e.target.id === 'country'){
            placeholderText = 'Type the country name'
            this.inputRef.current.style.display = 'block'
        } else {
            this.inputRef.current.style.display = 'none'
            this.props.filterChange(e.target.id, '')
        }
        this.setState({placeholderText: placeholderText})
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
                        <div><b>Sort By Title Year:</b> &nbsp;&nbsp;&nbsp;</div>
                        <select value={this.props.defaultValue} onChange={this.props.handleSortByYear}>
                            <option value="None">None</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <div className='filter-by'>
                    <section className='filter-container'>
                        <b>Filter by:</b> &nbsp;&nbsp;
                        <label className="container">All &nbsp;
                            <input type="radio" 
                            checked={this.state.selectedFilter === 'all'} 
                            name="radio" 
                            id="all" 
                            onChange={this.filterChange}/>
                            <span className="checkmark"></span>
                        </label> &nbsp;
                        <label className="container">Lang &nbsp;
                            <input 
                            type="radio" 
                            checked={this.state.selectedFilter === 'lang'} 
                            name="radio" 
                            id="lang" 
                            onChange={this.filterChange}/>
                            <span className="checkmark"></span>
                        </label>  &nbsp;
                        <label className="container">Country &nbsp;
                            <input 
                            type="radio"
                            checked={this.state.selectedFilter === 'country'}  
                            name="radio" 
                            id="country" 
                            onChange={this.filterChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </section>
                    <form onSubmit={this.searchBySubmit} ref={this.inputRef} id="searchByForm">
                        <input type="text" 
                        id="filterValue"
                        name="searchBy"
                        autoComplete="off"
                        value={this.state.searchByValue}
                        onChange={this.searchByValueOnChange}
                        placeholder={this.state.placeholderText} />
                    </form>
                    </div>
                </div>
                
            </header>
        )
    }

}

export default Header
