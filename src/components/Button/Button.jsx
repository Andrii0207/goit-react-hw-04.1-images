import css from './Button.module.css';

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
}

export default Button;
