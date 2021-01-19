// This is the file where the editing tasks for the user are defined.
// An editing task is a JS object with "initial" and "target" fields.
// THIS IS A COMPUTER-GENERATED FILE. DON'T TRY TO EDIT THIS BY HAND.

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

const abstractedInitialTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.55, 0.72, True)
    sub_bbox_1 = abstraction_14(bbox, 0.74, 0.74, 0.57, True, 0.5, 0.6)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.75, 0.1, 0.72, sub_bbox_1, 0.02, 0.6)
    sub_bbox_2 = Cuboid(0.75, 0.72, 0.26, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.18)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = abstraction_13(0.74, bbox, 0.07, 0.57, 0.04, 0.5)
    make_subassembly_3(sub_bbox_3)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.61, 0.04, 0.05, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.93, 0.25, 0.22)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.75, 0.26, bbox, 0.23, 0.09, 0.48, 0.11, 0.09, 0.7)
    translate(cuboid_1, X, 4, 0.82)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = abstraction_13(0.74, bbox, 0.06, 0.06, 0.48, 0.05)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.04, 0.48, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.62, 0.25, 0.76)

`;

const abstractedTargetTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.69, 1.61, 0.69, True)
    sub_bbox_1 = abstraction_14(bbox, 0.64, 1.12, 0.53, True, 0.51, 0.42)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.69, 0.07, 0.69, sub_bbox_1, 0.11, 0.42)
    sub_bbox_2 = Cuboid(0.69, 0.42, 0.07, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = abstraction_13(1.12, bbox, 0.09, 0.53, 0.07, 0.5)
    make_subassembly_3(sub_bbox_3)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.45, 0.08, 0.07, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.99, 0.37, 0.07)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.69, 0.06, bbox, 0.07, 0.07, 0.35, 0.07, 0.09, 0.5)
    translate(cuboid_1, X, 6, 0.81)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = abstraction_13(1.12, bbox, 0.09, 0.08, 0.5, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.08, 0.37, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.4, 0.37, 0.98)

`;

const baselineInitialTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.55, 0.72, True)
    sub_bbox_1 = Cuboid(0.74, 0.74, 0.57, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.6)
    cuboid_1 = Cuboid(0.75, 0.1, 0.72, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.02, 0.6, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.75, 0.72, 0.26, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.18)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = Cuboid(0.07, 0.74, 0.57, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, bbox, bbox, bot, 0.04, 0.5)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.61, 0.04, 0.05, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.93, 0.25, 0.22)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.75, 0.23, 0.26, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.09, 0.48, 0.11, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.09, 0.7)
    translate(cuboid_1, X, 4, 0.82)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.06, 0.74, 0.06, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.48, 0.05)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.04, 0.48, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.62, 0.25, 0.76)

`;

const baselineTargetTask0 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.69, 1.61, 0.69, True)
    sub_bbox_1 = Cuboid(0.64, 1.12, 0.53, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.51, 0.0, 0.42)
    cuboid_1 = Cuboid(0.69, 0.07, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.11, 0.42, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.69, 0.42, 0.07, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = Cuboid(0.09, 1.12, 0.53, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, bbox, bbox, bot, 0.07, 0.5)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.45, 0.08, 0.07, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.99, 0.37, 0.07)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.69, 0.07, 0.06, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.07, 0.35, 0.06, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.09, 0.5)
    translate(cuboid_1, X, 6, 0.81)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.09, 1.12, 0.08, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.08, 0.37, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.4, 0.37, 0.98)

`;

const abstractedInitialTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.71, 1.01, True)
    sub_bbox_1 = abstraction_14(bbox, 0.79, 0.58, 1.01, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.79, 1.01, bbox, 0.28, sub_bbox_1, 0.01, 0.85, 0.22, 0.11)
    sub_bbox_2 = abstraction_17(0.16, 0.34, 0.76, True, cuboid_1, 0.12, 1.0, 0.6)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.12, 0.2, 0.99)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.58, bbox, 0.21, True, 0.11)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.16, 0.76, bbox, 0.11, 0.16, 0.24, 0.16, 0.5, 0.9)

`;

const abstractedTargetTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.06, 1.37, 1.07, True)
    sub_bbox_1 = abstraction_14(bbox, 1.05, 0.39, 1.07, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(1.06, 1.07, bbox, 0.34, sub_bbox_1, 0.0, 0.64, 0.31, 0.15)
    sub_bbox_2 = abstraction_17(0.13, 0.27, 0.74, True, cuboid_1, 0.07, 1.0, 0.64)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.06, 0.22, 1.0)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.39, bbox, 0.22, True, 0.1)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.13, 0.74, bbox, 0.1, 0.11, 0.17, 0.11, 0.42, 0.89)

`;

const baselineInitialTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.71, 1.01, True)
    sub_bbox_1 = Cuboid(0.79, 0.58, 1.01, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.79, 0.28, 1.01, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.79, 0.85, 0.22, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.11)
    sub_bbox_2 = Cuboid(0.16, 0.34, 0.76, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.0, 0.5, 0.12, 1.0, 0.6)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.12, 0.2, 0.99)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.21, 0.58, 0.21, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.126, 0.11)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1995, 0.58, 0.1995, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1197, 0.89)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.16, 0.11, 0.76, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.16, 0.24, 0.16, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.5, 0.9)

`;

const baselineTargetTask1 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.06, 1.37, 1.07, True)
    sub_bbox_1 = Cuboid(1.05, 0.39, 1.07, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(1.06, 0.34, 1.07, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(1.06, 0.64, 0.31, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.15)
    sub_bbox_2 = Cuboid(0.13, 0.27, 0.74, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.0, 0.5, 0.07, 1.0, 0.64)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.06, 0.22, 1.0)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.22, 0.39, 0.22, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.132, 0.1)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.209, 0.39, 0.209, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1254, 0.9)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.13, 0.1, 0.74, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.11, 0.17, 0.11, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.42, 0.89)

`;

const abstractedInitialTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.05, 1.64, 1.06, True)
    sub_bbox_1 = abstraction_15(bbox, 1.05, 0.89, 0.44, True, 0.21)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = Cuboid(0.98, 0.19, 1.06, True)
    attach(cuboid_1, sub_bbox_1, 0.51, 1.0, 0.21, 0.5, 0.0, 0.5)
    sub_bbox_2 = abstraction_8(bbox, 0.97, 0.56, 0.76, cuboid_1, 0.49, 0.64)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.05, 0.44, bbox, 0.12, 0.1, 0.77, 0.1, 0.1, 0.62)
    cuboid_2 = abstraction_8(bbox, 0.1, 0.77, 0.1, cuboid_0, 0.25, 0.47)
    translate(cuboid_2, X, 3, 0.63)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.56, bbox, 0.17, True, 0.12)

`;

const abstractedTargetTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.67, 1.72, 0.59, True)
    sub_bbox_1 = abstraction_15(bbox, 0.67, 1.04, 0.26, True, 0.22)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = Cuboid(0.63, 0.12, 0.57, True)
    attach(cuboid_1, sub_bbox_1, 0.51, 0.98, 0.19, 0.5, 0.0, 0.5)
    sub_bbox_2 = abstraction_8(bbox, 0.62, 0.56, 0.42, cuboid_1, 0.49, 0.63)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.67, 0.26, bbox, 0.37, 0.06, 0.68, 0.06, 0.1, 0.65)
    cuboid_2 = abstraction_8(bbox, 0.06, 0.68, 0.06, cuboid_0, 0.22, 0.49)
    translate(cuboid_2, X, 5, 0.67)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.56, bbox, 0.07, True, 0.08)

`;

const baselineInitialTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.05, 1.64, 1.06, True)
    sub_bbox_1 = Cuboid(1.05, 0.89, 0.44, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.21)
    cuboid_1 = Cuboid(0.98, 0.19, 1.06, True)
    attach(cuboid_1, sub_bbox_1, 0.51, 1.0, 0.21, 0.5, 0.0, 0.5)
    sub_bbox_2 = Cuboid(0.97, 0.56, 0.76, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.49, 0.64)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(1.05, 0.12, 0.44, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.1, 0.77, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.1, 0.62)
    cuboid_2 = Cuboid(0.1, 0.77, 0.1, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.25, 0.47)
    translate(cuboid_2, X, 3, 0.63)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.17, 0.56, 0.17, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.102, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1615, 0.56, 0.1615, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0969, 0.88)
    reflect(cuboid_1, X)

