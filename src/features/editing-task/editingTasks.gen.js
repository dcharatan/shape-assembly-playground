// This is the file where the editing tasks for the user are defined.
// An editing task is a JS object with "initial" and "target" fields.
// THIS IS A COMPUTER-GENERATED FILE. DON'T TRY TO EDIT THIS BY HAND.

export const PREFIX = `def abstraction_0(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    squeeze(implicit_cuboid, i_bbox, i_bbox, bot, f_var_0, f_var_1)

def abstraction_1(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(f_var_1, f_var_2, f_var_3, True)
    squeeze(cuboid_1, i_bbox, cuboid_0, bot, 0.5, f_var_4)
    return cuboid_0, cuboid_1

def abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_bbox, 0.5, 0.0, 0.5, 0.5, 1.0, f_var_3)
    return cuboid_0

def abstraction_3(i_bbox, f_var_0, f_var_1, f_var_2):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_bb_z * 1.0, True)
    attach(cuboid_0, i_bbox, 0.5, 0.0, 0.5, f_var_2, 1.0, 0.5)
    return cuboid_0

def abstraction_4(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 1.0, 0.5, f_var_0, 0.0, f_var_1)

def abstraction_5(f_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_1, True)
    return cuboid_0

def abstraction_7(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4, i_var_0, f_var_5):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_bbox, 0.5, 1.0, 0.5, f_var_3, f_bb_x * 1.0  + f_var_0 * -1.0, f_var_4)
    attach(cuboid_0, i_var_0, 0.0, 0.5, 0.5, 1.0, f_var_5, f_var_4 * 1.0)
    return cuboid_0

def abstraction_9(f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8)
    return cuboid_0

def abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_5(f_var_0, f_var_1)
    abstraction_0(cuboid_0, i_bbox, f_var_2, f_var_3)
    return cuboid_0

def abstraction_11(i_bbox, f_var_0, f_var_1, f_var_2):
    cuboid_0 = abstraction_9(f_bb_x * 1.0, f_var_0, f_var_1, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, f_var_2)
    return cuboid_0

def abstraction_12(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, i_var_0, f_var_4):
    cuboid_0 = abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    attach(cuboid_0, i_var_0, 0.0, 0.5, 0.5, f_var_4, 0.0, 0.5)
    reflect(cuboid_0, Y)
    return cuboid_0

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    reflect(cuboid_0, X)
    return cuboid_0

def abstraction_15(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7):
    cuboid_0 = abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    cuboid_1 = abstraction_10(i_bbox, f_var_4, f_var_5, f_var_6, f_var_7)
    return cuboid_0, cuboid_1`;

const abstractedInitialTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.68, 0.75, True)
    sub_bbox_1 = abstraction_14(bbox, 0.75, 0.47, 0.75, True, 0.5, 0.5)
    cuboid_1,sub_bbox_2 = abstraction_6(bbox, 0.09, sub_bbox_1, 0.0, 1.12, 0.1, 0.06)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.1, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.75, 0.12, 0.1, True, 0.5, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = abstraction_17(0.1, 0.9, 0.1, True, cuboid_0, 0.07, 0.97, 0.5)
    translate(cuboid_1, X, 2, 0.86)

`;

const abstractedTargetTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.77, 1.65, 0.84, True)
    sub_bbox_1 = abstraction_14(bbox, 0.77, 0.4, 0.84, True, 0.5, 0.5)
    cuboid_1,sub_bbox_2 = abstraction_6(bbox, 0.3, sub_bbox_1, 0.0, 0.95, 0.15, 0.09)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.17, True, 0.12)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.77, 0.16, 0.15, True, 0.5, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = abstraction_17(0.18, 0.63, 0.14, True, cuboid_0, 0.12, 0.99, 0.46)
    translate(cuboid_1, X, 3, 0.76)

`;

const baselineInitialTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.68, 0.75, True)
    sub_bbox_1 = Cuboid(0.75, 0.47, 0.75, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.75, 0.09, 0.75, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.75, 1.12, 0.1, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.47, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.06)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.47, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.94)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.75, 0.12, 0.1, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = Cuboid(0.1, 0.9, 0.1, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.07, 0.97, 0.5)
    translate(cuboid_1, X, 2, 0.86)

`;

const baselineTargetTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.77, 1.65, 0.84, True)
    sub_bbox_1 = Cuboid(0.77, 0.4, 0.84, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.77, 0.3, 0.84, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.77, 0.95, 0.15, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.17, 0.4, 0.17, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.102, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1615, 0.4, 0.1615, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0969, 0.88)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.77, 0.16, 0.15, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = Cuboid(0.18, 0.63, 0.14, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.12, 0.99, 0.46)
    translate(cuboid_1, X, 3, 0.76)

`;

const abstractedInitialTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.66, 0.63, True)
    sub_bbox_1 = abstraction_14(bbox, 0.63, 0.61, 0.64, True, 0.5, 0.5)
    cuboid_1,sub_bbox_2 = abstraction_6(bbox, 0.18, sub_bbox_1, 0.15, 0.91, 0.1, 0.08)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.16, True, 0.1)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.18, 0.15, 0.72, 0.1, 0.12, 0.49)
    reflect(cuboid_1, X)

`;

const abstractedTargetTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.68, 1.47, 0.91, True)
    sub_bbox_1 = abstraction_14(bbox, 0.68, 0.62, 0.87, True, 0.5, 0.52)
    cuboid_1,sub_bbox_2 = abstraction_6(bbox, 0.19, sub_bbox_1, 0.02, 0.66, 0.14, 0.06)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.1, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.62, 0.03, 0.03, 0.03, 0.3, 0.53)
    reflect(cuboid_1, X)

`;

const baselineInitialTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.66, 0.63, True)
    sub_bbox_1 = Cuboid(0.63, 0.61, 0.63, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.63, 0.18, 0.63, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.15, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.63, 0.91, 0.1, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.08)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.16, 0.61, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.096, 0.1)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.152, 0.61, 0.152, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0912, 0.9)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.63, 0.18, 0.1, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.15, 0.72, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.12, 0.49)
    reflect(cuboid_1, X)

`;

const baselineTargetTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.68, 1.47, 0.91, True)
    sub_bbox_1 = Cuboid(0.68, 0.62, 0.87, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.52)
    cuboid_1 = Cuboid(0.68, 0.19, 0.91, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.02, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.68, 0.66, 0.14, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.62, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.62, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.67, 0.62, 0.14, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.03, 0.03, 0.03, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.3, 0.53)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.76, 0.6, True)
    sub_bbox_1 = abstraction_14(bbox, 0.59, 0.65, 0.59, True, 0.5, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.16, sub_bbox_1, 0.03, 0.96, 0.1, 0.09)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.11, 0.59, 0.09, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.37, 0.06, 0.06, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.24, 0.51)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.1, 0.11, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.1, 0.07, 0.44, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.24, 0.67)

`;

const abstractedTargetTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.65, 0.88, True)
    sub_bbox_1 = abstraction_14(bbox, 0.89, 0.85, 0.88, True, 0.5, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.09, sub_bbox_1, 0.06, 0.71, 0.11, 0.06)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.14, 0.88, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.6, 0.11, 0.12, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.99, 0.58, 0.5)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.11, 0.13, 0.41, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.13, 0.13, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.64, 0.58, 0.84)

