import { useState } from 'react';
import Notiflix from 'notiflix';
import { BsSearch } from 'react-icons/bs';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [imageSearchName, setImageSearchName] = useState('');

  const handleInputNameImg = event => {
    const { value } = event.currentTarget;
    setImageSearchName(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imageSearchName.trim() === '') {
      return Notiflix.Notify.failure('Please enter image name');
    }

    onSubmit(imageSearchName);
    setImageSearchName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <BsSearch
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageSearchName}
          onChange={handleInputNameImg}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// ======================================

// import { Component } from 'react';
// import Notiflix from 'notiflix';
// import { BsSearch } from 'react-icons/bs';
// import css from './Searchbar.module.css';

// class Searchbar extends Component {
//   state = {
//     imageSearchName: '',
//   };

//   handleInputNameImg = event => {
//     const { value } = event.currentTarget;
//     this.setState({ imageSearchName: value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.imageSearchName.trim() === '') {
//       return Notiflix.Notify.failure('Please enter image name');
//     }

//     this.props.onSubmit(this.state.imageSearchName);
//     this.resetForm();
//   };

//   resetForm() {
//     this.setState({
//       imageSearchName: '',
//     });
//   }

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <BsSearch
//               style={{
//                 width: '20px',
//                 height: '20px',
//               }}
//             />
//             <span className={css.SearchFormButtonLabel}>Search</span>
//           </button>
//           <input
//             className={css.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.imageSearchName}
//             onChange={this.handleInputNameImg}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
