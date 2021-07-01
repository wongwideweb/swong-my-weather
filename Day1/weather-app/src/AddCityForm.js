import React from 'react';
import "./AddCityForm.css";

class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddCity(this.state);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleAddBook(event) {
        // this.setState({
        //     books: this.state.books.concat([this.state.bookTemp]),
        //     bookTemp: ''
        // });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="city">City</label>
                <input type="text" name="city" value={this.state.city} onChange={this.onFieldChange} />
            </div>
            <input type="submit" value="Add"/>
        </form>;
    }
}

function AddCityForm({match, onAddCity}) {
    return <div className="AddAuthorForm">
        <h1>Add City</h1>
        <CityForm onAddCity={onAddCity}/>
    </div>;
}

export default AddCityForm;
