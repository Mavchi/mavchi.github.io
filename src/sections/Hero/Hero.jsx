import './Hero.scss'

import { init } from 'ityped'
import { useEffect, useRef } from 'react'

import ButtonLink from '../../components/Buttons/ButtonLink';

export default function Hero() {
    const textRef1 = useRef();
    const textRef2 = useRef();

    const onFinished = () => {
                    init(textRef2.current, {
                      showCursor: true,
                      loop: false,
                      typeSpeed: 50,
                      strings: ['Full stack developer'],
                    });
    }

    useEffect(() => {
        init( textRef1.current, { 
                showCursor: false, 
                loop: false,
                typeSpeed: 50,
                strings: ["Hello, I'm Finland based"],
                onFinished: onFinished
                })
    }, [])

    return (
      <div className='hero' id='intro'>
        <img src='/assets/img/hero1.png' alt='' />
        <div className='container'>
          <div className='mainText'>
            <span ref={textRef1}></span>
            <br />
            <span ref={textRef2}></span>
          </div>
          <ButtonLink text='View my work' url='#about' />
        </div>
      </div>
    );
}