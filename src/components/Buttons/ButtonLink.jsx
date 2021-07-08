import './Buttons.scss';

export default function ButtonLink({ text, url }) {
  // check if site link
  if (url[0] === '#') {
    return (
      <a href={url} className='btn link'>
        {text}
      </a>
    );
  }

  return (
    <a href={url} className='btn link' target='_blank' rel='noreferrer'>
      {text}
    </a>
  );
}