`;

const baselineInitialTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.76, 0.6, True)
    sub_bbox_1 = Cuboid(0.59, 0.65, 0.59, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.6, 0.16, 0.6, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.6, 0.96, 0.1, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.09)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.11, 0.65, 0.59, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.09, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.37, 0.06, 0.06, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.24, 0.51)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 0.65, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.1, 0.07, 0.44, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.24, 0.67)

`;

const baselineTargetTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.65, 0.88, True)
    sub_bbox_1 = Cuboid(0.89, 0.85, 0.88, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.89, 0.09, 0.88, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.06, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.89, 0.71, 0.11, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.06)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.14, 0.85, 0.88, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.6, 0.11, 0.12, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.99, 0.58, 0.5)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.11, 0.85, 0.13, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.41, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.13, 0.13, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.64, 0.58, 0.84)

`;

const abstractedInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.66, 1.42, 0.71, True)
    sub_bbox_1 = abstraction_14(bbox, 0.61, 0.79, 0.68, True, 0.5, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.37, sub_bbox_1, 0.01, 0.26, 0.13, 0.1)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.05, 0.68, 0.04, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.52, 0.02, 0.02, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.43, 0.05)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.05, 0.05, 0.5, 0.04)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.02, 0.02, 0.58, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.52, 0.91)

`;

const abstractedTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.81, 1.7, 0.86, True)
    sub_bbox_1 = abstraction_14(bbox, 0.81, 0.55, 0.86, True, 0.5, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.24, sub_bbox_1, 0.0, 0.91, 0.21, 0.13)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.16, 0.84, 0.1, 0.51)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.57, 0.08, 0.09, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.8, 0.54, 0.04)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.15, 0.19, 0.52, 0.11)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.09, 0.1, 0.59, True)
    attach(cuboid_1, cuboid_0, 0.97, 0.33, 0.08, 0.5, 0.5, 1.0)

`;

const baselineInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.66, 1.42, 0.71, True)
    sub_bbox_1 = Cuboid(0.61, 0.79, 0.68, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.66, 0.37, 0.71, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.66, 0.26, 0.13, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.1)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.05, 0.79, 0.68, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.04, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.52, 0.02, 0.02, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.43, 0.05)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.05, 0.79, 0.05, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.04)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.02, 0.02, 0.58, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.52, 0.91)

`;

const baselineTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.81, 1.7, 0.86, True)
    sub_bbox_1 = Cuboid(0.81, 0.55, 0.86, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.81, 0.24, 0.86, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.81, 0.91, 0.21, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.13)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.16, 0.55, 0.84, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.1, 0.51)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.57, 0.08, 0.09, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.8, 0.54, 0.04)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.15, 0.55, 0.19, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.52, 0.11)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.09, 0.1, 0.59, True)
    attach(cuboid_1, cuboid_0, 0.97, 0.33, 0.08, 0.5, 0.5, 1.0)

`;

const abstractedInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.53, 1.05, True)
    sub_bbox_1 = abstraction_14(bbox, 0.84, 0.42, 1.01, True, 0.5, 0.51)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.45, sub_bbox_1, 0.0, 0.66, 0.29, 0.14)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.05, 1.01, 0.03, 0.5)
    reflect(sub_bbox_2, X)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.05, 0.04, 0.5, 0.02)
    reflect(cuboid_0, Z)
    cuboid_1 = abstraction_14(bbox, 0.05, 0.04, 0.93, True, 0.5, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.05, 0.93)

`;

const abstractedTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.74, 1.77, 0.72, True)
    sub_bbox_1 = abstraction_14(bbox, 0.7, 0.85, 0.69, True, 0.5, 0.48)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.16, sub_bbox_1, 0.01, 0.77, 0.11, 0.08)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(bbox, 0.11, 0.69, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(bbox, 0.11, 0.18, 0.5, 0.13)
    reflect(cuboid_0, Z)
    cuboid_1 = abstraction_14(bbox, 0.09, 0.11, 0.37, True, 0.52, 0.52)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.1, 0.99)

`;

const baselineInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.53, 1.05, True)
    sub_bbox_1 = Cuboid(0.84, 0.42, 1.01, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.51)
    cuboid_1 = Cuboid(0.87, 0.45, 1.05, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.87, 0.66, 0.29, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.14)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.05, 0.42, 1.01, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.03, 0.5)
    reflect(sub_bbox_2, X)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.05, 0.42, 0.04, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.02)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.04, 0.93, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.05, 0.93)

`;

const baselineTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.74, 1.77, 0.72, True)
    sub_bbox_1 = Cuboid(0.7, 0.85, 0.69, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.48)
    cuboid_1 = Cuboid(0.74, 0.16, 0.72, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.74, 0.77, 0.11, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.08)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.11, 0.85, 0.69, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.11, 0.85, 0.18, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.13)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.09, 0.11, 0.37, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.52, 1.0, 0.52)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.1, 0.99)

`;

const abstractedInitialTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.39, 1.07, 1.2, True)
    sub_bbox_1 = abstraction_14(bbox, 0.88, 0.13, 0.83, True, 0.5, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.4, sub_bbox_1, 0.0, 0.54, 0.32, 0.13)
    cuboid_3 = abstraction_17(0.29, 0.37, 0.88, True, cuboid_1, 0.11, 1.0, 0.64)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.11, 0.34, 1.0)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.07, True, 0.04)

`;

const abstractedTargetTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.33, 1.57, 1.35, True)
    sub_bbox_1 = abstraction_14(bbox, 1.05, 0.59, 1.1, True, 0.51, 0.47)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.14, sub_bbox_1, 0.09, 0.84, 0.05, 0.01)
    cuboid_3 = abstraction_17(0.06, 0.22, 1.21, True, cuboid_1, 0.02, 1.0, 0.48)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.13, 0.94)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.14, True, 0.07)

`;

const baselineInitialTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.39, 1.07, 1.2, True)
    sub_bbox_1 = Cuboid(0.88, 0.13, 0.83, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(1.39, 0.4, 1.2, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(1.39, 0.54, 0.32, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.13)
    cuboid_3 = Cuboid(0.29, 0.37, 0.88, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.11, 1.0, 0.64)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.11, 0.34, 1.0)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.07, 0.13, 0.07, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.042, 0.04)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0665, 0.13, 0.0665, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0399, 0.96)
    reflect(cuboid_1, X)

`;

const baselineTargetTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.33, 1.57, 1.35, True)
    sub_bbox_1 = Cuboid(1.05, 0.59, 1.1, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.51, 1.0, 0.47)
    cuboid_1 = Cuboid(1.33, 0.14, 1.35, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.09, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(1.33, 0.84, 0.05, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.01)
    cuboid_3 = Cuboid(0.06, 0.22, 1.21, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.02, 1.0, 0.48)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.13, 0.94)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.59, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.59, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.93)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.83, 0.68, True)
    sub_bbox_1 = abstraction_14(bbox, 0.68, 0.67, 0.68, True, 0.48, 0.5)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.22, sub_bbox_1, 0.01, 0.95, 0.24, 0.18)
    cuboid_3 = abstraction_17(0.21, 0.22, 0.43, True, cuboid_1, 0.15, 1.0, 0.68)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.15, 0.12, 1.0)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.16, True, 0.11)

