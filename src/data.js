export const menuItems = [
    'Home',
    'About',
    'Portfolio',
    'Contact'
]

export const filterItems = [
    'All',
    'Web App',
    'Python'
]

export const projectItems = [
  {
    id: 0,
    title: 'Example',
    img: 'https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Web App'],
    modal: {
      title: 'Portfolio Site',
      img: 'https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900',
      desc: () => (
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore
          dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
          voluptas rem alias. Vitae?
        </div>
      ),
      tech: ['ReactJS', 'Sass'],
      actions: [
        {
          name: 'Watch Live',
          url: 'http://localhost:3000/',
        },
        {
          name: 'Github',
          url: 'https://github.com/Mavchi/mavchi.github.io',
        },
      ],
    },
  },
  {
    id: 1,
    title: 'Hero Web Design',
    img: 'https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Web App'],
    modal: {
      title: 'Example',
      img: 'https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900',
      desc: () => <h1>That's fucked up</h1>,
      tech: ['ReactJS', 'Sass'],
      action: [
        {
          github: 'https://github.com/Mavchi/mavchi.github.io',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'PythonDemo',
    img: 'https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Python'],
  },
  {
    id: 3,
    title: 'Example',
    img: 'https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Web App'],
  },
  {
    id: 4,
    title: 'Hero Web Design',
    img: 'https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Web App'],
  },
  {
    id: 5,
    title: 'PythonDemo',
    img: 'https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900',
    tech: 'ReactJS / Sass',
    tags: ['All', 'Python'],
  },
];