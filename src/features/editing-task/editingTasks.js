// This is the file where the editing tasks for the user are defined.
// An editing task is a JS object with "initial" and "target" fields.

export const PREFIX = `def abstraction_0(f_bb_y, i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_0 * 1.0, b_var_0)
    squeeze(cuboid_0, i_bbox, i_bbox, bot, f_var_0 * 0.6, f_var_1)
    reflect(cuboid_0, X)
    return cuboid_0

def abstraction_2(implicit_cuboid, i_bbox, f_var_0):
    attach(implicit_cuboid, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, f_var_0)

def abstraction_5(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 0.0, 0.5, f_var_0, 1.0, f_var_1)

def abstraction_6(f_bb_x, f_bb_z, i_bbox, f_var_0, i_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_var_0, 0.5, f_var_1, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(f_bb_x * 1.0, f_var_2, f_var_3, True)
    squeeze(cuboid_1, cuboid_0, i_bbox, bot, 0.5, f_var_4)
    return cuboid_0, cuboid_1

def abstraction_7(f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    attach(cuboid_0, i_var_0, 0.5, 0.0, 0.5, 0.5, f_var_3, f_var_4)
    return cuboid_0

def abstraction_8(i_bbox, f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    squeeze(cuboid_0, i_bbox, i_var_0, bot, f_var_3, f_var_4)
    return cuboid_0

def abstraction_9(f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_var_0, 0.5, f_var_3, f_var_4, 0.5, 1.0, 0.5)
    return cuboid_0

def abstraction_10(implicit_cuboid, i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    attach(implicit_cuboid, i_bbox, 0.5, 1.0, f_var_0, f_var_1, f_var_2, f_var_3)

def abstraction_12(f_bb_y, i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = abstraction_0(f_bb_y, i_bbox, f_var_0, b_var_0, f_var_1)
    cuboid_1 = abstraction_0(f_bb_y, i_bbox, f_var_0 * 0.95, b_var_0, 1.0 + f_var_1 * -1.0)
    return cuboid_0, cuboid_1

def abstraction_13(f_bb_y, i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_8(i_bbox, f_var_0, f_bb_y * 1.0, f_var_1, i_bbox, f_var_2, f_var_3)
    return cuboid_0

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_5(cuboid_0, i_bbox, f_var_3, f_var_4)
    return cuboid_0

def abstraction_15(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_2(cuboid_0, i_bbox, f_var_3)
    return cuboid_0

def abstraction_16(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4, f_var_5):
    cuboid_0 = abstraction_7(f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4)
    abstraction_2(cuboid_0, i_bbox, f_var_5)
    return cuboid_0

def abstraction_17(f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4, f_var_5):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    attach(cuboid_0, i_var_0, 0.5, 0.0, 0.5, f_var_3, f_var_4, f_var_5)
    return cuboid_0

def abstraction_18(f_bb_x, f_bb_z, i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4, f_var_5):
    cuboid_0 = abstraction_15(i_bbox, f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True, 0.5)
    cuboid_1 = abstraction_8(i_bbox, f_var_1, f_var_2, f_var_3, cuboid_0, f_var_4, f_var_5)
    return cuboid_0, cuboid_1`;

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