`;

const baselineTargetTask2 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.67, 1.72, 0.59, True)
    sub_bbox_1 = Cuboid(0.67, 1.04, 0.26, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.22)
    cuboid_1 = Cuboid(0.63, 0.12, 0.57, True)
    attach(cuboid_1, sub_bbox_1, 0.51, 0.98, 0.19, 0.5, 0.0, 0.5)
    sub_bbox_2 = Cuboid(0.62, 0.56, 0.42, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.49, 0.63)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.67, 0.37, 0.26, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.06, 0.68, 0.06, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.1, 0.65)
    cuboid_2 = Cuboid(0.06, 0.68, 0.06, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.22, 0.49)
    translate(cuboid_2, X, 5, 0.67)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.07, 0.56, 0.07, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.042, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0665, 0.56, 0.0665, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0399, 0.92)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.14, 1.39, 1.28, True)
    sub_bbox_1 = abstraction_14(bbox, 1.11, 0.23, 1.1, True, 0.5, 0.51)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(1.14, 0.51, 1.12, sub_bbox_1, 0.04, 0.45)
    make_subassembly_2(sub_bbox_2)
    cuboid_2 = Cuboid(0.13, 0.74, 1.21, True)
    attach(cuboid_2, sub_bbox_2, 1.0, 0.5, 0.5, 0.12, 0.95, 0.46)
    reflect(cuboid_2, X)
    cuboid_3 = abstraction_15(bbox, 0.88, 0.99, 0.42, False, 0.16)
    attach(cuboid_3, cuboid_2, 0.0, 0.5, 0.5, 0.94, 0.71, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.09, 0.2, 0.14, False)
    abstraction_10(cuboid_0, bbox, 0.03, 0.04, 0.0, 0.05)
    attach(cuboid_0, bbox, 0.49, 0.0, 0.96, 0.04, 1.0, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.09, 0.15, 0.15, True)
    abstraction_10(cuboid_1, bbox, 0.5, 0.04, 0.01, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 1.14, 0.12, 1.08, True, 0.5, 0.48)
    cuboid_1 = Cuboid(0.88, 0.39, 0.86, True)
    squeeze(cuboid_1, cuboid_0, bbox, bot, 0.5, 0.63)

`;

const abstractedTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.4, 1.28, 1.16, True)
    sub_bbox_1 = abstraction_14(bbox, 1.37, 0.21, 1.01, True, 0.5, 0.51)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(1.4, 0.47, 1.02, sub_bbox_1, 0.04, 0.46)
    make_subassembly_2(sub_bbox_2)
    cuboid_2 = Cuboid(0.12, 0.71, 1.09, True)
    attach(cuboid_2, sub_bbox_2, 0.01, 0.19, 0.53, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    cuboid_3 = abstraction_15(bbox, 1.16, 0.91, 0.38, False, 0.16)
    attach(cuboid_3, cuboid_2, 0.0, 0.5, 0.5, 1.0, 0.7, 0.18)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.08, 0.18, 0.13, False)
    abstraction_10(cuboid_0, bbox, 0.02, 0.03, 0.0, 0.05)
    attach(cuboid_0, bbox, 0.49, 0.0, 0.97, 0.03, 1.0, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.08, 0.14, 0.14, True)
    abstraction_10(cuboid_1, bbox, 0.5, 0.03, 0.01, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 1.4, 0.11, 0.99, True, 0.5, 0.48)
    cuboid_1 = Cuboid(1.16, 0.36, 0.8, True)
    squeeze(cuboid_1, cuboid_0, bbox, bot, 0.5, 0.62)

`;

const baselineInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.14, 1.39, 1.28, True)
    sub_bbox_1 = Cuboid(1.11, 0.23, 1.1, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.51)
    sub_bbox_2 = Cuboid(1.14, 0.51, 1.12, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.04, 0.45, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.13, 0.74, 1.21, True)
    attach(cuboid_2, sub_bbox_2, 1.0, 0.5, 0.5, 0.12, 0.95, 0.46)
    reflect(cuboid_2, X)
    cuboid_3 = Cuboid(0.88, 0.99, 0.42, False)
    attach(cuboid_3, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.16)
    attach(cuboid_3, cuboid_2, 0.0, 0.5, 0.5, 0.94, 0.71, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.09, 0.2, 0.14, False)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.03, 0.04, 1.0, 0.05)
    attach(cuboid_0, bbox, 0.49, 0.0, 0.96, 0.04, 0.0, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.09, 0.15, 0.15, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.04, 0.99, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.14, 0.12, 1.08, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.48)
    cuboid_1 = Cuboid(0.88, 0.39, 0.86, True)
    squeeze(cuboid_1, cuboid_0, bbox, bot, 0.5, 0.63)

`;

const baselineTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.4, 1.28, 1.16, True)
    sub_bbox_1 = Cuboid(1.37, 0.21, 1.01, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.51)
    sub_bbox_2 = Cuboid(1.4, 0.47, 1.02, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.04, 0.46, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.12, 0.71, 1.09, True)
    attach(cuboid_2, sub_bbox_2, 0.01, 0.19, 0.53, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    cuboid_3 = Cuboid(1.16, 0.91, 0.38, False)
    attach(cuboid_3, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.16)
    attach(cuboid_3, cuboid_2, 0.0, 0.5, 0.5, 1.0, 0.7, 0.18)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.08, 0.18, 0.13, False)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.02, 0.03, 1.0, 0.05)
    attach(cuboid_0, bbox, 0.49, 0.0, 0.97, 0.03, 0.0, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.08, 0.14, 0.14, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.03, 0.99, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.4, 0.11, 0.99, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.48)
    cuboid_1 = Cuboid(1.16, 0.36, 0.8, True)
    squeeze(cuboid_1, cuboid_0, bbox, bot, 0.5, 0.62)

`;

const abstractedInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.75, 0.36, True)
    sub_bbox_1 = abstraction_14(bbox, 0.78, 0.67, 0.35, True, 0.5, 0.48)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.79, 0.36, bbox, 0.14, sub_bbox_1, 0.04, 0.95, 0.08, 0.12)
    sub_bbox_2 = abstraction_17(0.16, 0.3, 0.28, True, cuboid_1, 0.11, 0.92, 0.62)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.11, 0.15, 0.96)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.67, bbox, 0.1, True, 0.1)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.13, 0.13, 0.27, True, 0.48)
    cuboid_1 = abstraction_14(bbox, 0.15, 0.2, 0.07, False, 0.5, 0.85)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.53, 0.31, 0.88)

`;

const abstractedTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.86, 1.71, 0.89, True)
    sub_bbox_1 = abstraction_14(bbox, 0.86, 0.43, 0.86, True, 0.5, 0.48)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.86, 0.89, bbox, 0.14, sub_bbox_1, 0.02, 1.14, 0.11, 0.06)
    sub_bbox_2 = abstraction_17(0.11, 0.37, 0.78, True, cuboid_1, 0.07, 0.66, 0.58)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.06, 0.13, 0.96)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.43, bbox, 0.11, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.1, 0.12, 0.73, True, 0.47)
    cuboid_1 = abstraction_14(bbox, 0.11, 0.33, 0.12, False, 0.5, 0.92)
    attach(cuboid_1, cuboid_0, 0.44, 0.93, 0.85, 0.5, 0.5, 1.0)

`;

const baselineInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.75, 0.36, True)
    sub_bbox_1 = Cuboid(0.78, 0.67, 0.35, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.48)
    cuboid_1 = Cuboid(0.79, 0.14, 0.36, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.04, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.79, 0.95, 0.08, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.12)
    sub_bbox_2 = Cuboid(0.16, 0.3, 0.28, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.0, 0.5, 0.11, 0.92, 0.62)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.11, 0.15, 0.96)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.67, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.1)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.67, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.9)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.13, 0.13, 0.27, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.48)
    cuboid_1 = Cuboid(0.15, 0.2, 0.07, False)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.85)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.53, 0.31, 0.88)

`;

const baselineTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.86, 1.71, 0.89, True)
    sub_bbox_1 = Cuboid(0.86, 0.43, 0.86, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.48)
    cuboid_1 = Cuboid(0.86, 0.14, 0.89, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.02, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.86, 1.14, 0.11, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.06)
    sub_bbox_2 = Cuboid(0.11, 0.37, 0.78, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.0, 0.5, 0.07, 0.66, 0.58)
    attach(sub_bbox_2, cuboid_2, 0.5, 0.5, 0.0, 0.06, 0.13, 0.96)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.11, 0.43, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.066, 0.06)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1045, 0.43, 0.1045, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0627, 0.94)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 0.12, 0.73, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.47)
    cuboid_1 = Cuboid(0.11, 0.33, 0.12, False)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.92)
    attach(cuboid_1, cuboid_0, 0.44, 0.93, 0.85, 0.5, 0.5, 1.0)

