export const BYTE_SIZES = {
  b: { max: 104857600, toBytesMultiplier: 1 },
  kb: { max: 102400, toBytesMultiplier: 1024 },
  mb: { max: 100, toBytesMultiplier: 1048576 },
};

export const FILE_TYPES = {
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
