export default (index, hoveredTranspiledLines, attachmentMetadata) => {
  if (hoveredTranspiledLines[index]) {
    return 'direct';
  }
  const hoveredLines = Object.keys(hoveredTranspiledLines);
  for (let i = 0; i < hoveredLines.length; i += 1) {
    const lineIndex = hoveredLines[i];
    const metadata = attachmentMetadata[lineIndex];
    if (metadata) {
      if (metadata.primary === index) {
        return 'primary';
      }
      if (metadata.secondary === index) {
        return 'secondary';
      }
    }
  }
  return undefined;
};
