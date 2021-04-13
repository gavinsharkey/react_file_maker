function DownloadTab({ downloadFile }) {
  return (
    <>
      <p className="text-center">
        This is pretty self-explanatory. Click the button and download it like
        any other file!
      </p>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <button
            onClick={downloadFile}
            className="col-12 col-md-9 btn btn-primary"
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default DownloadTab;
