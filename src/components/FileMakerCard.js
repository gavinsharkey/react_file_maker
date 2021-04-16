import { useState } from "react";
import DownloadTab from "./DownloadTab";
import StreamTab from "./StreamTab";
import FileMaker from "../concerns/FileMaker";
import { FILE_TYPES, BYTE_SIZES, MAX_BYTE_SIZE } from "../constants";

function FileMakerCard() {
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("txt");
  const [byteSize, setByteSize] = useState("b");
  const [bytes, setBytes] = useState(1);
  const [selectedTab, setSelectedTab] = useState("download");

  const getFile = () => {
    return new FileMaker(fileType, fileName, bytes);
  };

  const renderCurrentTab = () => {
    switch (selectedTab) {
      case "download":
        return <DownloadTab file={getFile()} />;
      case "stream":
        return <StreamTab file={getFile()} />;
      default:
        return <h5 className="text-center">Coming soon!</h5>;
    }
  };

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
    <div className="card shadow overflow-hidden">
      {/* <div className="card-header bg-white">
        <p className="m-0">File Maker</p>
      </div> */}
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
        <span className="mt-3 d-block text-muted text-center">
          <small>To get your file, you can:</small>
        </span>
      </div>
      <div
        style={{ paddingTop: "calc(42px + 1rem)" }}
        className="card-body position-relative"
      >
        <ul className="nav nav-tabs nav-fill position-absolute top-0 start-0 end-0 border-bottom">
          <li className="nav-item">
            <button
              onClick={() => setSelectedTab("download")}
              className={`nav-link rounded-0 ${
                selectedTab === "download" ? "active" : ""
              }`}
            >
              Download It
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setSelectedTab("stream")}
              className={`nav-link rounded-0 ${
                selectedTab === "stream" ? "active" : ""
              }`}
            >
              Stream It
            </button>
          </li>
        </ul>
        <div className="">{renderCurrentTab()}</div>
      </div>
    </div>
  );
}

export default FileMakerCard;