`;

const abstractedInitialTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.4, 1.21, True)
    sub_bbox_1 = abstraction_14(bbox, 0.85, 0.62, 0.85, True, 0.52, 0.57)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(1.03, 0.15, 1.21, sub_bbox_1, 0.02, 0.57)
    sub_bbox_2 = Cuboid(1.03, 0.64, 0.38, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.16)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.62, bbox, 0.11, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.03, 0.38, bbox, 0.17, 0.08, 0.46, 0.08, 0.09, 0.76)
    reflect(cuboid_1, X)
    cuboid_2 = abstraction_8(bbox, 0.08, 0.46, 0.08, cuboid_0, 0.22, 0.49)
    translate(cuboid_2, X, 4, 0.57)

`;

const abstractedTargetTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.74, 1.73, 0.93, True)
    sub_bbox_1 = abstraction_14(bbox, 0.67, 0.53, 0.81, True, 0.5, 0.54)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.67, 0.13, 0.93, sub_bbox_1, 0.0, 0.54)
    sub_bbox_2 = Cuboid(0.74, 1.07, 0.29, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.51, 0.16)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.53, bbox, 0.11, True, 0.04)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.74, 0.29, bbox, 0.13, 0.05, 0.95, 0.05, 0.11, 0.6)
    reflect(cuboid_1, X)
    cuboid_2 = abstraction_8(bbox, 0.05, 0.95, 0.05, cuboid_0, 0.23, 0.43)
    translate(cuboid_2, X, 3, 0.49)

`;

const baselineInitialTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.4, 1.21, True)
    sub_bbox_1 = Cuboid(0.85, 0.62, 0.85, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.52, 0.0, 0.57)
    cuboid_1 = Cuboid(1.03, 0.15, 1.21, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.02, 0.57, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(1.03, 0.64, 0.38, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.16)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.11, 0.62, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.066, 0.06)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1045, 0.62, 0.1045, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0627, 0.94)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.03, 0.17, 0.38, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.08, 0.46, 0.08, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.09, 0.76)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.08, 0.46, 0.08, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.22, 0.49)
    translate(cuboid_2, X, 4, 0.57)

`;

const baselineTargetTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.74, 1.73, 0.93, True)
    sub_bbox_1 = Cuboid(0.67, 0.53, 0.81, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.54)
    cuboid_1 = Cuboid(0.67, 0.13, 0.93, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.54, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.74, 1.07, 0.29, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.51, 0.16)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.11, 0.53, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.066, 0.04)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1045, 0.53, 0.1045, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0627, 0.96)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.74, 0.13, 0.29, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.05, 0.95, 0.05, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.11, 0.6)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.05, 0.95, 0.05, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.23, 0.43)
    translate(cuboid_2, X, 3, 0.49)

`;

const abstractedInitialTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.69, 1.84, 0.69, True)
    sub_bbox_1 = abstraction_14(bbox, 0.69, 0.72, 0.69, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.69, 0.69, bbox, 0.12, sub_bbox_1, 0.05, 1.0, 0.08, 0.06)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.72, bbox, 0.09, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.68, 0.23, 0.07, True, 0.42)
    cuboid_1 = abstraction_14(bbox, 0.14, 0.81, 0.08, True, 0.1, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.1, 0.17, 0.6)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.41, 0.1, 0.04, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.99, 0.36, 0.4)
    translate(cuboid_2, Y, 2, 0.35)

`;

const abstractedTargetTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.65, 0.71, True)
    sub_bbox_1 = abstraction_14(bbox, 0.7, 0.66, 0.7, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.71, 0.71, bbox, 0.11, sub_bbox_1, 0.03, 0.89, 0.06, 0.04)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.66, bbox, 0.06, True, 0.05)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.7, 0.26, 0.05, True, 0.49)
    cuboid_1 = abstraction_14(bbox, 0.1, 0.66, 0.06, True, 0.07, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.07, 0.11, 0.5)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.51, 0.05, 0.05, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.23, 0.48)
    translate(cuboid_2, Y, 2, 0.4)

`;

const baselineInitialTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.69, 1.84, 0.69, True)
    sub_bbox_1 = Cuboid(0.69, 0.72, 0.69, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.69, 0.12, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.05, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.69, 1.0, 0.08, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.09, 0.72, 0.09, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.054, 0.06)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0855, 0.72, 0.0855, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0513, 0.94)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.68, 0.23, 0.07, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.42)
    cuboid_1 = Cuboid(0.14, 0.81, 0.08, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.1, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.1, 0.17, 0.6)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.41, 0.1, 0.04, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.99, 0.36, 0.4)
    translate(cuboid_2, Y, 2, 0.35)

`;

const baselineTargetTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.65, 0.71, True)
    sub_bbox_1 = Cuboid(0.7, 0.66, 0.7, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.71, 0.11, 0.71, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.71, 0.89, 0.06, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.04)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.06, 0.66, 0.06, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.036, 0.05)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.057, 0.66, 0.057, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0342, 0.95)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.7, 0.26, 0.05, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.49)
    cuboid_1 = Cuboid(0.1, 0.66, 0.05, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.07, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.07, 0.11, 0.5)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.51, 0.05, 0.05, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.23, 0.48)
    translate(cuboid_2, Y, 2, 0.4)

`;

const abstractedInitialTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.76, 0.6, True)
    sub_bbox_1 = abstraction_14(bbox, 0.59, 0.65, 0.59, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.6, 0.6, bbox, 0.16, sub_bbox_1, 0.03, 0.96, 0.1, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(0.65, bbox, 0.11, 0.59, 0.09, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.37, 0.06, 0.06, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.24, 0.51)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(0.65, bbox, 0.1, 0.11, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.1, 0.07, 0.44, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.24, 0.67)

`;

const abstractedTargetTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.65, 0.88, True)
    sub_bbox_1 = abstraction_14(bbox, 0.89, 0.85, 0.88, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.89, 0.88, bbox, 0.09, sub_bbox_1, 0.06, 0.71, 0.11, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(0.85, bbox, 0.14, 0.88, 0.08, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.6, 0.11, 0.12, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.99, 0.58, 0.5)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(0.85, bbox, 0.11, 0.13, 0.41, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.13, 0.13, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.64, 0.58, 0.84)

`;

const baselineInitialTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.76, 0.6, True)
    sub_bbox_1 = Cuboid(0.59, 0.65, 0.59, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.6, 0.16, 0.6, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.6, 0.96, 0.1, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.11, 0.65, 0.59, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.09, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.37, 0.06, 0.06, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.24, 0.51)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 0.65, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.1, 0.07, 0.44, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.52, 0.24, 0.67)

`;

const baselineTargetTask7 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.65, 0.88, True)
    sub_bbox_1 = Cuboid(0.89, 0.85, 0.88, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.89, 0.09, 0.88, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.06, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.89, 0.71, 0.11, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.14, 0.85, 0.88, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.6, 0.11, 0.12, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.99, 0.58, 0.5)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.11, 0.85, 0.13, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.41, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.13, 0.13, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.64, 0.58, 0.84)

`;

const abstractedInitialTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.16, 1.32, 1.25, True)
    sub_bbox_1 = abstraction_14(bbox, 1.14, 0.13, 1.02, True, 0.5, 0.57)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_17(0.2, 0.91, 0.88, True, sub_bbox_1, 0.08, 1.0, 0.58)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.82, 0.56, 0.86, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.82, 0.33, 0.52)
    cuboid_3 = abstraction_15(bbox, 1.1, 1.17, 0.3, False, 0.12)
    attach(cuboid_3, cuboid_1, 0.07, 0.38, 0.8, 0.5, 0.5, 0.0)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.13, bbox, 0.14, True, 0.08)

`;

const abstractedTargetTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.22, 1.21, 1.44, True)
    sub_bbox_1 = abstraction_14(bbox, 1.22, 0.09, 1.14, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_17(0.15, 0.99, 1.35, True, sub_bbox_1, 0.06, 0.99, 0.51)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.94, 0.2, 1.18, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.22, 0.56)
    cuboid_3 = abstraction_15(bbox, 0.93, 1.01, 0.32, False, 0.11)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.6, 0.11)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.09, bbox, 0.12, True, 0.04)

`;

const baselineInitialTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.16, 1.32, 1.25, True)
    sub_bbox_1 = Cuboid(1.14, 0.13, 1.02, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.57)
    cuboid_1 = Cuboid(0.2, 0.91, 0.88, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.08, 1.0, 0.58)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.82, 0.56, 0.86, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.82, 0.33, 0.52)
    cuboid_3 = Cuboid(1.1, 1.17, 0.3, False)
    attach(cuboid_3, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.12)
    attach(cuboid_3, cuboid_1, 0.07, 0.38, 0.8, 0.5, 0.5, 0.0)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.13, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.13, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.92)
    reflect(cuboid_1, X)

`;

