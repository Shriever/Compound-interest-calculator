import typescriptLogo from "./../images/typescript-logo.png";
import reactLogo from "./../images/react-logo.png";
import sassLogo from "./../images/sass-logo.png";

const About = () => {
  return (
    <div>
      <h2>Challenges</h2>
      <p className='about-text'>
        I'd say that the most challenging parts of this project had to be
        <br /> 1) Adapting to typescript and <br /> 2) Figuring out how to
        calculate compound interest. I felt comfortable with primitive types
        thanks to my experience with the C programming language which I worked
        with in Harvard's CS50 course. But defining types for functions and
        React Hooks definitely took some getting used to.
      </p>
      <br />
      <h2>Tech Used</h2>
      <div className='about-images'>
        <img src={reactLogo} alt='' width='200' />
        <img src={typescriptLogo} alt='' width='200' />
        <img src={sassLogo} alt='' width='200' />
      </div>
    </div>
  );
};

export default About;
