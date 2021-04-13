const SIZES_AND_MAX = {
  b: 104857600,
  kb: 102400,
  mb: 100
}

function App() {
  return (
    <div className="container my-5">
      <div className="row g-3">
        <div className="h-auto col-12 col-lg-8">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">File Maker</h5>
              <p className="card-text text-center mb-0">
                Make a sample file of a particular type/size for testing
                purposes!
              </p>
              <p className="card-text text-muted text-center mt-0"><small>(Max File Size: 104,857,600 B/102,400 KB/100 MB)</small></p>
              <div className="container-fluid">
                <div className="row g-3">
                  <div className="col-8 col-md-9">
                    <label className="form-label">File Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter File Name"
                    ></input>
                  </div>
                  <div className="col-4 col-md-3">
                    <label className="form-label">Ext</label>
                    <select className="form-select">
                      {Object.keys(SIZES_AND_MAX).map((key) => (
                        <option key={key} value={key}>.{key}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-8 col-md-9">
                    <label className="form-label">Size</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter Size"
                    ></input>
                  </div>
                  <div className="col-4 col-md-3">
                    <label className="form-label">Bytes</label>
                    <select className="form-select">
                      <option value="b">B</option>
                      <option value="kb">KB</option>
                      <option value="mb">MB</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-grid">
                      <button className="btn btn-success">Preview</button>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-grid">
                      <button className="btn btn-primary">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto col-12 col-lg-4">
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
        </div>
      </div>
    </div>
  );
}

export default App;