`;

const abstractedTargetTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.66, 0.95, 0.64, True)
    sub_bbox_1 = abstraction_14(bbox, 1.65, 0.21, 0.53, True, 0.5, 0.52)
    cuboid_1, cuboid_2 = abstraction_6(bbox, 0.14, sub_bbox_1, 0.0, 0.6, 0.07, 0.11)
    cuboid_3 = abstraction_17(0.07, 0.28, 0.5, True, cuboid_1, 0.03, 1.0, 0.56)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.24, 0.99)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.07, True, 0.93)

`;

const baselineInitialTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.83, 0.68, True)
    sub_bbox_1 = Cuboid(0.68, 0.67, 0.68, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.48, 1.0, 0.5)
    cuboid_1 = Cuboid(0.71, 0.22, 0.68, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.71, 0.95, 0.24, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.18)
    cuboid_3 = Cuboid(0.21, 0.22, 0.43, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.15, 1.0, 0.68)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.15, 0.12, 1.0)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.16, 0.67, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.096, 0.11)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.152, 0.67, 0.152, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0912, 0.89)
    reflect(cuboid_1, X)

`;

const baselineTargetTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.66, 0.95, 0.64, True)
    sub_bbox_1 = Cuboid(1.65, 0.21, 0.53, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.52)
    cuboid_1 = Cuboid(1.66, 0.14, 0.64, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(1.66, 0.6, 0.07, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.11)
    cuboid_3 = Cuboid(0.07, 0.28, 0.5, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.03, 1.0, 0.56)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.24, 0.99)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.07, 0.21, 0.07, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.042, 0.93)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0665, 0.21, 0.0665, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0399, 0.07)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.15, 1.19, True)
    sub_bbox_1 = abstraction_14(bbox, 1.13, 0.08, 0.94, True, 0.5, 0.5)
    cuboid_1 = abstraction_9(1.34, 0.64, 1.19, sub_bbox_1, 0.0, 0.5)
    sub_bbox_2 = Cuboid(1.15, 0.42, 0.32, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.14)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.12, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.32, 0.08, 0.11, 0.08, 0.1, 0.5)
    reflect(cuboid_1, X)

`;

const abstractedTargetTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.65, 0.82, True)
    sub_bbox_1 = abstraction_14(bbox, 0.73, 0.71, 0.63, True, 0.49, 0.51)
    cuboid_1 = abstraction_9(0.82, 0.09, 0.82, sub_bbox_1, 0.0, 0.51)
    sub_bbox_2 = Cuboid(0.75, 0.85, 0.14, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.49, 0.19)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.09, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.19, 0.08, 0.65, 0.1, 0.15, 0.44)
    reflect(cuboid_1, X)

`;

const baselineInitialTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.15, 1.19, True)
    sub_bbox_1 = Cuboid(1.13, 0.08, 0.94, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(1.34, 0.64, 1.19, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(1.15, 0.42, 0.32, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.14)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.12, 0.08, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.072, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.114, 0.08, 0.114, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0684, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.15, 0.32, 0.31, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.08, 0.11, 0.08, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.1, 0.5)
    reflect(cuboid_1, X)

`;

const baselineTargetTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.65, 0.82, True)
    sub_bbox_1 = Cuboid(0.73, 0.71, 0.63, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.49, 1.0, 0.51)
    cuboid_1 = Cuboid(0.82, 0.09, 0.82, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.51, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.75, 0.85, 0.14, True)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.49, 0.19)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.09, 0.71, 0.09, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.054, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0855, 0.71, 0.0855, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0513, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.75, 0.19, 0.14, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.08, 0.65, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.15, 0.44)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.94, 1.24, 0.95, True)
    sub_bbox_1 = abstraction_14(bbox, 0.94, 0.59, 0.95, True, 0.5, 0.5)
    cuboid_1 = abstraction_15(bbox, 0.94, 0.67, 0.12, True, 0.07)
    cuboid_2 = Cuboid(0.94, 0.2, 0.82, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.17, 1.0)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.08, 0.42, 0.5, 1.0, 0.5)
    cuboid_3 = abstraction_17(0.1, 0.31, 0.82, True, cuboid_2, 0.06, 1.0, 0.5)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.05, 0.55, 0.97)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.1, True, 0.05)

`;

const abstractedTargetTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.15, 1.78, 0.64, True)
    sub_bbox_1 = abstraction_14(bbox, 1.15, 0.64, 0.63, True, 0.5, 0.51)
    cuboid_1 = abstraction_15(bbox, 1.14, 1.14, 0.06, True, 0.04)
    cuboid_2 = Cuboid(1.14, 0.07, 0.62, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.4)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.27, 0.49, 0.5, 1.0, 0.5)
    cuboid_3 = abstraction_17(0.02, 0.06, 0.58, True, cuboid_2, 0.01, 1.0, 0.52)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.01, 0.08, 0.99)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.14, True, 0.08)

`;

const baselineInitialTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.94, 1.24, 0.95, True)
    sub_bbox_1 = Cuboid(0.94, 0.59, 0.95, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.94, 0.67, 0.12, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.07)
    cuboid_2 = Cuboid(0.94, 0.2, 0.82, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.17, 1.0)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.08, 0.42, 0.5, 1.0, 0.5)
    cuboid_3 = Cuboid(0.1, 0.31, 0.82, True)
    attach(cuboid_3, cuboid_2, 0.5, 0.0, 0.5, 0.06, 1.0, 0.5)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.05, 0.55, 0.97)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.59, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.05)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.59, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.95)
    reflect(cuboid_1, X)

`;

const baselineTargetTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.15, 1.78, 0.64, True)
    sub_bbox_1 = Cuboid(1.15, 0.64, 0.63, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.51)
    cuboid_1 = Cuboid(1.14, 1.14, 0.06, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.04)
    cuboid_2 = Cuboid(1.14, 0.07, 0.62, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.4)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.27, 0.49, 0.5, 1.0, 0.5)
    cuboid_3 = Cuboid(0.02, 0.06, 0.58, True)
    attach(cuboid_3, cuboid_2, 0.5, 0.0, 0.5, 0.01, 1.0, 0.52)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.01, 0.08, 0.99)
    reflect(cuboid_3, X)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.64, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.64, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.92)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.64, 0.9, True)
    sub_bbox_1 = abstraction_14(bbox, 0.89, 0.61, 0.9, True, 0.5, 0.5)
    cuboid_1 = abstraction_15(bbox, 0.89, 1.0, 0.23, True, 0.14)
    cuboid_2 = abstraction_17(0.23, 0.67, 0.7, True, sub_bbox_1, 0.14, 0.96, 0.61)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.13, 0.28, 0.83)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.88, 0.17, 0.88, True)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.01, 0.11, 0.37)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.01)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.22, True, 0.12)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.88, 0.07, 0.86, True, 0.5, 0.49)
    cuboid_1 = abstraction_16(bbox, 0.43, 0.15, 0.66, True, cuboid_0, 0.41, 0.64, 0.63)

`;

const abstractedTargetTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.25, 1.31, True)
    sub_bbox_1 = abstraction_14(bbox, 1.1, 0.22, 1.24, True, 0.49, 0.48)
    cuboid_1 = abstraction_15(bbox, 1.04, 1.04, 0.17, True, 0.06)
    cuboid_2 = abstraction_17(0.23, 0.78, 1.28, True, sub_bbox_1, 0.0, 0.98, 0.52)
    attach(cuboid_2, cuboid_1, 0.64, 0.66, 0.06, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.99, 0.31, 1.17, True)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.74, 0.15, 0.56)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.11, 0.85)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.13, True, 0.05)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.97, 0.25, 1.15, True, 0.51, 0.49)
    cuboid_1 = abstraction_16(bbox, 0.99, 0.12, 1.14, True, cuboid_0, 0.75, 0.52, 0.51)