const baselineTargetTask8 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.22, 1.21, 1.44, True)
    sub_bbox_1 = Cuboid(1.22, 0.09, 1.14, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.15, 0.99, 1.35, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.06, 0.99, 0.51)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.94, 0.2, 1.18, True)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.22, 0.56)
    cuboid_3 = Cuboid(0.93, 1.01, 0.32, False)
    attach(cuboid_3, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.11)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.97, 0.6, 0.11)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.12, 0.09, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.072, 0.04)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.114, 0.09, 0.114, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0684, 0.96)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.53, 1.05, True)
    sub_bbox_1 = abstraction_14(bbox, 0.84, 0.42, 1.01, True, 0.5, 0.51)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.87, 1.05, bbox, 0.45, sub_bbox_1, 0.0, 0.66, 0.29, 0.14)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(0.42, bbox, 0.05, 1.01, 0.03, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(0.42, bbox, 0.05, 0.04, 0.5, 0.02)
    reflect(cuboid_0, Z)
    cuboid_1 = abstraction_14(bbox, 0.05, 0.04, 0.93, True, 0.5, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.05, 0.93)

`;

const abstractedTargetTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.83, 1.56, 0.78, True)
    sub_bbox_1 = abstraction_14(bbox, 0.83, 0.7, 0.78, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.83, 0.78, bbox, 0.11, sub_bbox_1, 0.22, 0.77, 0.08, 0.05)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(0.7, bbox, 0.08, 0.78, 0.05, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(0.7, bbox, 0.08, 0.09, 0.5, 0.06)
    reflect(cuboid_0, Z)
    cuboid_1 = abstraction_14(bbox, 0.07, 0.08, 0.58, True, 0.48, 0.49)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.46, 0.06, 0.94)

`;

const baselineInitialTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.53, 1.05, True)
    sub_bbox_1 = Cuboid(0.84, 0.42, 1.01, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.51)
    cuboid_1 = Cuboid(0.87, 0.45, 1.05, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.87, 0.66, 0.29, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.14)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.05, 0.42, 1.01, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.03, 0.5)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.05, 0.42, 0.04, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.02)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.05, 0.04, 0.93, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.05, 0.93)

`;

const baselineTargetTask9 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.83, 1.56, 0.78, True)
    sub_bbox_1 = Cuboid(0.83, 0.7, 0.78, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.83, 0.11, 0.78, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.22, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.83, 0.77, 0.08, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.05)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.08, 0.7, 0.78, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.05, 0.5)
    reflect(sub_bbox_2, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.08, 0.7, 0.09, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.06)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.08, 0.58, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.48, 0.0, 0.49)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.46, 0.06, 0.94)

`;

const abstractedInitialTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.15, 1.19, True)
    sub_bbox_1 = abstraction_14(bbox, 1.13, 0.08, 0.94, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(1.34, 0.64, 1.19, sub_bbox_1, 0.0, 0.5)
    sub_bbox_2 = Cuboid(1.15, 0.42, 0.32, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.14)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.08, bbox, 0.12, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.15, 0.31, bbox, 0.32, 0.08, 0.11, 0.08, 0.1, 0.5)
    reflect(cuboid_1, X)

`;

const abstractedTargetTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.65, 0.82, True)
    sub_bbox_1 = abstraction_14(bbox, 0.73, 0.71, 0.63, True, 0.49, 0.51)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.82, 0.09, 0.82, sub_bbox_1, 0.0, 0.51)
    sub_bbox_2 = Cuboid(0.75, 0.85, 0.14, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.49, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.71, bbox, 0.09, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.75, 0.14, bbox, 0.19, 0.08, 0.65, 0.1, 0.15, 0.44)
    reflect(cuboid_1, X)

`;

const baselineInitialTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.15, 1.19, True)
    sub_bbox_1 = Cuboid(1.13, 0.08, 0.94, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(1.34, 0.64, 1.19, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(1.15, 0.42, 0.32, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.14)

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
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.08, 0.11, 0.08, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.1, 0.5)
    reflect(cuboid_1, X)

`;

const baselineTargetTask10 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.65, 0.82, True)
    sub_bbox_1 = Cuboid(0.73, 0.71, 0.63, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.49, 0.0, 0.51)
    cuboid_1 = Cuboid(0.82, 0.09, 0.82, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.51, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.75, 0.85, 0.14, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.49, 0.19)

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
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.08, 0.65, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.15, 0.44)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.64, 0.9, True)
    sub_bbox_1 = abstraction_14(bbox, 0.89, 0.61, 0.9, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_15(bbox, 0.89, 1.0, 0.23, True, 0.14)
    cuboid_2 = abstraction_17(0.23, 0.67, 0.7, True, sub_bbox_1, 0.14, 0.96, 0.61)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.13, 0.28, 0.83)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.88, 0.17, 0.88, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.01, 0.11, 0.37)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.01)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.61, bbox, 0.22, True, 0.12)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.88, 0.07, 0.86, True, 0.5, 0.49)
    cuboid_1 = abstraction_16(bbox, 0.43, 0.15, 0.66, True, cuboid_0, 0.41, 0.64, 0.63)

`;

const abstractedTargetTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.25, 1.31, True)
    sub_bbox_1 = abstraction_14(bbox, 1.1, 0.22, 1.24, True, 0.49, 0.48)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_15(bbox, 1.04, 1.04, 0.17, True, 0.06)
    cuboid_2 = abstraction_17(0.23, 0.78, 1.28, True, sub_bbox_1, 0.0, 0.98, 0.52)
    attach(cuboid_2, cuboid_1, 0.64, 0.66, 0.06, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.99, 0.31, 1.17, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.74, 0.15, 0.56)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.11, 0.85)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.22, bbox, 0.13, True, 0.05)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.97, 0.25, 1.15, True, 0.51, 0.49)
    cuboid_1 = abstraction_16(bbox, 0.99, 0.12, 1.14, True, cuboid_0, 0.75, 0.52, 0.51)

`;

const baselineInitialTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.89, 1.64, 0.9, True)
    sub_bbox_1 = Cuboid(0.89, 0.61, 0.9, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.89, 1.0, 0.23, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.14)
    cuboid_2 = Cuboid(0.23, 0.67, 0.7, True)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.0, 0.5, 0.14, 0.96, 0.61)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.13, 0.28, 0.83)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.88, 0.17, 0.88, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.01, 0.11, 0.37)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.01)

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
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.49)
    cuboid_1 = Cuboid(0.43, 0.15, 0.66, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.5, 0.41, 0.64)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.63)

`;

const baselineTargetTask11 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.34, 1.25, 1.31, True)
    sub_bbox_1 = Cuboid(1.1, 0.22, 1.24, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.49, 0.0, 0.48)
    cuboid_1 = Cuboid(1.04, 1.04, 0.17, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.06)
    cuboid_2 = Cuboid(0.23, 0.78, 1.28, True)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.0, 0.5, 0.0, 0.98, 0.52)
    attach(cuboid_2, cuboid_1, 0.64, 0.66, 0.06, 0.0, 0.5, 0.5)
    reflect(cuboid_2, X)
    sub_bbox_2 = Cuboid(0.99, 0.31, 1.17, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, cuboid_2, 0.0, 0.5, 0.5, 0.74, 0.15, 0.56)
    attach(sub_bbox_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.11, 0.85)

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
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.51, 0.0, 0.49)
    cuboid_1 = Cuboid(0.99, 0.12, 1.14, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.5, 0.75, 0.52)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.51)

`;

const abstractedInitialTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.15, 1.78, 0.64, True)
    sub_bbox_1 = abstraction_14(bbox, 1.15, 0.64, 0.63, True, 0.5, 0.51)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_15(bbox, 1.14, 1.14, 0.06, True, 0.04)
    cuboid_2 = Cuboid(1.14, 0.07, 0.62, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.4)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.27, 0.49, 0.5, 1.0, 0.5)
    cuboid_3 = abstraction_17(0.02, 0.06, 0.58, True, cuboid_2, 0.01, 1.0, 0.52)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.01, 0.08, 0.99)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.64, bbox, 0.14, True, 0.08)

`;

const abstractedTargetTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.94, 1.24, 0.95, True)
    sub_bbox_1 = abstraction_14(bbox, 0.94, 0.59, 0.95, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_15(bbox, 0.94, 0.67, 0.12, True, 0.07)
    cuboid_2 = Cuboid(0.94, 0.2, 0.82, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.17, 1.0)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.08, 0.42, 0.5, 1.0, 0.5)
    cuboid_3 = abstraction_17(0.1, 0.31, 0.82, True, cuboid_2, 0.06, 1.0, 0.5)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.05, 0.55, 0.97)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.59, bbox, 0.1, True, 0.05)

