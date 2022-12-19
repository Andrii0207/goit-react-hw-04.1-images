import { Component } from 'react';
import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    imageSearchName: '',
  };

  handleInputNameImg = event => {
    const { value } = event.currentTarget;
    this.setState({ imageSearchName: value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageSearchName.trim() === '') {
      return Notiflix.Notify.failure('Please enter image name');
    }

    this.props.onSubmit(this.state.imageSearchName);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      imageSearchName: '',
    });
  }

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.imageSearchName}
            onChange={this.handleInputNameImg}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
