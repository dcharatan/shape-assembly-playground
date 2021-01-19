import { abstractedEditingTasks, baselineEditingTasks } from './editingTasks.gen';

const TASKS = {
  1: baselineEditingTasks,
  2: abstractedEditingTasks,
};

export const getEditingTasks = (studyCondition) => TASKS[studyCondition];

export const getEditingTask = (studyCondition, index) => TASKS[studyCondition][index];