`;

const baselineInitialTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.64, 0.9, True)
    sub_bbox_1 = Cuboid(0.89, 0.61, 0.9, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.89, 1.0, 0.23, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.14)
    cuboid_2 = Cuboid(0.23, 0.67, 0.7, True)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.0, 0.5, 0.14, 0.96, 0.61)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.13, 0.28, 0.83)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.88, 0.17, 0.88, True)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.01, 0.11, 0.37)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.01)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.22, 0.61, 0.22, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.132, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.209, 0.61, 0.209, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1254, 0.88)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.88, 0.07, 0.86, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.49)
    cuboid_1 = Cuboid(0.43, 0.15, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.5, 0.41, 0.64)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.63)

`;

const baselineTargetTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.25, 1.31, True)
    sub_bbox_1 = Cuboid(1.1, 0.22, 1.24, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.49, 1.0, 0.48)
    cuboid_1 = Cuboid(1.04, 1.04, 0.17, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.06)
    cuboid_2 = Cuboid(0.23, 0.78, 1.28, True)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.0, 0.5, 0.0, 0.98, 0.52)
    attach(cuboid_2, cuboid_1, 0.64, 0.66, 0.06, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.99, 0.31, 1.17, True)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.74, 0.15, 0.56)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.11, 0.85)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.13, 0.22, 0.13, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.078, 0.05)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1235, 0.22, 0.1235, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0741, 0.95)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.97, 0.25, 1.15, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.51, 1.0, 0.49)
    cuboid_1 = Cuboid(0.99, 0.12, 1.14, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.5, 0.75, 0.52)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.51)

`;

const abstractedInitialTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.58, 1.75, 0.69, True)
    sub_bbox_1 = abstraction_15(bbox, 0.56, 1.03, 0.24, True, 0.32)
    cuboid_1 = Cuboid(0.56, 0.07, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 1.0, 0.5, 0.47, 0.0, 1.0)
    sub_bbox_2 = abstraction_8(bbox, 0.56, 0.65, 0.49, cuboid_1, 0.49, 0.64)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.2, 0.04, 0.83, 0.04, 0.14, 0.47)
    translate(cuboid_1, X, 3, 0.66)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.1, True, 0.09)

`;

const abstractedTargetTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.48, 1.04, True)
    sub_bbox_1 = abstraction_15(bbox, 1.02, 0.88, 0.24, True, 0.11)
    cuboid_1 = Cuboid(1.02, 0.1, 1.02, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.5, 0.0, 0.5, 0.0, 0.1)
    sub_bbox_2 = abstraction_8(bbox, 1.03, 0.55, 1.01, cuboid_1, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(bbox, 0.14, 0.2, 0.71, 0.19, 0.09, 0.49)
    translate(cuboid_1, X, 2, 0.81)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.26, True, 0.12)

`;

const baselineInitialTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.58, 1.75, 0.69, True)
    sub_bbox_1 = Cuboid(0.56, 1.03, 0.24, True)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.32)
    cuboid_1 = Cuboid(0.56, 0.07, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 1.0, 0.5, 0.47, 0.0, 1.0)
    sub_bbox_2 = Cuboid(0.56, 0.65, 0.49, True)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.49, 0.64)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.56, 0.2, 0.24, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.04, 0.83, 0.04, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.14, 0.47)
    translate(cuboid_1, X, 3, 0.66)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 0.65, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.09)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.65, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.91)
    reflect(cuboid_1, X)

`;

const baselineTargetTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.48, 1.04, True)
    sub_bbox_1 = Cuboid(1.02, 0.88, 0.24, True)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.11)
    cuboid_1 = Cuboid(1.02, 0.1, 1.02, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.5, 0.0, 0.5, 0.0, 0.1)
    sub_bbox_2 = Cuboid(1.03, 0.55, 1.01, True)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(1.02, 0.14, 0.24, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.2, 0.71, 0.19, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.09, 0.49)
    translate(cuboid_1, X, 2, 0.81)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.26, 0.55, 0.26, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.156, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.247, 0.55, 0.247, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1482, 0.88)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.19, 1.43, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.02, 1.18, 1.17, 1.18, 0.12)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_19(bbox, 0.15, 0.16, True, 0.14, 0.15, 0.15, 0.16, True, 0.14, 0.86)
    cuboid_2, cuboid_3 = abstraction_19(bbox, 0.15, 0.16, True, 0.85, 0.15, 0.15, 0.16, True, 0.85, 0.86)
    cuboid_4 = abstraction_9(1.18, 0.1, 1.18, cuboid_0, 0.14, 0.15, 0.5, 0.74, 0.49)
    attach(cuboid_4, cuboid_1, 0.14, 0.49, 0.86, 0.5, 0.74, 0.5)
    cuboid_5 = Cuboid(0.99, 0.23, 0.15, False)
    attach(cuboid_5, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.17, 0.06)
    attach(cuboid_5, cuboid_2, 1.0, 0.5, 0.5, 0.03, 0.17, 0.94)
    cuboid_6 = Cuboid(0.99, 0.23, 0.15, False)
    attach(cuboid_6, cuboid_0, 0.0, 0.5, 0.5, 0.97, 0.17, 0.94)
    attach(cuboid_6, cuboid_3, 1.0, 0.5, 0.5, 0.03, 0.17, 0.06)

`;

const abstractedTargetTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.82, 0.65, 1.82, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.02, 1.69, 0.63, 1.69, 0.1)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_19(bbox, 0.12, 0.12, True, 0.14, 0.15, 0.12, 0.12, True, 0.14, 0.86)
    cuboid_2, cuboid_3 = abstraction_19(bbox, 0.12, 0.12, True, 0.85, 0.15, 0.12, 0.12, True, 0.85, 0.86)
    cuboid_4 = abstraction_9(1.69, 0.08, 1.69, cuboid_0, 0.14, 0.15, 0.5, 0.65, 0.51)
    attach(cuboid_4, cuboid_1, 0.14, 0.5, 0.86, 0.5, 0.65, 0.5)
    cuboid_5 = Cuboid(1.54, 0.18, 0.12, False)
    attach(cuboid_5, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.24, 0.06)
    attach(cuboid_5, cuboid_2, 1.0, 0.5, 0.5, 0.03, 0.24, 0.94)
    cuboid_6 = Cuboid(1.54, 0.18, 0.12, False)
    attach(cuboid_6, cuboid_0, 0.0, 0.5, 0.5, 0.97, 0.24, 0.94)
    attach(cuboid_6, cuboid_3, 1.0, 0.5, 0.5, 0.03, 0.24, 0.06)

`;

const baselineInitialTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.19, 1.43, True)
    cuboid_0 = Cuboid(1.43, 0.02, 1.43, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.18, 1.17, 1.18, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.12, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.15, 1.17, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.14, 0.15)
    cuboid_1 = Cuboid(0.15, 1.17, 0.16, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.14, 0.86)
    cuboid_2 = Cuboid(0.15, 1.17, 0.16, True)
    squeeze(cuboid_2, bbox, bbox, bot, 0.85, 0.15)
    cuboid_3 = Cuboid(0.15, 1.17, 0.16, True)
    squeeze(cuboid_3, bbox, bbox, bot, 0.85, 0.86)
    cuboid_4 = Cuboid(1.18, 0.1, 1.18, True)
    attach(cuboid_4, cuboid_0, 0.14, 0.5, 0.15, 0.5, 0.74, 0.49)
    attach(cuboid_4, cuboid_1, 0.14, 0.49, 0.86, 0.5, 0.74, 0.5)
    cuboid_5 = Cuboid(0.99, 0.23, 0.15, False)
    attach(cuboid_5, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.17, 0.06)
    attach(cuboid_5, cuboid_2, 1.0, 0.5, 0.5, 0.03, 0.17, 0.94)
    cuboid_6 = Cuboid(0.99, 0.23, 0.15, False)
    attach(cuboid_6, cuboid_0, 0.0, 0.5, 0.5, 0.97, 0.17, 0.94)
    attach(cuboid_6, cuboid_3, 1.0, 0.5, 0.5, 0.03, 0.17, 0.06)

`;

const baselineTargetTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.82, 0.65, 1.82, True)
    cuboid_0 = Cuboid(1.82, 0.02, 1.82, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.69, 0.63, 1.69, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.1, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.14, 0.15)
    cuboid_1 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.14, 0.86)
    cuboid_2 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_2, bbox, bbox, bot, 0.85, 0.15)
    cuboid_3 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_3, bbox, bbox, bot, 0.85, 0.86)
    cuboid_4 = Cuboid(1.68, 0.08, 1.68, True)
    attach(cuboid_4, cuboid_0, 0.14, 0.5, 0.15, 0.5, 0.65, 0.51)
    attach(cuboid_4, cuboid_1, 0.14, 0.5, 0.86, 0.5, 0.65, 0.5)
    cuboid_5 = Cuboid(1.54, 0.18, 0.12, False)
    attach(cuboid_5, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.24, 0.06)
    attach(cuboid_5, cuboid_2, 1.0, 0.5, 0.5, 0.03, 0.24, 0.94)
    cuboid_6 = Cuboid(1.54, 0.18, 0.12, False)
    attach(cuboid_6, cuboid_0, 0.0, 0.5, 0.5, 0.97, 0.24, 0.94)
    attach(cuboid_6, cuboid_3, 1.0, 0.5, 0.5, 0.03, 0.24, 0.06)

`;

const abstractedInitialTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.42, 0.9, 0.3, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.01, 1.38, 0.89, 0.26, 0.12)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.06, 0.25, 0.02, 0.53, X)
    cuboid_1 = abstraction_17(bbox, 1.28, 0.16, 0.04, 0.5, 0.16)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.84, 0.91, 0.11)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.06, 0.05, 0.52, 0.11, Z)
    cuboid_1 = abstraction_17(bbox, 0.05, 0.18, 0.17, 0.56, 0.55)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.48, 0.9, 0.98)

`;

const abstractedTargetTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.77, 0.75, 0.88, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.02, 1.2, 0.73, 0.81, 0.15)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.17, 0.81, 0.07, 0.5, X)
    cuboid_1 = abstraction_17(bbox, 0.92, 0.11, 0.07, 0.51, 0.06)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.88, 0.92, 0.06)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.15, 0.14, 0.46, 0.09, Z)
    cuboid_1 = abstraction_17(bbox, 0.06, 0.11, 0.52, 0.28, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.31, 0.92, 1.0)

`;

const baselineInitialTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.42, 0.9, 0.3, True)
    cuboid_0 = Cuboid(1.42, 0.01, 0.3, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.38, 0.89, 0.26, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.12, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.06, 0.89, 0.25, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.02, 0.53)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.28, 0.16, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.16)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.84, 0.91, 0.11)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.06, 0.89, 0.05, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.52, 0.11)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.18, 0.17, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.56, 1.0, 0.55)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.48, 0.9, 0.98)

`;

const baselineTargetTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.77, 0.75, 0.88, True)
    cuboid_0 = Cuboid(1.77, 0.02, 0.88, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.2, 0.73, 0.81, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.15, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.17, 0.73, 0.81, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.07, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.92, 0.11, 0.07, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.51, 1.0, 0.06)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.88, 0.92, 0.06)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.15, 0.73, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.46, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.06, 0.11, 0.52, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.28, 1.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.31, 0.92, 1.0)

`;

const abstractedInitialTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.36, 0.97, 1.36, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.06, 0.94, 0.93, 0.93, 0.36)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.14, 0.88, 0.07, 0.49, X)
    cuboid_1 = abstraction_17(bbox, 0.72, 0.12, 0.04, 0.51, 0.03)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.88, 0.91, 0.01)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.09, 0.1, 0.62, 0.05, Z)
    cuboid_1 = Cuboid(0.06, 0.13, 0.74, False)
    abstraction_5(cuboid_1, bbox, 0.53, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.12, 0.94, 0.78)

`;

const abstractedTargetTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.45, 0.75, 0.81, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.1, 1.42, 0.66, 0.79, 0.11)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.18, 0.79, 0.06, 0.5, X)
    cuboid_1 = abstraction_17(bbox, 1.22, 0.06, 0.1, 0.5, 0.06)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.58, 0.94, 0.06)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.17, 0.16, 0.47, 0.1, Z)
    cuboid_1 = Cuboid(0.04, 0.06, 0.45, False)
    abstraction_5(cuboid_1, bbox, 0.16, 0.49)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.14, 0.96, 0.98)

`;

const baselineInitialTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.36, 0.97, 1.36, True)
    cuboid_0 = Cuboid(1.36, 0.06, 1.36, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(0.94, 0.93, 0.93, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.36, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.14, 0.93, 0.88, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.07, 0.49)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.72, 0.12, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.51, 1.0, 0.03)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.88, 0.91, 0.01)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.09, 0.93, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.62, 0.05)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.06, 0.13, 0.74, False)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.53, 1.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.12, 0.94, 0.78)

`;

const baselineTargetTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.45, 0.75, 0.81, True)
    cuboid_0 = Cuboid(1.45, 0.1, 0.81, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.42, 0.66, 0.79, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.11, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.18, 0.66, 0.79, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.06, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.22, 0.06, 0.1, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.06)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.58, 0.94, 0.06)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.17, 0.66, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.47, 0.1)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.04, 0.06, 0.45, False)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.16, 1.0, 0.49)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.14, 0.96, 0.98)

`;

const abstractedInitialTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.91, 0.45, 0.71, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.02, 1.23, 0.44, 0.49, 0.41)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.04, 0.49, 0.01, 0.5, X)
    cuboid_1 = abstraction_17(bbox, 1.16, 0.03, 0.01, 0.5, 0.28)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.95, 0.28)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_17(bbox, 0.04, 0.03, 0.27, 0.5, 0.5)
    cuboid_1 = Cuboid(0.04, 0.43, 0.05, False)
    abstraction_7(cuboid_1, bbox, 0.5, 0.05)
    abstraction_5(cuboid_1, bbox, 0.5, 0.18)
    reflect(cuboid_1, Z)

