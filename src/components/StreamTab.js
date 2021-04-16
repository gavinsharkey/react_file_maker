import React, { useEffect, useReducer, useState } from "react";
import Collapse from "./common/Collapse";

const initialState = {
  url: "",
  method: "POST",
  headers: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "url.set":
      return {
        ...state,
        headers: [...state.headers],
        url: action.payload,
      };
    case "method.set":
      return {
        ...state,
        headers: [...state.headers],
        method: action.payload,
      };
    case "headers.add":
      return {
        ...state,
        headers: [...state.headers, action.payload],
      };
    case "headers.update":
      return {
        ...state,
        headers: state.headers.map((prevHeader) => {
          if (prevHeader.id === action.payload.id) {
            return action.payload;
          } else {
            return prevHeader;
          }
        }),
      };
    case "headers.delete":
      return {
        ...state,
        headers: state.headers.filter(
          (prevHeader) => prevHeader.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

function StreamTab({ file }) {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [recentError, setRecentError] = useState(false);

  useEffect(() => {
    if (recentError) {
      setRecentError(false)
    }
  }, [state])

  const setURL = (payload) => {
    dispatch({ type: "url.set", payload });
  };

  const setMethod = (payload) => {
    dispatch({ type: "method.set", payload });
  };

  const addHeader = () => {
    dispatch({
      type: "headers.add",
      payload: {
        id: Math.random(),
        key: "",
        value: "",
      },
    });
  };

  const updateHeader = (payload) => {
    dispatch({ type: "headers.update", payload });
  };

  const deleteHeader = (id) => {
    dispatch({ type: "headers.delete", payload: id });
  };

  const getFetchOptions = () => {
    const { headers } = state;
    const headersAsObject = {};

    for (let header of headers) {
      headersAsObject[header.key] = header.value;
    }

    return { ...state, headers: headersAsObject };
  };

  const streamFile = () => {
    const { url, ...options } = getFetchOptions();

    if (url === "") {
      setRecentError(true);
      return;
    }

    file.stream(url, options).then((resp) => console.log(resp));
  };

  const renderHeaders = () => {
    return state.headers.map((header) => (
      <React.Fragment key={header.id}>
        <div className="col-10 col-md-11">
          <div className="input-group">
            <input
              onChange={(e) => updateHeader({ ...header, key: e.target.value })}
              value={header.key}
              type="text"
              className="form-control"
              placeholder="Key"
            />
            <input
              onChange={(e) =>
                updateHeader({ ...header, value: e.target.value })
              }
              value={header.value}
              type="text"
              className="form-control"
              placeholder="Value"
            />
          </div>
        </div>
        <div className="col-2 col-md-1 d-flex align-items-center justify-content-center">
          <button
            onClick={() => deleteHeader(header.id)}
            className="btn btn-sm btn-close"
          ></button>
        </div>
      </React.Fragment>
    ));
  };

  return (
    <>
      <label htmlFor="url" className="form-label">
        URL
      </label>
      <input
        value={state.url}
        onChange={(e) => setURL(e.target.value)}
        id="url"
        type="text"
        className={`form-control ${recentError ? "is-invalid" : ""}`}
        placeholder="Enter URL"
      />
      {recentError ? <div className="invalid-feedback">Invalid URL</div> : null}
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: "pointer" }}
        className="pt-3 px-1 d-flex flex-row align-items-center"
      >
        <span className="d-block text-muted">Advanced Options</span>
        <i
          style={{
            fontSize: "0.9rem",
            transform: collapsed ? null : "rotate(90deg)",
          }}
          className="bi bi-chevron-right text-muted ms-1 chevron-trigger"
        />
      </div>
      <Collapse collapsed={collapsed}>
        <div className="pt-3">
          <label htmlFor="method" className="form-label">
            Method
          </label>
          <select
            onChange={(e) => setMethod(e.target.value)}
            value={state.method}
            id="method"
            className="form-control"
          >
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
          </select>
          <div className="container-fluid p-0 mt-3">
            <div className="d-flex align-items-center mb-2">
              <label className="form-label mb-0">Headers</label>
              <small
                onClick={addHeader}
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center text-muted ms-2"
              >
                Add
                <i className="bi bi-plus"></i>
              </small>
            </div>
            <div className="row g-0 gy-2">{renderHeaders()}</div>
          </div>
        </div>
      </Collapse>
      <div className="d-grid pt-3">
        <button onClick={streamFile} className="btn btn-primary">
          Send to your API
        </button>
      </div>
    </>
  );
}

export default StreamTab;
