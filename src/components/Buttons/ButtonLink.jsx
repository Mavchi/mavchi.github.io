import './ButtonLink.scss'

export default function ButtonLink({ text, url }) {
    return (
      <a href={url} className='button_link' target='_blank' rel='noreferrer'>
        {text}
      </a>
    );
}