`;

const abstractedTargetTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.12, 1.09, 1.12, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.03, 0.76, 1.07, 0.79, 0.33)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.11, 0.79, 0.08, 0.5, X)
    cuboid_1 = abstraction_17(bbox, 0.75, 0.06, 0.03, 0.5, 0.14)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.03, 0.96, 0.14)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_17(bbox, 0.03, 0.06, 0.56, 0.12, 0.51)
    cuboid_1 = Cuboid(0.09, 1.07, 0.09, False)
    abstraction_7(cuboid_1, bbox, 0.59, 0.06)
    abstraction_5(cuboid_1, bbox, 0.59, 0.21)
    reflect(cuboid_1, Z)

`;

const baselineInitialTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.91, 0.45, 0.71, True)
    cuboid_0 = Cuboid(1.91, 0.02, 0.71, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.23, 0.44, 0.49, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.41, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.04, 0.44, 0.49, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.01, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.16, 0.03, 0.01, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.28)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.95, 0.28)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.04, 0.03, 0.27, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.04, 0.43, 0.05, False)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.05)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.18)
    reflect(cuboid_1, Z)

`;

const baselineTargetTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.12, 1.09, 1.12, True)
    cuboid_0 = Cuboid(1.12, 0.03, 1.12, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(0.76, 1.07, 0.79, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.33, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.11, 1.07, 0.79, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.75, 0.06, 0.03, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.14)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.03, 0.96, 0.14)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.03, 0.06, 0.56, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.12, 1.0, 0.51)
    cuboid_1 = Cuboid(0.09, 1.07, 0.09, False)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.59, 0.0, 0.06)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.59, 1.0, 0.21)
    reflect(cuboid_1, Z)

`;

const abstractedInitialTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.27, 0.89, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.08, 0.85, 1.2, 0.83, 0.12)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.12, 0.83, 0.07, 0.5, X)
    cuboid_1 = abstraction_9(0.62, 0.06, 0.06, sub_bbox_2, 0.0, 0.5, 0.89, 0.13, 0.05)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.1, 0.12, 0.44, 0.07, Z)
    cuboid_1 = abstraction_9(0.07, 0.06, 0.61, cuboid_0, 0.5, 0.0, 0.44, 0.12, 1.0)

`;

const abstractedTargetTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.37, 0.9, 0.8, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.19, 1.37, 0.74, 0.8, 0.16)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.14, 0.8, 0.05, 0.5, X)
    cuboid_1 = abstraction_9(1.1, 0.04, 0.07, sub_bbox_2, 0.0, 0.5, 1.0, 0.82, 0.08)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.14, 0.15, 0.5, 0.09, Z)
    cuboid_1 = abstraction_9(0.08, 0.07, 0.51, cuboid_0, 0.5, 0.0, 0.48, 0.82, 0.97)

`;

const baselineInitialTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.27, 0.89, True)
    cuboid_0 = Cuboid(0.89, 0.08, 0.89, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(0.85, 1.2, 0.83, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.12, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.12, 1.2, 0.83, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.07, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.62, 0.06, 0.06, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.89, 0.13, 0.05)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 1.2, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.44, 0.07)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.06, 0.61, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.44, 0.12, 1.0)

`;

const baselineTargetTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.37, 0.9, 0.8, True)
    cuboid_0 = Cuboid(1.37, 0.19, 0.8, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.37, 0.74, 0.8, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.16, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.14, 0.74, 0.8, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.05, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.1, 0.04, 0.07, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.82, 0.08)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.14, 0.73, 0.15, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.08, 0.07, 0.51, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.48, 0.82, 0.97)

`;

const abstractedInitialTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.57, 0.79, 1.05, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.16, 1.45, 0.66, 1.01, 0.19)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.18, 0.97, 0.07, 0.5, X)
    cuboid_1 = abstraction_9(1.16, 0.08, 0.14, sub_bbox_2, 0.0, 0.5, 0.77, 0.34, 0.5)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.18, 0.14, 0.5, 0.07, Z)
    cuboid_1 = abstraction_9(0.11, 0.12, 0.7, cuboid_0, 0.5, 0.0, 0.47, 0.33, 0.96)

`;

const abstractedTargetTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.41, 0.88, 0.54, True)
    cuboid_0,sub_bbox_1 = abstraction_12(bbox, 0.06, 1.34, 0.83, 0.41, 0.12)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.05, 0.4, 0.02, 0.49, X)
    cuboid_1 = abstraction_9(1.28, 0.02, 0.01, sub_bbox_2, 0.0, 0.5, 0.64, 0.28, 0.52)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.05, 0.06, 0.5, 0.08, Z)
    cuboid_1 = abstraction_9(0.02, 0.02, 0.33, cuboid_0, 0.5, 0.0, 0.63, 0.28, 0.97)

`;

const baselineInitialTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.57, 0.79, 1.05, True)
    cuboid_0 = Cuboid(1.57, 0.16, 1.05, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.45, 0.66, 1.01, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.19, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.18, 0.66, 0.97, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.07, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.16, 0.08, 0.14, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.77, 0.34, 0.5)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.18, 0.63, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.07)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.11, 0.12, 0.7, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.47, 0.33, 0.96)

`;

const baselineTargetTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.41, 0.88, 0.54, True)
    cuboid_0 = Cuboid(1.41, 0.06, 0.54, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.34, 0.83, 0.41, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(sub_bbox_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, 0.12, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.05, 0.83, 0.4, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.02, 0.49)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.28, 0.02, 0.01, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.64, 0.28, 0.52)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.05, 0.83, 0.06, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.02, 0.02, 0.33, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.63, 0.28, 0.97)

`;

const abstractedInitialTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.1, 1.1, 1.1, True)
    cuboid_0,sub_bbox_1 = abstraction_1(bbox, 0.05, 0.72, 0.72, True)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.12, 0.69, 0.08, 0.48, X)
    cuboid_1 = abstraction_17(bbox, 0.69, 0.18, 0.04, 0.52, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.25, 0.91, 0.03)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_17(bbox, 0.04, 0.18, 0.69, 0.15, 0.5)
    cuboid_1 = abstraction_18(bbox, 0.08, 0.08, 0.65, 0.11, Z)

`;

const abstractedTargetTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.36, 0.62, 1.36, True)
    cuboid_0,sub_bbox_1 = abstraction_1(bbox, 0.08, 1.25, 1.25, True)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.04, 1.25, 0.02, 0.5, X)
    cuboid_1 = abstraction_17(bbox, 1.21, 0.43, 0.04, 0.49, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.21, 0.6, 0.02)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_17(bbox, 0.04, 0.43, 1.18, 0.52, 0.5)
    cuboid_1 = abstraction_18(bbox, 0.04, 0.04, 0.5, 0.02, Z)

`;

const baselineInitialTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.1, 1.1, 1.1, True)
    cuboid_0 = Cuboid(1.1, 0.05, 1.1, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(0.72, 1.05, 0.72, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.12, 1.05, 0.69, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.48)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.69, 0.18, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.52, 1.0, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.25, 0.91, 0.03)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.04, 0.18, 0.69, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.15, 1.0, 0.5)
    cuboid_1 = Cuboid(0.08, 1.05, 0.08, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.65, 0.11)
    reflect(cuboid_1, Z)

