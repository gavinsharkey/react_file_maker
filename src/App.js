import { useState, useEffect } from "react";
import FileMaker from "./concerns/FileMaker";
import { FILE_TYPES, BYTE_SIZES } from "./constants";

function App() {
  const [fileName, setFileName] = useState("test1");
  const [fileType, setFileType] = useState("txt");
  const [byteSize, setByteSize] = useState("b");
  const [bytes, setBytes] = useState(1);

  function downloadFile() {
    const fullFileName = `${fileName}.${fileType}`;

    const fileMaker = new FileMaker(fileType, fullFileName, bytes);

    fileMaker.download();
  }

  function handleByteChange(e) {
    const selectedByteSize = BYTE_SIZES[byteSize];
    setBytes(e.target.value * selectedByteSize.toBytesMultiplier);
  }

  function renderCurrentBytes() {
    const selectedByteSize = BYTE_SIZES[byteSize];

    return bytes / selectedByteSize.toBytesMultiplier;
  }

  return (
    <>
      <div className="container my-5">
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
                  <small>
                    (Max File Size: 104,857,600 B/102,400 KB/100 MB)
                  </small>
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
                        className="form-control"
                        type="number"
                        placeholder="Enter Size"
                      ></input>
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
                    {/* <div className="col-12 col-md-6">
                    <div className="d-grid">
                      <button className="btn btn-success">Preview</button>
                    </div>
                  </div> */}
                    <div className="col-12 col-md-3 align-self-end">
                      <div className="d-grid">
                        <button
                          onClick={downloadFile}
                          className="btn btn-primary"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Might do something with this later */}
          {/* <div className="h-auto col-12 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">Preview Text</h5>
              <div
                className="overflow-hidden position-relative px-3 py-2 border rounded-2 shadow-sm bg-light"
              >
                <div
                  style={{
                    height: 32,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className="text-center position-absolute top-0 start-0 end-0 bg-white py-1 px-2"
                >
                  <small>
                    <em>File.pdf</em>
                  </small>
                </div>
                <div style={{ marginTop: 32 }} className="content">
                  <small>No Content</small>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <div className="fixed-bottom text-center text-muted pb-4">
        <small>&#169; Gavin Sharkey 2021 <a className="text-reset" target="_blank" href="https://www.linkedin.com/in/gavinsharkey/">LinkedIn</a></small>
      </div>
    </>
  );
}

export default App;
