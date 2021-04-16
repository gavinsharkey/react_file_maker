function DetailsCard() {
  return (
    <div className="card shadow overflow-hidden">
      <div className="card-body">
        <h4>File Maker &#x1F4D1;</h4>
        <p>
          <em>For that time when you just need a good ol' file.</em>
        </p>
        <h5>Motivation &#x1F64C;</h5>
        <p className="mb-1">
          Recently I was working on a Zapier integration for my job. Part of the
          Zap was sending files to our API to be parsed, saves, etc. However,
          our API should only accept files of a certain type and size. So long
          story short, I'm looking everywhere online for good sample files and I
          can't seem to find any! It's at that point where I put on a smirk, and
          said:
        </p>
        <img
          className="img-fluid"
          src="https://thumbs.gfycat.com/DownrightDecisiveAzurevasesponge-max-1mb.gif"
          alt="Fine, i'll to it myself"
        />
        <p className="mt-1">
          Hopefully it's as useful to you as it was fun to make!
        </p>
        <h5>Usage &#x1F60E;</h5>
        <ol>
          <li>Enter and select your name, type, and size of your file.</li>
          <li>
            To download directly to your computer, go to the "Download it" tab,
            and press download.
          </li>
          <li>
            To stream the file to your API, go to the "Stream it" tab and enter
            your API endpoint, as well as any advanced info that might be
            necessary (method, headers).
          </li>
        </ol>
        <h5>Notes &#x270D;</h5>
        <ol>
          <li>
            You may have to tweak the CORS configuration of your API to get the
            stream option to work.
          </li>
          <li>
            You can set the headers to your liking, but if you set the{" "}
            <code>Content-Type</code> header, it will break. This is due to how the <code>FormData</code> interface works.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default DetailsCard;
