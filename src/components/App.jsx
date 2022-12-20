import { Component } from 'react';
import Notiflix from 'notiflix';
// import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from 'components/Modal/Modal';
import api from './service/api';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    imageSearchName: '',
    images: [],
    page: 1,
    selectedImage: null,
    isLoading: false,
    showModal: false,
  };

  inputSubmitHandler = imageSearchName => {
    this.setState({
      imageSearchName,
      page: 1,
      images: [],
      selectImage: false,
    });
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

  clickImage = largeImageURL => {
    this.setState({ selectedImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, selectedImage, isLoading } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <header>
          <Searchbar onSubmit={this.inputSubmitHandler} />
        </header>
        <main>
          {isLoading && images.length === 0 ? (
            <Loader />
          ) : (
            <ImageGallery images={images} onSelect={this.clickImage} />
          )}
          {images.length % 12 === 0 && images.length !== 0 && <Button onClick={this.loadMore} />}
        </main>
        <footer>
          {selectedImage !== null && (
            <Modal closeModal={this.closeModal} url={selectedImage}>
              <img src={selectedImage} alt={selectedImage} />
            </Modal>
          )}
        </footer>
      </div>
    );
  }
}
