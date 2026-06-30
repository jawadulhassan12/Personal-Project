import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerimg from '../assets/images/header-img.svg';
// ╔══════════════════════════════════════════════════════════╗
// ║  🌟  APNE TITLES YAHAN LIKHO (Jitne chahein add karo)    ║
// ║  Example: 'Full Stack Developer', 'React Expert', etc.   ║
// ╚══════════════════════════════════════════════════════════╝
const toRotate = [
  'Technical Project Manager  ',
  'Full-Stack Developer',
  'QA Engineer',
  'Agile Delivery Lead',
];
const period = 2000;

export const Banner = () => {
  const loopnumRef = useRef(0);
  const isDeletingRef = useRef(false);
  const deltaRef = useRef(300 - Math.random() * 100);

  const [text, setText] = useState('');
  useEffect(() => {
    const tick = () => {
      let i = loopnumRef.current % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeletingRef.current
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);
      if (isDeletingRef.current) {
        deltaRef.current = deltaRef.current / 2;
      }
      if (!isDeletingRef.current && updatedText === fullText) {
        isDeletingRef.current = true;
        deltaRef.current = period;
      } else if (isDeletingRef.current && updatedText === '') {
        isDeletingRef.current = false;
        loopnumRef.current = loopnumRef.current + 1;
        deltaRef.current = 500;
      }
    };
    let ticker = setInterval(() => {
      tick();
    }, deltaRef.current);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* ╔══════════════════════════════════════════════╗
                 ║  🏷️  TAGLINE - Apni tagline likho           ║
                 ╚══════════════════════════════════════════════╝ */}
            <span className="tagline">
              Plans it. Builds it. Tests it. Ships it.
            </span>
            <h1>
              {/* ╔════════════════════════════════════════════╗
                 ║  👤  'Hi I am JD' ki jagah apna naam likho ║
                 ╚════════════════════════════════════════════╝ */}
              {'Hi I am Jawad-ul-Hassan'}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              {/* ╔══════════════════════════════════════════════════╗
                 ║  📝  APNA BIO PARAGRAPH - 4-5 lines          ║
                 ║  Batayein: aap kya karte hain, skills,       ║
                 ║  experience, passion, etc.                    ║
                 ╚══════════════════════════════════════════════════╝ */}
              Versatile Technical PM and multi-discipline delivery professional
              with 2+ years of independent consulting experience across SaaS,
              e-commerce, and career-tech domains. I bridge engineering and
              business by pairing hands-on full-stack development (Next.js,
              React, Node.js, ASP.NET Core) with structured Agile delivery —
              owning sprint planning, QA, and stakeholder communication
              end-to-end, without compromising scope, timeline, or quality.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById('connect')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerimg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
