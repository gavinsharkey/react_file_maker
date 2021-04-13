class FileMaker {
  static FILE_TYPES = {
    txt: {
      bytesPerCharacter: 1,
      mimeType: "text/plain",
    },
    pdf: {
      bytesPerCharacter: 7076,
      mimeType: "application/pdf",
    },
    doc: {
      bytesPerCharacter: 24064,
      mimeType: "application/msword",
    },
  };

  constructor(type, sizeInBytes) {
    if (!Object.keys(FileMaker.FILE_TYPES).includes(type)) {
      throw new Error("Invalid File Type");
    }

    this.type = type;
    this.sizeInBytes = sizeInBytes;
  }
}

export default FileMaker;
