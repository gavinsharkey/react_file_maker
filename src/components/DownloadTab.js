function DownloadTab({ file }) {

  const downloadFile = () => {
    file.download();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <button
            onClick={downloadFile}
            className="col-12 btn btn-primary"
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default DownloadTab;
