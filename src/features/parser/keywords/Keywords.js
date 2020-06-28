import KeywordCuboid from './KeywordCuboid';
import KeywordAttach from './KeywordAttach';
import KeywordSqueeze from './KeywordSqueeze';
import KeywordReflect from './KeywordReflect';
import KeywordTranslate from './KeywordTranslate';

export const KW_DEF = 'def';
const keywords = new Set([
  KW_DEF,
  KeywordCuboid.name,
  KeywordAttach.name,
  KeywordSqueeze.name,
  KeywordReflect.name,
  KeywordTranslate.name,
]);
export default keywords;
