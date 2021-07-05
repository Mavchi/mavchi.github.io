import './Filter.scss'

const Filter = ({ filterItems, selected, setSelected }) => {
  return (
    <ul className='filter'>
      {filterItems.map((item) => (
        <li 
          key={item} 
          className={selected === item ? 'listItem active' : 'listItem'}
          onClick={() => setSelected(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filter