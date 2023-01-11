import "./App.css";
import { Testimonial } from "./components/Testimonial";

const Emma = {
  imagen: "Emma",
  names: "Emma Bostian",
  country: "Sweden",
  post: "Software Engineer",
  company: "Spotify",
  testimonial:
    "Ive always struggled with learning  JavaScript. Ive taken many courses but freeCodeCamps  course was the one which stuck. Studying JavaScript as well as data  structures and algorithms on freeCodeCamp gave me the skills and confidence I   needed to land my dream job as a software engineer at Spotify.",
};

export function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          imagen={Emma.imagen}
          names={Emma.names}
          country="Sweden"
          post="Software Engineer"
          company="Spotify"
          testimonial="I've always struggled with learning
           JavaScript. I've taken many courses but freeCodeCamp's
            course was the one which stuck. Studying JavaScript as well as data 
            structures and algorithms on freeCodeCamp gave me the skills and confidence I
             needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonial
          imagen="Sarah"
          name="Sarah Chima"
          country="Sweden"
          post="Software Engineer"
          company="Spotify"
          testimonial="I've always struggled with learning
           JavaScript. I've taken many courses but freeCodeCamp's
            course <b>was the one which stuck. </b>Studying JavaScript as well as data 
            structures and algorithms on freeCodeCamp gave me the skills and confidence I
             needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonial
          imagen="Shawn"
          name="Shawn Wang"
          country="Sweden"
          post="Software Engineer"
          company="Spotify"
          testimonial="I've always struggled with learning
           JavaScript. I've taken many courses but freeCodeCamp's
            course was the one which stuck. Studying JavaScript as well as data 
            structures and algorithms on freeCodeCamp gave me the skills and confidence I
             needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}
export default App;
