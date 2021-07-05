import './About.scss';

export default function About() {
  return (
    <section className='about' id='about'>
      <div className='title'>About</div>
      <div className='container'>
        <div className='left'>
          <img src='assets/img/oma3.jpg' alt='' className='avatar' />
          <h1 className='title'>Adadsa</h1>
          <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non optio quos doloremque laboriosam, tenetur provident quod odio, facilis cumque in impedit iste veritatis, quas soluta
            architecto pariatur sit ratione velit.
          </div>
        </div>
        <div className='right'>
          <h2 className='title'>Technologies I've worked with</h2>
          <div className='cardContainer'>
            <h2 className='title'>Frontend</h2>
            <div className='card'>
              <div className='logoBox'>
                <img src='assets/logos/html5.png' alt='' />
                HTML5
              </div>
              <div className='logoBox'>
                <img src='assets/logos/css3.png' alt='' />
                CSS3
              </div>
              <div className='logoBox'>
                <img src='assets/logos/sass.png' alt='' />
                Sass
              </div>
              <div className='logoBox'>
                <img src='assets/logos/bootstrap.png' alt='' />
                Bootstrap
              </div>
              <div className='logoBox'>
                <img src='assets/logos/javascript.png' alt='' />
                Javascript
              </div>
              <div className='logoBox'>
                <img src='assets/logos/react.png' alt='' />
                ReactJS
              </div>
              <div className='logoBox'>
                <img src='assets/logos/redux.png' alt='' />
                Redux
              </div>
            </div>
          </div>
          <div className='cardContainer'>
            <h2 className='title'>Backend</h2>
            <div className='card'>
              <div className='logoBox'>
                <img src='assets/logos/nodejs.png' alt='' />
                NodeJs
              </div>
              <div className='logoBox'>
                <img src='assets/logos/postgresql.png' alt='' />
                PostgreSQL
              </div>
              <div className='logoBox'>
                <img src='assets/logos/mongodb.png' alt='' />
                MongoDB
              </div>
            </div>
          </div>
          <div className='cardContainer'>
            <h2 className='title'>Other</h2>
            <div className='card'>
              <div className='logoBox'>
                <img src='assets/logos/github.png' alt='' />
                Github
              </div>
              <div className='logoBox'>
                <img src='assets/logos/heroku.png' alt='' />
                Heroku
              </div>
            </div>
          </div>
          <div className='cardContainer'>
            <h2 className='title'>(Semi)Familiar languages</h2>
            <div className='card'>
              <div className='logoBox'>
                <img src='assets/logos/python.png' alt='' />
                Python
              </div>
              <div className='logoBox'>
                <img src='assets/logos/java.png' alt='' />
                Java
              </div>
              <div className='logoBox'>
                <img src='assets/logos/c.png' alt='' />C
              </div>
              <div className='logoBox'>
                <img src='assets/logos/c-plus.png' alt='' />
                C++
              </div>
              <div className='logoBox'>
                <img src='assets/logos/php.png' alt='' />
                PHP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
