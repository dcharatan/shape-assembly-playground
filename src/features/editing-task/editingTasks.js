// This is the file where the editing tasks for the user are defined.
// An editing task is a JS object with "initial" and "target" fields.

const initialTask1 = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)`;

const targetTask1 = `@root_assembly
def root_asm():
    bbox = Cuboid(1.2, 1.4, 0.8, True)
    cube = Cuboid(1.2, 1.4, 0.8, True)`;

const initialTask2 = `@root_assembly
def assembly_fn_0():
    bbox = Cuboid(1.461, 1.463, 0.336, True)
    cube0 = Cuboid(1.231, 0.032, 0.335, True)
    cube1 = Cuboid(0.116, 1.459, 0.335, True)
    cube2 = Cuboid(0.122, 1.457, 0.335, True)
    cube3 = Cuboid(1.233, 0.057, 0.335, True)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.495, 0.0, 0.5)
    squeeze(cube1, bbox, bbox, top, 0.04, 0.5)
    squeeze(cube2, bbox, bbox, top, 0.958, 0.5)
    attach(cube0, cube1, 0.0, 0.5, 0.5, 0.926, 0.009, 0.5)
    squeeze(cube3, cube1, cube2, left, 0.332, 0.5)
    reflect(cube0, Y)
    translate(cube1, X, 2, 0.628)
    reflect(cube3, Y)
`;

const targetTask2 = `@root_assembly
def assembly_fn_0():
    bbox = Cuboid(1.461, 1.463, 0.336, True)
    cube0 = Cuboid(1.231, 0.032, 0.335, True)
    cube1 = Cuboid(0.116, 1.459, 0.335, True)
    cube2 = Cuboid(0.122, 1.457, 0.335, True)
    cube3 = Cuboid(1.233, 0.057, 0.335, True)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.495, 0.0, 0.5)
    squeeze(cube1, bbox, bbox, top, 0.04, 0.5)
    squeeze(cube2, bbox, bbox, top, 0.958, 0.5)
    attach(cube0, cube1, 0.0, 0.5, 0.5, 0.926, 0.009, 0.5)
    squeeze(cube3, cube1, cube2, left, 0.332, 0.5)
    reflect(cube0, Y)
    translate(cube1, X, 2, 0.628)
    reflect(cube3, Y)
`;

const editingTasks = [
  {
    initial: initialTask1,
    target: targetTask1,
  },
  {
    initial: initialTask2,
    target: targetTask2,
  },
];

export default editingTasks;
