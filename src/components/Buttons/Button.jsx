import './Buttons.scss';

const Button = ({ type='normal', text }) => {
    if (type === 'submit') {
        <button className='btn normal' type="submit">{text}</button>;
    }
  return (
    <button className='btn normal'>
      {text}
    </button>
  );
}

export default Button
