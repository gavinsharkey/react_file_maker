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

  download() {
    const { type, fileName, sizeInBytes } = this;
    const typeInfo = FILE_TYPES[type];
    const data = btoa("a".repeat(sizeInBytes));
    const downloadUrl = `data:${typeInfo.mimeType};base64,${data}`;

    const link = document.createElement("a");
    link.addEventListener('click', e => {
      console.log('clicked')
    })
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export default FileMaker;
