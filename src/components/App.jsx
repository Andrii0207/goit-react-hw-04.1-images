import { Component } from 'react';
import Notiflix from 'notiflix';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
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
    const { imageSearchName, page } = this.state;
    if (
      prevState.imageSearchName !== this.state.imageSearchName ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      api(imageSearchName, page).then(resp => {
        resp.hits.length === 0 &&
          Notiflix.Notify.info('Sorry, we have no found any images. Try something else');
      });

      // resp.hits.length === 0
      //   ? Notiflix.Notify.info('Sorry, we have no found any images. Try something else')
      //   : this.setState(prevState => ({
      //       images: [...prevState.images],
      //     }));
      // Notiflix.Notify.info('Sorry, we have no found any images. Try something else')

      console.log('Обновился компонент');
    }
  }

  // queryImages = async () => {
  //   const { imageSearchName, page } = this.state;

  //   try {
  //     this.setState({ isLoading: true });
  //     api(imageSearchName, page).then(resp => console.log(resp));

  //     // resp.hits.length === 0
  //     //   ? Notiflix.Notify.info('Sorry, we have no found any images. Try something else')
  //     //   : this.setState(prevState => ({
  //     //       images: [...prevState.images],
  //     //     }));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.inputSubmitHandler} />
        {/* <ImageGallery imageName={this.state.imageSearchName} /> */}
        {/* <Button /> */}
      </div>
    );
  }
}

// export default App;

// export const App = () => {
//   state = {
//     imageSearchName: '',
//   };

//   inputSubmitHandler = data => {
//     console.log(data);
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Searchbar onSubmit={this.inputSubmitHandler} />
//     </div>
//   );
// };

// key=30810402-d2272724878c47174b870ed5b