`;

const baselineInitialTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.15, 1.78, 0.64, True)
    sub_bbox_1 = Cuboid(1.15, 0.64, 0.63, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.51)
    cuboid_1 = Cuboid(1.14, 1.14, 0.06, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.04)
    cuboid_2 = Cuboid(1.14, 0.07, 0.62, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.02, 0.4)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.27, 0.49, 0.5, 1.0, 0.5)
    cuboid_3 = Cuboid(0.02, 0.06, 0.58, True)
    attach(cuboid_3, cuboid_2, 0.5, 0.0, 0.5, 0.01, 1.0, 0.52)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.01, 0.08, 0.99)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.64, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.64, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.92)
    reflect(cuboid_1, X)

`;

const baselineTargetTask12 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.94, 1.24, 0.95, True)
    sub_bbox_1 = Cuboid(0.94, 0.59, 0.95, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.94, 0.67, 0.12, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.07)
    cuboid_2 = Cuboid(0.94, 0.2, 0.82, True)
    attach(cuboid_2, cuboid_1, 0.5, 0.5, 0.0, 0.5, 0.17, 1.0)
    attach(cuboid_2, sub_bbox_1, 0.5, 0.08, 0.42, 0.5, 1.0, 0.5)
    cuboid_3 = Cuboid(0.1, 0.31, 0.82, True)
    attach(cuboid_3, cuboid_2, 0.5, 0.0, 0.5, 0.06, 1.0, 0.5)
    attach(cuboid_3, cuboid_1, 0.5, 0.5, 0.0, 0.05, 0.55, 0.97)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.59, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.05)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.59, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.95)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.48, 1.04, True)
    sub_bbox_1 = abstraction_15(bbox, 1.02, 0.88, 0.24, True, 0.11)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = Cuboid(1.02, 0.1, 1.02, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.5, 0.0, 0.5, 0.0, 0.1)
    sub_bbox_2 = abstraction_8(bbox, 1.03, 0.55, 1.01, cuboid_1, 0.5, 0.5)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.02, 0.24, bbox, 0.14, 0.2, 0.71, 0.19, 0.09, 0.49)
    translate(cuboid_1, X, 2, 0.81)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.55, bbox, 0.26, True, 0.12)

`;

const abstractedTargetTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.58, 1.75, 0.69, True)
    sub_bbox_1 = abstraction_15(bbox, 0.56, 1.03, 0.24, True, 0.32)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = Cuboid(0.56, 0.07, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 1.0, 0.5, 0.47, 0.0, 1.0)
    sub_bbox_2 = abstraction_8(bbox, 0.56, 0.65, 0.49, cuboid_1, 0.49, 0.64)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.56, 0.24, bbox, 0.2, 0.04, 0.83, 0.04, 0.14, 0.47)
    translate(cuboid_1, X, 3, 0.66)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.65, bbox, 0.1, True, 0.09)

`;

const baselineInitialTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.48, 1.04, True)
    sub_bbox_1 = Cuboid(1.02, 0.88, 0.24, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.11)
    cuboid_1 = Cuboid(1.02, 0.1, 1.02, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.5, 0.0, 0.5, 0.0, 0.1)
    sub_bbox_2 = Cuboid(1.03, 0.55, 1.01, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.5, 0.5)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(1.02, 0.14, 0.24, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
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

const baselineTargetTask13 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.58, 1.75, 0.69, True)
    sub_bbox_1 = Cuboid(0.56, 1.03, 0.24, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.32)
    cuboid_1 = Cuboid(0.56, 0.07, 0.69, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 1.0, 0.5, 0.47, 0.0, 1.0)
    sub_bbox_2 = Cuboid(0.56, 0.65, 0.49, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, cuboid_1, bot, 0.49, 0.64)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.56, 0.2, 0.24, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
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

const abstractedInitialTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.95, 1.63, 0.93, True)
    sub_bbox_1 = abstraction_14(bbox, 0.77, 0.66, 0.63, True, 0.5, 0.57)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(0.93, 0.21, 0.93, sub_bbox_1, 0.02, 0.57)
    make_subassembly_2(sub_bbox_2)
    sub_bbox_3 = Cuboid(0.95, 0.76, 0.29, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, sub_bbox_2, bbox, bot, 0.5, 0.23)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.66, bbox, 0.12, True, 0.09)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.93, 0.93, bbox, 0.02, 0.92, 0.19, 0.92, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.95, 0.29, bbox, 0.45, 0.1, 0.31, 0.11, 0.16, 0.51)
    translate(cuboid_1, X, 3, 0.67)

`;

const abstractedTargetTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.7, 0.71, True)
    sub_bbox_1 = abstraction_14(bbox, 0.53, 0.64, 0.61, True, 0.54, 0.56)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(0.58, 0.1, 0.71, sub_bbox_1, 0.02, 0.56)
    make_subassembly_2(sub_bbox_2)
    sub_bbox_3 = Cuboid(0.58, 0.97, 0.17, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, sub_bbox_2, bbox, bot, 0.48, 0.11)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.63, bbox, 0.06, True, 0.04)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.58, 0.71, bbox, 0.04, 0.58, 0.07, 0.71, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.58, 0.17, bbox, 0.27, 0.05, 0.7, 0.05, 0.12, 0.68)
    translate(cuboid_1, X, 4, 0.77)

`;

const baselineInitialTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.95, 1.63, 0.93, True)
    sub_bbox_1 = Cuboid(0.77, 0.66, 0.63, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.57)
    sub_bbox_2 = Cuboid(0.93, 0.21, 0.93, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.02, 0.57, 0.5, 1.0, 0.5)
    sub_bbox_3 = Cuboid(0.95, 0.76, 0.29, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, sub_bbox_2, bbox, bot, 0.5, 0.23)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.12, 0.66, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.072, 0.09)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.114, 0.66, 0.114, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0684, 0.91)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.93, 0.02, 0.93, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.92, 0.19, 0.92, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.95, 0.45, 0.29, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.1, 0.31, 0.11, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.16, 0.51)
    translate(cuboid_1, X, 3, 0.67)

`;

const baselineTargetTask14 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.6, 1.7, 0.71, True)
    sub_bbox_1 = Cuboid(0.53, 0.64, 0.61, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.54, 0.0, 0.56)
    sub_bbox_2 = Cuboid(0.58, 0.1, 0.71, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.02, 0.56, 0.5, 1.0, 0.5)
    sub_bbox_3 = Cuboid(0.58, 0.97, 0.17, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, sub_bbox_2, bbox, bot, 0.48, 0.11)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.06, 0.63, 0.06, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.036, 0.04)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.057, 0.63, 0.057, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0342, 0.96)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.58, 0.04, 0.71, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.58, 0.07, 0.71, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.58, 0.27, 0.17, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.05, 0.7, 0.05, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.12, 0.68)
    translate(cuboid_1, X, 4, 0.77)

`;

const abstractedInitialTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.05, 1.57, 0.91, True)
    sub_bbox_1 = abstraction_14(bbox, 1.04, 0.4, 0.76, True, 0.5, 0.58)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(1.05, 0.12, 0.91, sub_bbox_1, 0.03, 0.58)
    sub_bbox_2 = Cuboid(1.05, 1.06, 0.33, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.4, bbox, 0.14, True, 0.09)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.05, 0.33, bbox, 0.28, 0.12, 0.78, 0.12, 0.11, 0.62)
    cuboid_2 = abstraction_8(bbox, 0.12, 0.78, 0.12, cuboid_0, 0.25, 0.43)
    translate(cuboid_2, X, 4, 0.6)

`;

const abstractedTargetTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.63, 0.85, True)
    sub_bbox_1 = abstraction_14(bbox, 0.55, 0.7, 0.64, True, 0.52, 0.58)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.68, 0.11, 0.83, sub_bbox_1, 0.0, 0.57)
    sub_bbox_2 = Cuboid(0.7, 0.82, 0.29, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.48, 0.17)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.7, bbox, 0.1, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.7, 0.29, bbox, 0.17, 0.05, 0.66, 0.05, 0.19, 0.7)
    cuboid_2 = abstraction_8(bbox, 0.05, 0.66, 0.05, cuboid_0, 0.4, 0.39)
    translate(cuboid_2, X, 2, 0.45)

`;

const baselineInitialTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.05, 1.57, 0.91, True)
    sub_bbox_1 = Cuboid(1.04, 0.4, 0.76, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.58)
    cuboid_1 = Cuboid(1.05, 0.12, 0.91, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.58, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(1.05, 1.06, 0.33, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.4, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.09)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.4, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.91)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.05, 0.28, 0.33, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.12, 0.78, 0.12, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.11, 0.62)
    cuboid_2 = Cuboid(0.12, 0.78, 0.12, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.25, 0.43)
    translate(cuboid_2, X, 4, 0.6)

