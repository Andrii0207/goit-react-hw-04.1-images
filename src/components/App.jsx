import { Component } from 'react';
import Notiflix from 'notiflix';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
import api from './service/api';

export class App extends Component {
  state = {
    imageSearchName: '',
    images: [],
    page: 1,
    isLoading: false,
    showButton: false,
  };

  inputSubmitHandler = imageSearchName => {
    this.setState({ imageSearchName });
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.imageSearchName !== this.state.imageSearchName ||
      prevState.page !== this.state.page
    ) {
      this.searchImages();
      console.log('Обновился компонент');
    }
  }

  async searchImages() {
    const { imageSearchName, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await api(imageSearchName, page);
      console.log('response', response.hits);

      response.hits.length === 0
        ? Notiflix.Notify.info('Sorry, we have no found any images. Try something else')
        : this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
          }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 50,
          color: '#010101',
        }}
      >
        <header>
          <Searchbar onSubmit={this.inputSubmitHandler} />
        </header>
        <main>
          <ImageGallery images={this.state.images} />
        </main>
        <footer></footer>
      </div>
    );
  }
}