`;

const baselineTargetTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.36, 0.62, 1.36, True)
    cuboid_0 = Cuboid(1.36, 0.08, 1.36, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.25, 0.54, 1.25, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.04, 0.54, 1.25, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.02, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.21, 0.43, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.49, 1.0, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.21, 0.6, 0.02)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.04, 0.43, 1.18, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.52, 1.0, 0.5)
    cuboid_1 = Cuboid(0.04, 0.54, 0.04, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.5, 0.02)
    reflect(cuboid_1, Z)

`;

const abstractedInitialTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.44, 1.65, 0.44, True)
    cuboid_0,sub_bbox_1 = abstraction_1(bbox, 0.3, 0.43, 0.44, True)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.08, 0.44, 0.1, 0.5, X)
    cuboid_1 = abstraction_9(0.26, 0.09, 0.07, sub_bbox_2, 0.0, 0.5, 0.98, 0.53, 0.08)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.08, 0.1, 0.5, 0.11, Z)
    cuboid_1 = Cuboid(0.07, 0.09, 0.26, True)
    attach(cuboid_1, cuboid_0, 0.57, 0.17, 0.01, 0.5, 0.5, 1.0)

`;

const abstractedTargetTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.83, 0.93, 1.83, True)
    cuboid_0,sub_bbox_1 = abstraction_1(bbox, 0.08, 1.02, 1.0, True)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_18(bbox, 0.09, 0.98, 0.04, 0.49, X)
    cuboid_1 = abstraction_9(0.85, 0.05, 0.05, sub_bbox_2, 0.0, 0.5, 0.97, 0.51, 0.03)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_18(bbox, 0.09, 0.07, 0.5, 0.04, Z)
    cuboid_1 = Cuboid(0.05, 0.07, 0.82, True)
    attach(cuboid_1, cuboid_0, 0.31, 0.38, 0.01, 0.5, 0.5, 1.0)

`;

const baselineInitialTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.44, 1.65, 0.44, True)
    cuboid_0 = Cuboid(0.44, 0.3, 0.44, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(0.43, 1.35, 0.44, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.08, 1.35, 0.44, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.1, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.26, 0.09, 0.07, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.98, 0.53, 0.08)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.08, 1.35, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.11)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.09, 0.26, True)
    attach(cuboid_1, cuboid_0, 0.57, 0.17, 0.01, 0.5, 0.5, 1.0)

`;

const baselineTargetTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.83, 0.93, 1.83, True)
    cuboid_0 = Cuboid(1.83, 0.08, 1.83, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_1 = Cuboid(1.02, 0.85, 1.0, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.09, 0.85, 0.98, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.04, 0.49)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.85, 0.05, 0.05, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.97, 0.51, 0.03)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.09, 0.85, 0.07, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.04)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.07, 0.82, True)
    attach(cuboid_1, cuboid_0, 0.31, 0.38, 0.01, 0.5, 0.5, 1.0)

`;

const abstractedInitialTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.95, 1.74, 0.32, True)
    cuboid_0, cuboid_1 = abstraction_15(bbox, 0.92, 0.07, 0.49, 0.11, 0.06, 0.24, 0.03, 0.61)
    cuboid_2 = abstraction_10(bbox, 0.09, 0.31, 0.95, 0.51)
    cuboid_3 = abstraction_12(bbox, 0.85, 0.06, 0.24, 0.61, cuboid_1, 0.13)
    cuboid_4 = abstraction_9(0.81, 0.09, 0.24, cuboid_1, 0.0, 0.5, 0.5, 0.89, 0.2, 0.5)
    attach(cuboid_4, cuboid_2, 1.0, 0.5, 0.5, 0.06, 0.2, 0.6)
    translate(cuboid_4, Y, 3, 0.59)

`;

const abstractedTargetTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.49, 1.91, 0.38, True)
    cuboid_0, cuboid_1 = abstraction_15(bbox, 0.48, 0.09, 0.49, 0.11, 0.06, 0.29, 0.06, 0.61)
    cuboid_2 = abstraction_10(bbox, 0.07, 0.37, 0.93, 0.51)
    cuboid_3 = abstraction_12(bbox, 0.42, 0.07, 0.29, 0.61, cuboid_1, 0.09)
    cuboid_4 = abstraction_9(0.37, 0.06, 0.29, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.18, 0.49)
    attach(cuboid_4, cuboid_2, 1.0, 0.5, 0.5, 0.01, 0.18, 0.59)
    translate(cuboid_4, Y, 4, 0.7)

`;

const baselineInitialTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.95, 1.74, 0.32, True)
    cuboid_0 = Cuboid(0.92, 1.74, 0.07, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.49, 0.11)
    cuboid_1 = Cuboid(0.06, 1.74, 0.24, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.03, 0.61)
    cuboid_2 = Cuboid(0.09, 1.74, 0.31, True)
    squeeze(cuboid_2, bbox, bbox, bot, 0.95, 0.51)
    cuboid_3 = Cuboid(0.85, 0.06, 0.24, True)
    attach(cuboid_3, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.61)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.13, 0.0, 0.5)
    reflect(cuboid_3, Y)
    cuboid_4 = Cuboid(0.81, 0.09, 0.24, True)
    attach(cuboid_4, cuboid_1, 0.0, 0.5, 0.5, 0.89, 0.2, 0.5)
    attach(cuboid_4, cuboid_2, 1.0, 0.5, 0.5, 0.06, 0.2, 0.6)
    translate(cuboid_4, Y, 3, 0.59)

`;

const baselineTargetTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.49, 1.91, 0.38, True)
    cuboid_0 = Cuboid(0.48, 1.91, 0.09, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.49, 0.11)
    cuboid_1 = Cuboid(0.06, 1.91, 0.29, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.06, 0.61)
    cuboid_2 = Cuboid(0.07, 1.91, 0.37, True)
    squeeze(cuboid_2, bbox, bbox, bot, 0.93, 0.51)
    cuboid_3 = Cuboid(0.42, 0.07, 0.29, True)
    attach(cuboid_3, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.61)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.09, 0.0, 0.5)
    reflect(cuboid_3, Y)
    cuboid_4 = Cuboid(0.37, 0.06, 0.29, True)
    attach(cuboid_4, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.18, 0.49)
    attach(cuboid_4, cuboid_2, 1.0, 0.5, 0.5, 0.01, 0.18, 0.59)
    translate(cuboid_4, Y, 4, 0.7)

`;

const abstractedInitialTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.73, 0.39, True)
    cuboid_0 = abstraction_14(bbox, 0.02, 0.39, 0.01, 0.5)
    cuboid_1 = abstraction_12(bbox, 0.84, 0.02, 0.39, 0.5, cuboid_0, 0.67)
    cuboid_2 = abstraction_9(0.83, 0.02, 0.39, cuboid_0, 0.0, 0.5, 0.5, 0.91, 0.18, 0.5)
    translate(cuboid_2, Y, 5, 0.68)

`;

const abstractedTargetTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.35, 0.25, True)
    cuboid_0 = abstraction_14(bbox, 0.17, 0.24, 0.06, 0.5)
    cuboid_1 = abstraction_12(bbox, 1.11, 0.09, 0.24, 0.5, cuboid_0, 1.0)
    cuboid_2 = abstraction_9(1.12, 0.09, 0.25, cuboid_0, 0.0, 0.5, 0.5, 0.95, 0.24, 0.5)
    translate(cuboid_2, Y, 3, 0.58)

`;

const baselineInitialTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.73, 0.39, True)
    cuboid_0 = Cuboid(0.02, 1.73, 0.39, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.01, 0.5)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.84, 0.02, 0.39, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.0, 0.5, 0.5, 0.67, 0.0, 0.5)
    reflect(cuboid_1, Y)
    cuboid_2 = Cuboid(0.83, 0.02, 0.39, True)
    attach(cuboid_2, cuboid_0, 0.0, 0.5, 0.5, 0.91, 0.18, 0.5)
    translate(cuboid_2, Y, 5, 0.68)

`;

const baselineTargetTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.35, 0.25, True)
    cuboid_0 = Cuboid(0.17, 1.35, 0.24, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.5)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(1.11, 0.09, 0.24, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5)
    reflect(cuboid_1, Y)
    cuboid_2 = Cuboid(1.12, 0.09, 0.25, True)
    attach(cuboid_2, cuboid_0, 0.0, 0.5, 0.5, 0.95, 0.24, 0.5)
    translate(cuboid_2, Y, 3, 0.58)

`;

const abstractedInitialTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.86, 0.22, True)
    cuboid_0 = abstraction_10(bbox, 0.57, 0.05, 0.45, 0.11)
    cuboid_1 = abstraction_14(bbox, 0.08, 0.17, 0.07, 0.61)
    cuboid_2 = abstraction_12(bbox, 0.48, 0.1, 0.17, 0.61, cuboid_1, 1.0)
    cuboid_3 = abstraction_9(0.49, 0.04, 0.17, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.15, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.57, 0.15, 0.99)
    translate(cuboid_3, Y, 7, 0.76)

`;

const abstractedTargetTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.74, 0.53, True)
    cuboid_0 = abstraction_10(bbox, 0.86, 0.08, 0.5, 0.07)
    cuboid_1 = abstraction_14(bbox, 0.06, 0.46, 0.03, 0.57)
    cuboid_2 = abstraction_12(bbox, 0.77, 0.04, 0.46, 0.57, cuboid_1, 0.87)
    cuboid_3 = abstraction_9(0.76, 0.04, 0.45, cuboid_1, 0.0, 0.5, 0.5, 0.96, 0.25, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.25, 0.98)
    translate(cuboid_3, Y, 2, 0.5)

`;

const baselineInitialTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.86, 0.22, True)
    cuboid_0 = Cuboid(0.57, 1.86, 0.05, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.45, 0.11)
    cuboid_1 = Cuboid(0.08, 1.86, 0.17, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.07, 0.61)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.48, 0.1, 0.17, True)
    attach(cuboid_2, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.61)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5)
    reflect(cuboid_2, Y)
    cuboid_3 = Cuboid(0.49, 0.04, 0.17, True)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.15, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.57, 0.15, 0.99)
    translate(cuboid_3, Y, 7, 0.76)

`;

const baselineTargetTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.74, 0.53, True)
    cuboid_0 = Cuboid(0.86, 1.74, 0.08, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.07)
    cuboid_1 = Cuboid(0.06, 1.74, 0.46, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.03, 0.57)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.77, 0.04, 0.46, True)
    attach(cuboid_2, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.57)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.87, 0.0, 0.5)
    reflect(cuboid_2, Y)
    cuboid_3 = Cuboid(0.76, 0.04, 0.45, True)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.96, 0.25, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.25, 0.98)
    translate(cuboid_3, Y, 2, 0.5)

`;

export const abstractedEditingTasks = [
  {
    initial: abstractedInitialTask0,
    target: abstractedTargetTask0,
  },
  {
    initial: abstractedInitialTask1,
    target: abstractedTargetTask1,
  },
  {
    initial: abstractedInitialTask2,
    target: abstractedTargetTask2,
  },
  {
    initial: abstractedInitialTask3,
    target: abstractedTargetTask3,
  },
  {
    initial: abstractedInitialTask4,
    target: abstractedTargetTask4,
  },
  {
    initial: abstractedInitialTask5,
    target: abstractedTargetTask5,
  },
  {
    initial: abstractedInitialTask6,
    target: abstractedTargetTask6,
  },
  {
    initial: abstractedInitialTask7,
    target: abstractedTargetTask7,
  },
  {
    initial: abstractedInitialTask8,
    target: abstractedTargetTask8,
  },
  {
    initial: abstractedInitialTask9,
    target: abstractedTargetTask9,
  },
  {
    initial: abstractedInitialTask10,
    target: abstractedTargetTask10,
  },
  {
    initial: abstractedInitialTask11,
    target: abstractedTargetTask11,
  },
  {
    initial: abstractedInitialTask12,
    target: abstractedTargetTask12,
  },
  {
    initial: abstractedInitialTask13,
    target: abstractedTargetTask13,
  },
  {
    initial: abstractedInitialTask14,
    target: abstractedTargetTask14,
  },
  {
    initial: abstractedInitialTask15,
    target: abstractedTargetTask15,
  },
  {
    initial: abstractedInitialTask16,
    target: abstractedTargetTask16,
  },
  {
    initial: abstractedInitialTask17,
    target: abstractedTargetTask17,
  },
  {
    initial: abstractedInitialTask18,
    target: abstractedTargetTask18,
  },
  {
    initial: abstractedInitialTask19,
    target: abstractedTargetTask19,
  },
  {
    initial: abstractedInitialTask20,
    target: abstractedTargetTask20,
  },
  {
    initial: abstractedInitialTask21,
    target: abstractedTargetTask21,
  },
];

export const baselineEditingTasks = [
  {
    initial: baselineInitialTask0,
    target: baselineTargetTask0,
  },
  {
    initial: baselineInitialTask1,
    target: baselineTargetTask1,
  },
  {
    initial: baselineInitialTask2,
    target: baselineTargetTask2,
  },
  {
    initial: baselineInitialTask3,
    target: baselineTargetTask3,
  },
  {
    initial: baselineInitialTask4,
    target: baselineTargetTask4,
  },
  {
    initial: baselineInitialTask5,
    target: baselineTargetTask5,
  },
  {
    initial: baselineInitialTask6,
    target: baselineTargetTask6,
  },
  {
    initial: baselineInitialTask7,
    target: baselineTargetTask7,
  },
  {
    initial: baselineInitialTask8,
    target: baselineTargetTask8,
  },
  {
    initial: baselineInitialTask9,
    target: baselineTargetTask9,
  },
  {
    initial: baselineInitialTask10,
    target: baselineTargetTask10,
  },
  {
    initial: baselineInitialTask11,
    target: baselineTargetTask11,
  },
  {
    initial: baselineInitialTask12,
    target: baselineTargetTask12,
  },
  {
    initial: baselineInitialTask13,
    target: baselineTargetTask13,
  },
  {
    initial: baselineInitialTask14,
    target: baselineTargetTask14,
  },
  {
    initial: baselineInitialTask15,
    target: baselineTargetTask15,
  },
  {
    initial: baselineInitialTask16,
    target: baselineTargetTask16,
  },
  {
    initial: baselineInitialTask17,
    target: baselineTargetTask17,
  },
  {
    initial: baselineInitialTask18,
    target: baselineTargetTask18,
  },
  {
    initial: baselineInitialTask19,
    target: baselineTargetTask19,
  },
  {
    initial: baselineInitialTask20,
    target: baselineTargetTask20,
  },
  {
    initial: baselineInitialTask21,
    target: baselineTargetTask21,
  },
];
