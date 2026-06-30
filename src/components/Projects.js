import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import colorSharp2 from '../assets/images/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    // ╔══════════════════════════════════════════════════════════╗
    // ║  🚀  APNE PROJECTS YAHAN LIKHO                          ║
    // ║                                                          ║
    // ║  Har project ke liye ek object:                        ║
    // ║  {                                                      ║
    // ║    title: 'Project Ka Naam',                            ║
    // ║    description: 'Short description / tech used',        ║
    // ║    imgUrl: projImg1  (ya apni khud ki image)            ║
    // ║  }                                                      ║
    // ║                                                          ║
    // ║  Naye projects add karne ke liye, object                 ║
    // ║  copy karo aur details badlo.                           ║
    // ║                                                          ║
    // ║  Images: src/assets/images/ folder mein daalo         ║
    // ║  aur import karo jaise projImg1 import hai.            ║
    // ╚══════════════════════════════════════════════════════════╝
    {
      title: 'Career Connect',
      description:
        'Next.js · TypeScript · MongoDB · AI/LLM — PM, Lead Dev & QA',
      imgUrl: projImg1,
    },
    {
      title: 'ZipGo',
      description:
        'Next.js · Node.js · AI/NLP — Founder & PM, Islamabad Launch',
      imgUrl: projImg2,
    },
    {
      title: 'Al-Noor Traders',
      description: 'Next.js · MongoDB · Tailwind CSS — Live in Production',
      imgUrl: projImg3,
    },
    {
      title: 'Delivery Startup App',
      description: 'React · Node.js · MongoDB — PM & QA Lead',
      imgUrl: projImg1,
    },
    {
      title: 'Dental Clinic CRM',
      description: 'C# · ASP.NET Core · SQL — Desktop CRM, PM & QA',
      imgUrl: projImg2,
    },
    {
      title: 'EventSphere',
      description:
        'React · Node.js · Express.js · MongoDB — Real-Time Event Booking',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  {/* ╔══════════════════════════════════════════╗
                     ║  📝 PROJECTS SECTION KA PARAGRAPH       ║
                     ║  Yahan apne projects ke baare mein      ║
                     ║  2-3 lines likho                        ║
                     ╚══════════════════════════════════════════╝ */}
                  <p>
                    A mix of live products, founder-stage startups, and client
                    deliveries — each one shipped end-to-end as PM, developer,
                    and QA owner. From AI-powered career platforms to a live
                    e-commerce business, every project here went from sprint
                    planning to production sign-off.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* ╔══════════════════════════════════════════╗
                         ║  🏷️  TAB KE NAAM YAHAN LIKHO          ║
                         ║  'Tab 1' ki jagah kuch meaningful     ║
                         ║  Example: 'Web Apps', 'Mobile', etc.  ║
                         ╚══════════════════════════════════════════╝ */}
                      <Nav.Item>
                        <Nav.Link eventKey="first">Featured Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">My Process</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tech Stack</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* ╔══════════════════════════════════════════╗
                         ║  📄 TAB 2 KA CONTENT                  ║
                         ║  Yahan kuch bhi likh sakte ho -       ║
                         ║  text, images, links, etc.            ║
                         ╚══════════════════════════════════════════╝ */}
                      <Tab.Pane eventKey="second">
                        <p>
                          I run every project the same way regardless of scale:
                          requirement analysis, sprint planning in Jira, and a
                          structured STLC from test case design through UAT
                          sign-off. Whether it's a solo build or a 4-person
                          team, I own the full delivery cycle — daily standups,
                          stakeholder reporting, and defect lifecycle management
                          — so nothing slips between planning and production.
                        </p>
                      </Tab.Pane>
                      {/* ╔══════════════════════════════════════════╗
                         ║  📄 TAB 3 KA CONTENT                  ║
                         ╚══════════════════════════════════════════╝ */}
                      <Tab.Pane eventKey="third">
                        <p>
                          Next.js 14 · React · TypeScript · Node.js · Express.js
                          · C# · ASP.NET Core · Tailwind CSS — paired with
                          MongoDB, SQL, Docker, Git, and AI/LLM integrations on
                          the dev side, plus Postman, Jira, and Selenium (basic)
                          for end-to-end QA and delivery tracking.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
