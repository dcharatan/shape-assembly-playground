import { abstractedEditingTasks, baselineEditingTasks } from './editingTasks.gen';

const TASKS = {
  1: baselineEditingTasks,
  2: abstractedEditingTasks,
};

const TUTORIAL_CUBOID_INITIAL = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    cuboid = Cuboid(1, 1, 1, True)`;

const TUTORIAL_CUBOID_TARGET = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    cuboid = Cuboid(0.5, 1.5, 2, True)`;

const TUTORIAL_ATTACH_INITIAL = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    cuboid_1 = Cuboid(1, 1, 1, True)
    cuboid_2 = Cuboid(0.5, 0.5, 0.5, True)
    attach(cuboid_2, cuboid_1, 1, 1, 1, 1, 0, 1)`;

const TUTORIAL_ATTACH_TARGET = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    cuboid_1 = Cuboid(1, 1, 1, True)
    cuboid_2 = Cuboid(0.5, 0.5, 0.5, True)
    attach(cuboid_2, cuboid_1, 1, 0, 1, 0, 0, 1)`;

const TUTORIAL_SQUEEZE_INITIAL = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(2, 1, 1, True)
    base_cuboid = Cuboid(2, 0.25, 1, True)
    attach(base_cuboid, bbox, 0, 0, 0, 0, 1, 0)
    left_cuboid = Cuboid(0.25, 0.75, 1, True)
    right_cuboid = Cuboid(0.25, 0.75, 1, True)
    attach(left_cuboid, base_cuboid, 0, 0, 0, 0, 1, 0)
    attach(right_cuboid, base_cuboid, 1, 0, 0, 1, 1, 0)
    squeezed_cuboid = Cuboid(0.25, 0.25, 0.25, True)
    squeeze(squeezed_cuboid, left_cuboid, right_cuboid, left, 0.5, 0.5)`;

const TUTORIAL_SQUEEZE_TARGET = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1, 1, 1, True)
    base_cuboid = Cuboid(1, 0.25, 1, True)
    attach(base_cuboid, bbox, 0, 0, 0, 0, 1, 0)
    left_cuboid = Cuboid(0.25, 0.75, 1, True)
    right_cuboid = Cuboid(0.25, 0.75, 1, True)
    attach(left_cuboid, base_cuboid, 0, 0, 0, 0, 1, 0)
    attach(right_cuboid, base_cuboid, 1, 0, 0, 1, 1, 0)
    squeezed_cuboid = Cuboid(0.25, 0.25, 0.25, True)
    squeeze(squeezed_cuboid, left_cuboid, right_cuboid, left, 0.75, 0.5)`;

const TUTORIAL_REFLECT = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.5, 0.75, 0.5, True)
    base_cuboid = Cuboid(1.5, 0.25, 0.5, True)
    attach(base_cuboid, bbox, 0, 0, 0, 0, 1, 0)
    sub_bbox_1 = Cuboid(0.5, 0.5, 0.5, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, base_cuboid, 0, 0, 0, 0, 1, 0)
    reflect(sub_bbox_1, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid1 = Cuboid(0.25, 0.25, 0.25, True)
    cuboid2 = Cuboid(0.25, 0.25, 0.25, True)
    attach(cuboid1, bbox, 0, 0, 0, 0, 1, 0)
    attach(cuboid2, bbox, 1, 1, 1, 1, 0, 1)`;

const TUTORIAL_TRANSLATE_INITIAL = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.5, 0.75, 0.5, True)
    base_cuboid = Cuboid(1.5, 0.25, 0.5, True)
    attach(base_cuboid, bbox, 0, 0, 0, 0, 1, 0)
    cloned_cuboid = Cuboid(0.1, 0.1, 0.5, True)
    attach(cloned_cuboid, base_cuboid, 0, 0, 0, 0, 1, 0)
    translate(cloned_cuboid, X, 3, 0.933)`;

const TUTORIAL_TRANSLATE_TARGET = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.5, 0.75, 0.5, True)
    base_cuboid = Cuboid(1.5, 0.25, 0.5, True)
    attach(base_cuboid, bbox, 0, 0, 0, 0, 1, 0)
    cloned_cuboid = Cuboid(0.1, 0.1, 0.5, True)
    attach(cloned_cuboid, base_cuboid, 0, 0, 0, 0, 1, 0)
    translate(cloned_cuboid, X, 5, 0.8)`;

const TUTORIALS = [
  {
    initial: TUTORIAL_CUBOID_INITIAL,
    target: TUTORIAL_CUBOID_TARGET,
  },
  {
    initial: TUTORIAL_ATTACH_INITIAL,
    target: TUTORIAL_ATTACH_TARGET,
  },
  {
    initial: TUTORIAL_SQUEEZE_INITIAL,
    target: TUTORIAL_SQUEEZE_TARGET,
  },
  {
    initial: TUTORIAL_REFLECT,
    target: TUTORIAL_REFLECT,
  },
  {
    initial: TUTORIAL_TRANSLATE_INITIAL,
    target: TUTORIAL_TRANSLATE_TARGET,
  },
];

export const getEditingTasks = (studyCondition) => [...TUTORIALS, ...TASKS[studyCondition]];

export const getEditingTask = (studyCondition, index) => getEditingTasks(studyCondition)[index];