`;

const baselineTargetTask15 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.63, 0.85, True)
    sub_bbox_1 = Cuboid(0.55, 0.7, 0.64, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.52, 0.0, 0.58)
    cuboid_1 = Cuboid(0.68, 0.11, 0.83, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.57, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.7, 0.82, 0.29, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.48, 0.17)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.1, 0.7, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.06)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.095, 0.7, 0.095, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.057, 0.94)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.7, 0.17, 0.29, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.05, 0.66, 0.05, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.19, 0.7)
    cuboid_2 = Cuboid(0.05, 0.66, 0.05, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.4, 0.39)
    translate(cuboid_2, X, 2, 0.45)

`;

const abstractedInitialTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.83, 1.6, 0.74, True)
    sub_bbox_1 = abstraction_14(bbox, 0.74, 1.0, 0.74, True, 0.51, 0.5)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(0.74, 0.18, 0.74, sub_bbox_1, 0.04, 0.5)
    make_subassembly_2(sub_bbox_2)
    cuboid_2 = abstraction_16(bbox, 0.83, 0.47, 0.08, True, sub_bbox_2, 0.72, 0.05, 0.05)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = abstraction_13(1.0, bbox, 0.14, 0.74, 0.09, 0.5)
    make_subassembly_3(sub_bbox_3)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.51, 0.12, 0.09, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.98, 0.37, 0.06)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.74, 0.74, bbox, 0.02, 0.74, 0.16, 0.74, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = abstraction_13(1.0, bbox, 0.14, 0.12, 0.5, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.09, 0.1, 0.5, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.35, 0.37, 1.0)

`;

const abstractedTargetTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.67, 1.67, 0.54, True)
    sub_bbox_1 = abstraction_14(bbox, 0.67, 1.21, 0.54, True, 0.5, 0.51)
    make_subassembly_1(sub_bbox_1)
    sub_bbox_2 = abstraction_9(0.67, 0.11, 0.54, sub_bbox_1, 0.0, 0.5)
    make_subassembly_2(sub_bbox_2)
    cuboid_2 = abstraction_16(bbox, 0.67, 0.38, 0.07, True, sub_bbox_2, 0.75, 0.05, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = abstraction_13(1.21, bbox, 0.06, 0.54, 0.05, 0.5)
    make_subassembly_3(sub_bbox_3)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.55, 0.04, 0.08, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 1.0, 0.41, 0.08)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.67, 0.54, bbox, 0.05, 0.67, 0.06, 0.54, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = abstraction_13(1.21, bbox, 0.06, 0.08, 0.5, 0.07)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.06, 0.03, 0.38, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.4, 1.0)

`;

const baselineInitialTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.83, 1.6, 0.74, True)
    sub_bbox_1 = Cuboid(0.74, 1.0, 0.74, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.51, 0.0, 0.5)
    sub_bbox_2 = Cuboid(0.74, 0.18, 0.74, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.04, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.83, 0.47, 0.08, True)
    attach(cuboid_2, sub_bbox_2, 0.5, 0.0, 0.5, 0.5, 0.72, 0.05)
    attach(cuboid_2, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.05)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = Cuboid(0.14, 1.0, 0.74, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, bbox, bbox, bot, 0.09, 0.5)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.51, 0.12, 0.09, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 0.98, 0.37, 0.06)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.74, 0.02, 0.74, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.74, 0.16, 0.74, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.14, 1.0, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.08)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.09, 0.1, 0.5, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.35, 0.37, 1.0)

`;

const baselineTargetTask16 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.67, 1.67, 0.54, True)
    sub_bbox_1 = Cuboid(0.67, 1.21, 0.54, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.51)
    sub_bbox_2 = Cuboid(0.67, 0.11, 0.54, True)
    make_subassembly_2(sub_bbox_2)
    attach(sub_bbox_2, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.67, 0.38, 0.07, True)
    attach(cuboid_2, sub_bbox_2, 0.5, 0.0, 0.5, 0.5, 0.75, 0.05)
    attach(cuboid_2, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_3 = Cuboid(0.06, 1.21, 0.54, True)
    make_subassembly_3(sub_bbox_3)
    squeeze(sub_bbox_3, bbox, bbox, bot, 0.05, 0.5)
    reflect(sub_bbox_3, X)
    cuboid_1 = Cuboid(0.55, 0.04, 0.08, True)
    attach(cuboid_1, sub_bbox_3, 0.0, 0.5, 0.5, 1.0, 0.41, 0.08)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.67, 0.05, 0.54, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.67, 0.06, 0.54, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.5, 0.5)

@child_assembly
def make_subassembly_3(bbox):
    cuboid_0 = Cuboid(0.06, 1.21, 0.08, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.07)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.06, 0.03, 0.38, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.4, 1.0)

`;

const abstractedInitialTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.33, 1.57, 1.35, True)
    sub_bbox_1 = abstraction_14(bbox, 1.05, 0.59, 1.1, True, 0.51, 0.47)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(1.33, 1.35, bbox, 0.14, sub_bbox_1, 0.09, 0.84, 0.05, 0.01)
    cuboid_3 = abstraction_17(0.06, 0.22, 1.21, True, cuboid_1, 0.02, 1.0, 0.48)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.13, 0.94)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.59, bbox, 0.14, True, 0.07)

`;

const abstractedTargetTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.83, 0.68, True)
    sub_bbox_1 = abstraction_14(bbox, 0.68, 0.67, 0.68, True, 0.48, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.71, 0.68, bbox, 0.22, sub_bbox_1, 0.01, 0.95, 0.24, 0.18)
    cuboid_3 = abstraction_17(0.21, 0.22, 0.43, True, cuboid_1, 0.15, 1.0, 0.68)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.15, 0.12, 1.0)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.67, bbox, 0.16, True, 0.11)

`;

const baselineInitialTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.33, 1.57, 1.35, True)
    sub_bbox_1 = Cuboid(1.05, 0.59, 1.1, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.51, 0.0, 0.47)
    cuboid_1 = Cuboid(1.33, 0.14, 1.35, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.09, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(1.33, 0.84, 0.05, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.01)
    cuboid_3 = Cuboid(0.06, 0.22, 1.21, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.02, 1.0, 0.48)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.03, 0.13, 0.94)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.59, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.59, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.93)
    reflect(cuboid_1, X)

`;

const baselineTargetTask17 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.71, 1.83, 0.68, True)
    sub_bbox_1 = Cuboid(0.68, 0.67, 0.68, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.48, 0.0, 0.5)
    cuboid_1 = Cuboid(0.71, 0.22, 0.68, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.71, 0.95, 0.24, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.18)
    cuboid_3 = Cuboid(0.21, 0.22, 0.43, True)
    attach(cuboid_3, cuboid_1, 0.5, 0.0, 0.5, 0.15, 1.0, 0.68)
    attach(cuboid_3, cuboid_2, 0.5, 0.5, 0.0, 0.15, 0.12, 1.0)
    reflect(cuboid_3, X)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.16, 0.67, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.096, 0.11)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.152, 0.67, 0.152, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0912, 0.89)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.76, 1.6, 0.68, True)
    sub_bbox_1 = abstraction_14(bbox, 0.66, 0.83, 0.65, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.68, 0.13, 0.68, sub_bbox_1, 0.05, 0.5)
    sub_bbox_2 = Cuboid(0.76, 0.64, 0.16, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.13)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.83, bbox, 0.11, True, 0.08)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.76, 0.08, 0.15, True, 0.52)
    cuboid_1 = abstraction_14(bbox, 0.12, 0.58, 0.1, True, 0.15, 0.31)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.15, 0.23, 0.29)
    translate(cuboid_1, X, 3, 0.69)

`;

const abstractedTargetTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.88, 1.63, 0.87, True)
    sub_bbox_1 = abstraction_14(bbox, 0.88, 0.6, 0.82, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.87, 0.13, 0.87, sub_bbox_1, 0.03, 0.5)
    sub_bbox_2 = Cuboid(0.81, 0.91, 0.08, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.04)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.6, bbox, 0.12, True, 0.08)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_15(bbox, 0.8, 0.07, 0.07, True, 0.43)
    cuboid_1 = abstraction_14(bbox, 0.23, 0.88, 0.08, True, 0.14, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.14, 0.57, 0.58)
    translate(cuboid_1, X, 2, 0.72)

`;

const baselineInitialTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.76, 1.6, 0.68, True)
    sub_bbox_1 = Cuboid(0.66, 0.83, 0.65, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.68, 0.13, 0.68, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.05, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.76, 0.64, 0.16, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.13)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.11, 0.83, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.066, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1045, 0.83, 0.1045, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0627, 0.92)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.76, 0.08, 0.15, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.52)
    cuboid_1 = Cuboid(0.12, 0.58, 0.1, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.15, 0.0, 0.31)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.15, 0.23, 0.29)
    translate(cuboid_1, X, 3, 0.69)

`;

