import { fetchExecute } from './executorSlice';

class RateLimiter {
  constructor(maximumExecutionsPerSecond) {
    this.maximumExecutionsPerSecond = maximumExecutionsPerSecond;
    this.mostRecentExecutionRequestTimestamp = 0;
    this.mostRecentExecutionCompletionTimestamp = 0;
  }

  async execute(programText, onComplete, key, onOutdatedComplete) {
    // Record the execution request time.
    const timestamp = new Date().getTime();

    // If the last execution request happened too recently, schedule an execution instead of running it immediately.
    // Scheduled executions are immediately stopped by the next execution.
    // They ensure that the most recent code is executed even if it occurs immediately after a different code snapshot.
    const minimumMilliseconds = 1000 / this.maximumExecutionsPerSecond;
    if (this.delayedExecution) {
      clearTimeout(this.delayedExecution);
    }
    if (timestamp < this.mostRecentExecutionRequestTimestamp + minimumMilliseconds) {
      this.delayedExecution = setTimeout(
        () => this.execute(programText, onComplete, key, onOutdatedComplete),
        minimumMilliseconds
      );
      return;
    }
    this.mostRecentExecutionRequestTimestamp = timestamp;

    // Call the executor.
    const result = await fetchExecute(programText, key);
    if (!result.ok) {
      throw new Error('Executor failed.');
    }
    const json = await result.json();
    if (timestamp < this.mostRecentExecutionCompletionTimestamp || !json) {
      onOutdatedComplete && onOutdatedComplete(json);
      return;
    }
    this.mostRecentExecutionCompletionTimestamp = timestamp;
    onComplete(json);
  }
}

export default RateLimiter;
