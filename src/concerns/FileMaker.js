import { FILE_TYPES } from '../constants';

class FileMaker {
  constructor(type, fileName, sizeInBytes) {
    if (!Object.keys(FILE_TYPES).includes(type)) {
      throw new Error("Invalid File Type");
    }

    this.type = type;
    this.fileName = fileName;
    this.sizeInBytes = sizeInBytes;
  }

  getFileAsBase64URL() {
    const { type, sizeInBytes } = this;
    const typeInfo = FILE_TYPES[type];
    const data = btoa("a".repeat(sizeInBytes));
    return `data:${typeInfo.mimeType};base64,${data}`;
  }

  async getFileAsBlob() {
    const resp = await fetch(this.getFileAsBase64URL())
    return await resp.blob();
  }

  download() {
    const { fileName } = this;

    const link = document.createElement("a");
    link.href = this.getFileAsBase64URL();
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async stream(url, options = {
    method: "POST"
  }) {
    const form = new FormData()
    form.append('file', await this.getFileAsBlob(), this.fileName)

    options = {
      ...options,
      body: form
    }

    const resp = await fetch(url, options);
    const {status, statusText} = resp;
    return { status, statusText }
  }
}

export default FileMaker;