const baselineTargetTask18 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.88, 1.63, 0.87, True)
    sub_bbox_1 = Cuboid(0.88, 0.6, 0.82, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.87, 0.13, 0.87, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.81, 0.91, 0.08, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.04)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.12, 0.6, 0.12, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.072, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.114, 0.6, 0.114, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0684, 0.92)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.8, 0.07, 0.07, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.43)
    cuboid_1 = Cuboid(0.23, 0.88, 0.08, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.14, 0.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.14, 0.57, 0.58)
    translate(cuboid_1, X, 2, 0.72)

`;

const abstractedInitialTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.61, 1.55, 0.61, True)
    sub_bbox_1 = abstraction_14(bbox, 0.61, 1.08, 0.61, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.61, 0.61, bbox, 0.24, sub_bbox_1, 0.03, 0.24, 0.11, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(1.08, bbox, 0.1, 0.61, 0.08, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.41, 0.08, 0.07, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.35, 0.07)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(1.08, bbox, 0.1, 0.1, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.09, 0.41, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.35, 1.0)

`;

const abstractedTargetTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.66, 1.42, 0.71, True)
    sub_bbox_1 = abstraction_14(bbox, 0.61, 0.79, 0.68, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1, cuboid_2 = abstraction_6(0.66, 0.71, bbox, 0.37, sub_bbox_1, 0.01, 0.26, 0.13, 0.1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = abstraction_13(0.79, bbox, 0.05, 0.68, 0.04, 0.5)
    make_subassembly_2(sub_bbox_2)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.52, 0.02, 0.02, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.43, 0.05)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_13(0.79, bbox, 0.05, 0.05, 0.5, 0.04)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.02, 0.02, 0.58, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.52, 0.91)

`;

const baselineInitialTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.61, 1.55, 0.61, True)
    sub_bbox_1 = Cuboid(0.61, 1.08, 0.61, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.61, 0.24, 0.61, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.61, 0.24, 0.11, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.1, 1.08, 0.61, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.41, 0.08, 0.07, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.35, 0.07)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.1, 1.08, 0.1, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.09)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.07, 0.09, 0.41, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.35, 1.0)

`;

const baselineTargetTask19 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.66, 1.42, 0.71, True)
    sub_bbox_1 = Cuboid(0.61, 0.79, 0.68, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.66, 0.37, 0.71, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    cuboid_2 = Cuboid(0.66, 0.26, 0.13, True)
    squeeze(cuboid_2, cuboid_1, bbox, bot, 0.5, 0.1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.05, 0.79, 0.68, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.04, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.52, 0.02, 0.02, True)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 1.0, 0.43, 0.05)
    reflect(cuboid_1, Z)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.05, 0.79, 0.05, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.04)
    reflect(cuboid_0, Z)
    cuboid_1 = Cuboid(0.02, 0.02, 0.58, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.5, 0.0, 0.49, 0.52, 0.91)

`;

const abstractedInitialTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.65, 1.59, 0.65, True)
    sub_bbox_1 = abstraction_14(bbox, 0.65, 0.75, 0.65, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.65, 0.65, bbox, 0.18, sub_bbox_1, 0.03, 0.67, 0.07, 0.06)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.75, bbox, 0.09, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.65, 0.08, bbox, 0.23, 0.38, 0.44, 0.07, 0.49, 0.5)
    cuboid_2 = abstraction_8(bbox, 0.08, 0.44, 0.07, cuboid_0, 0.06, 0.5)
    reflect(cuboid_2, X)

`;

const abstractedTargetTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.69, 0.78, True)
    sub_bbox_1 = abstraction_14(bbox, 0.78, 0.57, 0.78, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.79, 0.78, bbox, 0.21, sub_bbox_1, 0.01, 0.93, 0.14, 0.09)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.57, bbox, 0.16, True, 0.09)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.79, 0.14, bbox, 0.39, 0.27, 0.54, 0.14, 0.49, 0.5)
    cuboid_2 = abstraction_8(bbox, 0.07, 0.54, 0.14, cuboid_0, 0.05, 0.5)
    reflect(cuboid_2, X)

`;

const baselineInitialTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.65, 1.59, 0.65, True)
    sub_bbox_1 = Cuboid(0.65, 0.75, 0.65, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.65, 0.18, 0.65, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.65, 0.67, 0.07, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.09, 0.75, 0.09, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.054, 0.07)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.0855, 0.75, 0.0855, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0513, 0.93)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.65, 0.23, 0.08, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.38, 0.44, 0.07, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.49, 0.5)
    cuboid_2 = Cuboid(0.08, 0.44, 0.07, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.06, 0.5)
    reflect(cuboid_2, X)

`;

const baselineTargetTask20 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.69, 0.78, True)
    sub_bbox_1 = Cuboid(0.78, 0.57, 0.78, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.79, 0.21, 0.78, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.79, 0.93, 0.14, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.16, 0.57, 0.16, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.096, 0.09)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.152, 0.57, 0.152, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0912, 0.91)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.79, 0.39, 0.14, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.27, 0.54, 0.14, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.49, 0.5)
    cuboid_2 = Cuboid(0.07, 0.54, 0.14, True)
    squeeze(cuboid_2, bbox, cuboid_0, bot, 0.05, 0.5)
    reflect(cuboid_2, X)

`;

const abstractedInitialTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.81, 1.67, 0.89, True)
    sub_bbox_1 = abstraction_14(bbox, 0.8, 0.6, 0.89, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.81, 0.89, bbox, 0.14, sub_bbox_1, 0.03, 0.93, 0.12, 0.07)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.6, bbox, 0.14, True, 0.08)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.8, 0.29, 0.12, True, 0.5, 0.5)
    cuboid_1 = abstraction_15(bbox, 0.8, 0.31, 0.11, True, 0.48)
    cuboid_2 = Cuboid(0.11, 0.33, 0.11, True)
    squeeze(cuboid_2, cuboid_0, cuboid_1, bot, 0.06, 0.49)
    translate(cuboid_2, X, 3, 0.82)

`;

const abstractedTargetTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.8, 0.77, True)
    sub_bbox_1 = abstraction_14(bbox, 0.67, 0.59, 0.76, True, 0.53, 0.51)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.79, 0.77, bbox, 0.24, sub_bbox_1, 0.01, 0.97, 0.12, 0.09)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.59, bbox, 0.19, True, 0.12)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.78, 0.07, 0.12, True, 0.5, 0.5)
    cuboid_1 = abstraction_15(bbox, 0.79, 0.28, 0.12, True, 0.48)
    cuboid_2 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_2, cuboid_0, cuboid_1, bot, 0.08, 0.49)
    translate(cuboid_2, X, 4, 0.85)

`;

const baselineInitialTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.81, 1.67, 0.89, True)
    sub_bbox_1 = Cuboid(0.8, 0.6, 0.89, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.81, 0.14, 0.89, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.03, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.81, 0.93, 0.12, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.07)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.14, 0.6, 0.14, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.084, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.133, 0.6, 0.133, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0798, 0.92)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.8, 0.29, 0.12, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.8, 0.31, 0.11, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.48)
    cuboid_2 = Cuboid(0.11, 0.33, 0.11, True)
    squeeze(cuboid_2, cuboid_0, cuboid_1, bot, 0.06, 0.49)
    translate(cuboid_2, X, 3, 0.82)

`;

const baselineTargetTask21 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.79, 1.8, 0.77, True)
    sub_bbox_1 = Cuboid(0.67, 0.59, 0.76, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.53, 0.0, 0.51)
    cuboid_1 = Cuboid(0.79, 0.24, 0.77, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.79, 0.97, 0.12, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.19, 0.59, 0.19, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.114, 0.12)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1805, 0.59, 0.1805, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1083, 0.88)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.78, 0.07, 0.12, True)
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.79, 0.28, 0.12, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.48)
    cuboid_2 = Cuboid(0.12, 0.63, 0.12, True)
    squeeze(cuboid_2, cuboid_0, cuboid_1, bot, 0.08, 0.49)
    translate(cuboid_2, X, 4, 0.85)

`;

const abstractedInitialTask22 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.66, 0.63, True)
    sub_bbox_1 = abstraction_14(bbox, 0.63, 0.61, 0.64, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.63, 0.63, bbox, 0.18, sub_bbox_1, 0.15, 0.91, 0.1, 0.08)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.61, bbox, 0.16, True, 0.1)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.63, 0.1, bbox, 0.18, 0.15, 0.72, 0.1, 0.12, 0.49)
    reflect(cuboid_1, X)

`;

const abstractedTargetTask22 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.68, 1.47, 0.91, True)
    sub_bbox_1 = abstraction_14(bbox, 0.68, 0.62, 0.87, True, 0.5, 0.52)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.68, 0.91, bbox, 0.19, sub_bbox_1, 0.02, 0.66, 0.14, 0.06)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.62, bbox, 0.1, True, 0.07)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.67, 0.14, bbox, 0.62, 0.03, 0.03, 0.03, 0.3, 0.53)
    reflect(cuboid_1, X)

