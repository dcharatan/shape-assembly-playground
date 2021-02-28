import { getProgramKey } from '../naming-task/precomputation';
import RateLimiter from './RateLimiter';

class CachedRateLimiter extends RateLimiter {
  static cache = new Map();

  async cachedExecute(programText, onComplete) {
    const key = getProgramKey(programText).toString();

    const cachedResult = CachedRateLimiter.cache.get(key);
    if (cachedResult) {
      this.mostRecentExecutionCompletionTimestamp = new Date().getTime();
      clearTimeout(this.delayedExecution);
      onComplete(cachedResult);
    } else {
      this.execute(
        programText,
        (result) => {
          CachedRateLimiter.cache.set(key, result);
          onComplete(result);
        },
        key,
        (result) => {
          // Outdated values should still be cached in case they're needed later.
          CachedRateLimiter.cache.set(key, result);
        }
      );
    }
  }
}

export default CachedRateLimiter;
