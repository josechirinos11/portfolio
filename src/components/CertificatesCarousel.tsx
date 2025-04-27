import React from "react";
import styles from "@/styles/CertificatesCarousel.module.css";
import { FaDownload } from "react-icons/fa";

const certificates = [
  {
    name: "Desarrollo de aplicaciones web",
    file: "/certificate%20Desarrollo%20%20de%20aplicaciones%20web.pdf",
  },
  {
    name: "JavaScript",
    file: "/javascrip.pdf",
  },
  {
    name: "Nodejs",
    file: "/Nodejs.pdf",
  },
  {
    name: "React avanzado",
    file: "/react%20avanzado.pdf",
  },
  {
    name: "React Native",
    file: "/react%20native.pdf",
  },
];

const CertificatesCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const total = certificates.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowBtn} onClick={prev} aria-label="Anterior">&#8592;</button>
      <div className={styles.certificateCard}>
        <div className={styles.certInfo}>
          <span className={styles.certName}>{certificates[current].name}</span>
          <a
            href={certificates[current].file}
            download
            className={styles.downloadBtn}
            title={`Descargar certificado de ${certificates[current].name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Descargar
          </a>
        </div>
        <embed
          src={certificates[current].file}
          type="application/pdf"
          className={styles.pdfPreview}
        />
      </div>
      <button className={styles.arrowBtn} onClick={next} aria-label="Siguiente">&#8594;</button>
    </div>
  );
};

export default CertificatesCarousel;