`;

const baselineInitialTask22 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.66, 0.63, True)
    sub_bbox_1 = Cuboid(0.63, 0.61, 0.63, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.63, 0.18, 0.63, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.15, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.63, 0.91, 0.1, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.08)

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
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.15, 0.72, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.12, 0.49)
    reflect(cuboid_1, X)

`;

const baselineTargetTask22 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.68, 1.47, 0.91, True)
    sub_bbox_1 = Cuboid(0.68, 0.62, 0.87, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.52)
    cuboid_1 = Cuboid(0.68, 0.19, 0.91, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.02, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.68, 0.66, 0.14, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)

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
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.03, 0.03, 0.03, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.3, 0.53)
    reflect(cuboid_1, X)

`;

const abstractedInitialTask23 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.63, 0.92, True)
    sub_bbox_1 = abstraction_14(bbox, 0.99, 0.64, 0.81, True, 0.48, 0.56)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.99, 0.1, 0.92, sub_bbox_1, 0.0, 0.56)
    sub_bbox_2 = Cuboid(1.03, 0.89, 0.35, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.51, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.64, bbox, 0.15, True, 0.08)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(1.03, 0.35, bbox, 0.11, 0.09, 0.78, 0.09, 0.15, 0.53)
    translate(cuboid_1, X, 2, 0.7)

`;

const abstractedTargetTask23 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.5, 0.8, True)
    sub_bbox_1 = abstraction_14(bbox, 0.58, 0.57, 0.54, True, 0.5, 0.57)
    make_subassembly_1(sub_bbox_1)
    cuboid_1 = abstraction_9(0.66, 0.18, 0.77, sub_bbox_1, 0.01, 0.55)
    sub_bbox_2 = Cuboid(0.82, 0.75, 0.41, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.24)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.57, bbox, 0.11, True, 0.08)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.82, 0.41, bbox, 0.19, 0.09, 0.56, 0.07, 0.23, 0.47)
    translate(cuboid_1, X, 4, 0.55)

`;

const baselineInitialTask23 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.03, 1.63, 0.92, True)
    sub_bbox_1 = Cuboid(0.99, 0.64, 0.81, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.48, 0.0, 0.56)
    cuboid_1 = Cuboid(0.99, 0.1, 0.92, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.56, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(1.03, 0.89, 0.35, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.51, 0.19)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.15, 0.64, 0.15, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.09, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1425, 0.64, 0.1425, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0855, 0.92)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(1.03, 0.11, 0.35, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.09, 0.78, 0.09, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.15, 0.53)
    translate(cuboid_1, X, 2, 0.7)

`;

const baselineTargetTask23 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.82, 1.5, 0.8, True)
    sub_bbox_1 = Cuboid(0.58, 0.57, 0.54, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.57)
    cuboid_1 = Cuboid(0.66, 0.18, 0.77, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.01, 0.55, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.82, 0.75, 0.41, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.24)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.11, 0.57, 0.11, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.066, 0.08)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.1045, 0.57, 0.1045, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0627, 0.92)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.82, 0.19, 0.41, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.09, 0.56, 0.07, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.23, 0.47)
    translate(cuboid_1, X, 4, 0.55)

`;

const abstractedInitialTask24 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.73, 1.38, 0.98, True)
    sub_bbox_1 = abstraction_14(bbox, 0.67, 0.64, 0.85, True, 0.48, 0.54)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.73, 0.98, bbox, 0.08, sub_bbox_1, 0.0, 0.66, 0.23, 0.13)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.64, bbox, 0.06, True, 0.03)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.71, 0.23, bbox, 0.12, 0.03, 0.55, 0.03, 0.09, 0.61)
    translate(cuboid_1, X, 9, 0.79)

`;

const abstractedTargetTask24 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.96, 1.65, 0.9, True)
    sub_bbox_1 = abstraction_14(bbox, 0.94, 0.66, 0.87, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.96, 0.9, bbox, 0.13, sub_bbox_1, 0.19, 0.89, 0.13, 0.09)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.66, bbox, 0.25, True, 0.15)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0, cuboid_1 = abstraction_18(0.93, 0.13, bbox, 0.57, 0.23, 0.31, 0.1, 0.2, 0.47)
    translate(cuboid_1, X, 2, 0.6)

`;

const baselineInitialTask24 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.73, 1.38, 0.98, True)
    sub_bbox_1 = Cuboid(0.67, 0.64, 0.85, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.48, 0.0, 0.54)
    cuboid_1 = Cuboid(0.73, 0.08, 0.98, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.73, 0.66, 0.23, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.13)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.06, 0.64, 0.06, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.036, 0.03)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.057, 0.64, 0.057, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.0342, 0.97)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.71, 0.12, 0.23, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.03, 0.55, 0.03, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.09, 0.61)
    translate(cuboid_1, X, 9, 0.79)

`;

const baselineTargetTask24 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.96, 1.65, 0.9, True)
    sub_bbox_1 = Cuboid(0.94, 0.66, 0.87, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.96, 0.13, 0.9, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.19, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.96, 0.89, 0.13, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0 = Cuboid(0.25, 0.66, 0.25, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.15, 0.15)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.2375, 0.66, 0.2375, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.1425, 0.85)
    reflect(cuboid_1, X)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.93, 0.57, 0.13, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(0.23, 0.31, 0.1, True)
    squeeze(cuboid_1, bbox, cuboid_0, bot, 0.2, 0.47)
    translate(cuboid_1, X, 2, 0.6)

`;

const abstractedInitialTask25 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.77, 1.65, 0.84, True)
    sub_bbox_1 = abstraction_14(bbox, 0.77, 0.4, 0.84, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.77, 0.84, bbox, 0.3, sub_bbox_1, 0.0, 0.95, 0.15, 0.09)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.4, bbox, 0.17, True, 0.12)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.77, 0.16, 0.15, True, 0.5, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = abstraction_17(0.18, 0.63, 0.14, True, cuboid_0, 0.12, 0.99, 0.46)
    translate(cuboid_1, X, 3, 0.76)

`;

const abstractedTargetTask25 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.68, 0.75, True)
    sub_bbox_1 = abstraction_14(bbox, 0.75, 0.47, 0.75, True, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)
    cuboid_1,sub_bbox_2 = abstraction_6(0.75, 0.75, bbox, 0.09, sub_bbox_1, 0.0, 1.12, 0.1, 0.06)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_1(bbox):
    cuboid_0, cuboid_1 = abstraction_12(0.47, bbox, 0.1, True, 0.06)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = abstraction_14(bbox, 0.75, 0.12, 0.1, True, 0.5, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = abstraction_17(0.1, 0.9, 0.1, True, cuboid_0, 0.07, 0.97, 0.5)
    translate(cuboid_1, X, 2, 0.86)

`;

const baselineInitialTask25 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.77, 1.65, 0.84, True)
    sub_bbox_1 = Cuboid(0.77, 0.4, 0.84, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.77, 0.3, 0.84, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.77, 0.95, 0.15, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.09)

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
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = Cuboid(0.18, 0.63, 0.14, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.12, 0.99, 0.46)
    translate(cuboid_1, X, 3, 0.76)

`;

const baselineTargetTask25 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.75, 1.68, 0.75, True)
    sub_bbox_1 = Cuboid(0.75, 0.47, 0.75, True)
    make_subassembly_1(sub_bbox_1)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(0.75, 0.09, 0.75, True)
    attach(cuboid_1, sub_bbox_1, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    sub_bbox_2 = Cuboid(0.75, 1.12, 0.1, True)
    make_subassembly_2(sub_bbox_2)
    squeeze(sub_bbox_2, cuboid_1, bbox, bot, 0.5, 0.06)

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
    attach(cuboid_0, bbox, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5)
    reflect(cuboid_0, Y)
    cuboid_1 = Cuboid(0.1, 0.9, 0.1, True)
    attach(cuboid_1, cuboid_0, 0.5, 0.0, 0.5, 0.07, 0.97, 0.5)
    translate(cuboid_1, X, 2, 0.86)

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
  {
    initial: abstractedInitialTask22,
    target: abstractedTargetTask22,
  },
  {
    initial: abstractedInitialTask23,
    target: abstractedTargetTask23,
  },
  {
    initial: abstractedInitialTask24,
    target: abstractedTargetTask24,
  },
  {
    initial: abstractedInitialTask25,
    target: abstractedTargetTask25,
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
  {
    initial: baselineInitialTask22,
    target: baselineTargetTask22,
  },
  {
    initial: baselineInitialTask23,
    target: baselineTargetTask23,
  },
  {
    initial: baselineInitialTask24,
    target: baselineTargetTask24,
  },
  {
    initial: baselineInitialTask25,
    target: baselineTargetTask25,
  },
];
