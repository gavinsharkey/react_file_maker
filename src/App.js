import { useState } from "react";
import DownloadTab from "./DownloadTab";
import FileMaker from "./concerns/FileMaker";
import { FILE_TYPES, BYTE_SIZES, MAX_BYTE_SIZE } from "./constants";

function App() {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("txt");
  const [byteSize, setByteSize] = useState("b");
  const [bytes, setBytes] = useState(1);
  const [selectedTab, setSelectedTab] = useState("download");

  const downloadFile = () => {
    const fullFileName = `${fileName}.${fileType}`;

    const fileMaker = new FileMaker(fileType, fullFileName, bytes);

    fileMaker.download();
  };

  const renderCurrentTab = () => {
    switch (selectedTab) {
      case 'download':
        return <DownloadTab downloadFile={downloadFile} />
      default:
        return <h5 className="text-center">No Tab Found.</h5>
    }
  }

  const handleByteChange = (e) => {
    const selectedByteSize = BYTE_SIZES[byteSize];
    setBytes(e.target.value * selectedByteSize.toBytesMultiplier);
  };

  const renderCurrentBytes = () => {
    const selectedByteSize = BYTE_SIZES[byteSize];

    return bytes / selectedByteSize.toBytesMultiplier;
  };

  const areValidBytes = () => {
    return bytes <= MAX_BYTE_SIZE && bytes > 0;
  };

  return (
    <>
      <div style={{zIndex: 2}} className="container my-5">
        <div className="row g-3">
          <div className="col-12">
            <div className="card shadow overflow-hidden">
              <div className="card-body">
                <h5 className="card-title text-center">File Maker</h5>
                <p className="card-text text-center mb-0">
                  Make a sample file of a particular type/size for testing
                  purposes!
                </p>
                <p className="card-text text-muted text-center mt-0">
                  <small>Max File Size: 104,857,600 B/102,400 KB/100 MB</small>
                </p>
              </div>
              <div className="card-body bg-light">
                <div className="container-fluid">
                  <div className="row g-3 justify-content-end">
                    <div className="col-8 col-md-9">
                      <label className="form-label">File Name</label>
                      <input
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Enter File Name"
                      ></input>
                    </div>
                    <div className="col-4 col-md-3">
                      <label className="form-label">Ext</label>
                      <select
                        value={fileType}
                        onChange={(e) => setFileType(e.target.value)}
                        className="form-select"
                      >
                        {Object.keys(FILE_TYPES).map((key) => (
                          <option key={key} value={key}>
                            .{key}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-8 col-md-9">
                      <label className="form-label">Size</label>
                      <input
                        value={renderCurrentBytes()}
                        onChange={handleByteChange}
                        className={`form-control ${
                          areValidBytes() ? "" : "is-invalid"
                        }`}
                        type="number"
                        placeholder="Enter Size"
                      ></input>
                      {areValidBytes() ? null : (
                        <div className="invalid-feedback">Invalid Size</div>
                      )}
                    </div>
                    <div className="col-4 col-md-3">
                      <label className="form-label">Bytes</label>
                      <select
                        onChange={(e) => setByteSize(e.target.value)}
                        value={byteSize}
                        className="form-select"
                      >
                        {Object.keys(BYTE_SIZES).map((key) => (
                          <option key={key} value={key}>
                            {key.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <span className="mt-3 d-block text-muted text-center"><small>To get your file, you can:</small></span>
              </div>
              <div
                style={{ paddingTop: "calc(42px + 1rem)" }}
                className="card-body position-relative"
              >
                <ul className="nav nav-tabs nav-fill position-absolute top-0 start-0 end-0 border-bottom">
                  <li className="nav-item">
                    <a
                      onClick={() => setSelectedTab("download")}
                      className={`nav-link rounded-0 ${
                        selectedTab === "download" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Download It
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => setSelectedTab("stream")}
                      className={`nav-link rounded-0 ${
                        selectedTab === "stream" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Stream It
                    </a>
                  </li>
                </ul>
                <div className="">
                  {renderCurrentTab()}
                </div>
              </div>
            </div>
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
