import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './CV Bao Ngo.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Senior Student @ <a href='https://ptnk.edu.vn/' target='_blank'>VNU-HCM High school for the Gifted</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b> and <b>Human-Computer Interaction</b>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on Software Development, MLOps, and DevOps. </li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="CV Bao Ngo.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
          <Page pageIndex={1} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
