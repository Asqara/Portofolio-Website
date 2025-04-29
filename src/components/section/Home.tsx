import AOS from 'aos';
import {useEffect} from 'react';
import 'aos/dist/aos.css';
import Ballpit from '../ui/Ball';
import SplitText from '../ui/SplitText';
export default function HomeSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  
    return (
      <div className='font-montserrat'>
      
      <div className="flex items-center justify-center min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-amber-300">
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-10'>

      <Ballpit 
  colors={[255, 255, 0]}  // Bright yellow RGB
  ambientColor={0xFFFF00}  // Bright yellow hex
  // Other props remain the same
  count={10}
  minSize={0.5}
  maxSize={1}
  size0={1}
  gravity={0.4}
  friction={0.9975}
  wallBounce={0.95}
  maxVelocity={0.15}
  followCursor={true}
/>
    </div>
        <div className="text-center z-20">
        <SplitText
  text="Welcome to"
  className="md:text-8xl text-3xl font-bold font-montserrat dark:text-amber-300 text-gray-900 text-center"
  delay={100}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing={(t) => (--t) * t * t + 1} // Example cubic easing function
  threshold={0.2}
  rootMargin="-50px"
/>
<div>

        <SplitText
  text="My Website Portofolio!"
  className="md:text-8xl text-3xl font-bold font-montserrat dark:text-amber-300 text-gray-900 text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing={(t) => (--t) * t * t + 1} 
  threshold={0.2}
  rootMargin="-50px"
/>
  </div>
          <p 
          data-aos="fade-up"
        data-aos-duration="1500"
          className="md:text-xl text-sm text-amber-300 dark:text-white">I'm a Full Stack Developer passionate about creating amazing web experiences</p>
        </div>
        
      </div>
     
      
      </div>
    );
  }