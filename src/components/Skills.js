import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/images/meter1.svg';
import meter2 from '../assets/images/meter2.svg';
import meter3 from '../assets/images/meter3.svg';
import colorSharp from '../assets/images/color-sharp.png';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* ╔══════════════════════════════════════════╗
                 ║  📝 SKILLS SECTION KA DESCRIPTION      ║
                 ╚══════════════════════════════════════════╝ */}
              <p>
                I operate across the full delivery stack — planning sprints,
                writing production code, and owning QA — so projects move from
                requirement to release without handoff gaps or miscommunication
                between roles.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/* ╔══════════════════════════════════════════════════╗
                   ║  🛠️  APNI SKILLS YAHAN LIKHO                   ║
                   ║                                                ║
                   ║  Har <div className="item"> ek skill hai.     ║
                   ║  <h5> k andar skill ka naam likho.            ║
                   ║  Naye skills add karne ke liye poora          ║
                   ║  <div class="item">...</div> copy karo.       ║
                   ║                                                ║
                   ║  meter1, meter2, meter3 progress bar images   ║
                   ║  hain - koi bhi use kar sakte ho              ║
                   ╚══════════════════════════════════════════════════╝ */}
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Agile & Scrum Delivery</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Sprint Planning & Jira</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Next.js & React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Node.js & TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>C# & ASP.NET Core</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Manual & Regression Testing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>API Testing (Postman)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>STLC & Defect Lifecycle</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Docker & Git</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>MongoDB & SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>AI/LLM Integrations</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Linux System Administration</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
