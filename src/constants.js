export const BYTE_SIZES = {
  b: { toBytesMultiplier: 1 },
  kb: { toBytesMultiplier: 1024 },
  mb: { toBytesMultiplier: 1048576 },
};

export const MAX_BYTE_SIZE = 104857600;

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
