import FileMakerCard from './components/FileMakerCard'
import DetailsCard from './components/DetailsCard'

function App() {
  return (
    <>
      <div style={{zIndex: 2}} className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <FileMakerCard />
          </div>
          <div className="col-12 col-lg-4">
            <DetailsCard />
          </div>
        </div>
      </div>
      <div style={{zIndex: -1}} className="fixed-bottom text-center text-muted pb-4 ">
        <small>
          &#169; Gavin Sharkey 2021{" "}
          <a
            className="text-reset"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/gavinsharkey/"
          >
            LinkedIn
          </a>
        </small>
      </div>
    </>
  );
}

export default App;
