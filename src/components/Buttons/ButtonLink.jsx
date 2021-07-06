import './Buttons.scss'

export default function ButtonLink({ text, url }) {
    return (
      <a href={url} className='button link' target='_blank' rel='noreferrer'>
        {text}
      </a>
    );
}
