import Layout from "../components/Layout/Layout";
import IntroText from "../components/Layout/IntroText";
import Navbar from "../components/Navbar/Navbar";
import Description from "../components/Layout/Description";
export default function Home() {
  const textTitle = "Frontend Development";

  const paragraph =
    "My name is Serhan Guney and I’m a frontend developer. I made this website mainly to present my experience as a frontend developer. I also had a hidden intention to include my passion for branding so hopefully you'll enjoy a bit of my little personal brand Yuivae.";
  const introTextStyle = `
    grid-row: 3/8;
    grid-column: 2/8;
    `;

  const descriptionTitle = "What you'll find here";
  const descriptionArray = [
    "The tools I built for personal use, they are available to everyone.",
    "My blog; the knowledge which was hard to find throughout the learning process.",
    "My projects; a brief look at the projects I did for my clients.",
    "My thoughts. For those of you who like to read a personality description, I tried to make it short :)",
  ];
  return (
    <Layout>
      <Navbar />
      <IntroText
        title={textTitle}
        paragraph={paragraph}
        componentStyle={introTextStyle}
      />
      <Description title={descriptionTitle} array={descriptionArray} />
    </Layout>
  );
}
