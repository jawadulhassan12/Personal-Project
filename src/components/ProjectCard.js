import { Col } from 'react-bootstrap';

// ╔══════════════════════════════════════════════════════════╗
// ║  🃏  PROJECT CARD COMPONENT                              ║
// ║  Yeh har project ko card ki surat mein dikhata hai.    ║
// ║  ⚠️  IS FILE MEIN KUCH MAT BADALNA ⚠️                  ║
// ║  Projects.js mein projects array edit karo.            ║
// ╚══════════════════════════════════════════════════════════╝
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
