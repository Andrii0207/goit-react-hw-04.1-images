import { Component } from 'react';
import Notiflix from 'notiflix';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';

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
      <header className={css.Searchbar}>
        <form class={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <BsSearch
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            <span class={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            class={css.SearchFormInput}
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
