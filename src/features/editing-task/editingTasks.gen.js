// This is the file where the editing tasks for the user are defined.
// An editing task is a JS object with "initial" and "target" fields.
// THIS IS A COMPUTER-GENERATED FILE. DON'T TRY TO EDIT THIS BY HAND.

const abstractionsTask0 = `def abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_0 * 1.0, b_var_0)
    squeeze(cuboid_0, i_bbox, i_bbox, bot, f_var_0 * 0.6, f_var_1)
    reflect(cuboid_0, X)
    return cuboid_0

def abstraction_5(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 0.0, 0.5, f_var_0, 1.0, f_var_1)

def abstraction_6(i_bbox, f_var_0, i_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_var_0, 0.5, f_var_1, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(f_bb_x * 1.0, f_var_2, f_var_3, True)
    squeeze(cuboid_1, cuboid_0, i_bbox, bot, 0.5, f_var_4)
    return cuboid_0, cuboid_1

def abstraction_12(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1)
    cuboid_1 = abstraction_0(i_bbox, f_var_0 * 0.95, b_var_0, 1.0 + f_var_1 * -1.0)
    return cuboid_0, cuboid_1

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_5(cuboid_0, i_bbox, f_var_3, f_var_4)
    return cuboid_0

def abstraction_17(f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4, f_var_5):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    attach(cuboid_0, i_var_0, 0.5, 0.0, 0.5, f_var_3, f_var_4, f_var_5)
    return cuboid_0`;

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

const abstractionsTask1 = `def abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_0 * 1.0, b_var_0)
    squeeze(cuboid_0, i_bbox, i_bbox, bot, f_var_0 * 0.6, f_var_1)
    reflect(cuboid_0, X)
    return cuboid_0

def abstraction_2(implicit_cuboid, i_bbox, f_var_0):
    attach(implicit_cuboid, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, f_var_0)

def abstraction_5(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 0.0, 0.5, f_var_0, 1.0, f_var_1)

def abstraction_6(i_bbox, f_var_0, i_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_var_0, 0.5, f_var_1, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(f_bb_x * 1.0, f_var_2, f_var_3, True)
    squeeze(cuboid_1, cuboid_0, i_bbox, bot, 0.5, f_var_4)
    return cuboid_0, cuboid_1

def abstraction_8(i_bbox, f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    squeeze(cuboid_0, i_bbox, i_var_0, bot, f_var_3, f_var_4)
    return cuboid_0

def abstraction_12(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1)
    cuboid_1 = abstraction_0(i_bbox, f_var_0 * 0.95, b_var_0, 1.0 + f_var_1 * -1.0)
    return cuboid_0, cuboid_1

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_5(cuboid_0, i_bbox, f_var_3, f_var_4)
    return cuboid_0

def abstraction_15(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_2(cuboid_0, i_bbox, f_var_3)
    return cuboid_0

def abstraction_18(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4, f_var_5):
    cuboid_0 = abstraction_15(i_bbox, f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True, 0.5)
    cuboid_1 = abstraction_8(i_bbox, f_var_1, f_var_2, f_var_3, cuboid_0, f_var_4, f_var_5)
    return cuboid_0, cuboid_1`;

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

const abstractionsTask2 = `def abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_0 * 1.0, b_var_0)
    squeeze(cuboid_0, i_bbox, i_bbox, bot, f_var_0 * 0.6, f_var_1)
    reflect(cuboid_0, X)
    return cuboid_0

def abstraction_5(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 0.0, 0.5, f_var_0, 1.0, f_var_1)

def abstraction_6(i_bbox, f_var_0, i_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_var_0, 0.5, f_var_1, 0.5, 0.5, 1.0, 0.5)
    cuboid_1 = Cuboid(f_bb_x * 1.0, f_var_2, f_var_3, True)
    squeeze(cuboid_1, cuboid_0, i_bbox, bot, 0.5, f_var_4)
    return cuboid_0, cuboid_1

def abstraction_12(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1)
    cuboid_1 = abstraction_0(i_bbox, f_var_0 * 0.95, b_var_0, 1.0 + f_var_1 * -1.0)
    return cuboid_0, cuboid_1

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    abstraction_5(cuboid_0, i_bbox, f_var_3, f_var_4)
    return cuboid_0

def abstraction_17(f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4, f_var_5):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    attach(cuboid_0, i_var_0, 0.5, 0.0, 0.5, f_var_3, f_var_4, f_var_5)
    return cuboid_0`;

const abstractedInitialTask2 = `@root_assembly
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

const abstractedTargetTask2 = `@root_assembly
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

const baselineInitialTask2 = `@root_assembly
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

const baselineTargetTask2 = `@root_assembly
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

const abstractionsTask3 = `def abstraction_0(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    squeeze(implicit_cuboid, i_bbox, i_bbox, bot, f_var_0, f_var_1)

def abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_bbox, 0.5, 0.0, 0.5, 0.5, 1.0, f_var_3)
    return cuboid_0

def abstraction_5(f_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_1, True)
    return cuboid_0

def abstraction_9(f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8)
    return cuboid_0

def abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_5(f_var_0, f_var_1)
    abstraction_0(cuboid_0, i_bbox, f_var_2, f_var_3)
    return cuboid_0

def abstraction_12(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, i_var_0, f_var_4):
    cuboid_0 = abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    attach(cuboid_0, i_var_0, 0.0, 0.5, 0.5, f_var_4, 0.0, 0.5)
    reflect(cuboid_0, Y)
    return cuboid_0

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    reflect(cuboid_0, X)
    return cuboid_0`;

const abstractedInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.73, 0.39, True)
    cuboid_0 = abstraction_14(bbox, 0.02, 0.39, 0.01, 0.5)
    cuboid_1 = abstraction_12(bbox, 0.84, 0.02, 0.39, 0.5, cuboid_0, 0.67)
    cuboid_2 = abstraction_9(0.83, 0.02, 0.39, cuboid_0, 0.0, 0.5, 0.5, 0.91, 0.18, 0.5)
    translate(cuboid_2, Y, 5, 0.68)

`;

const abstractedTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.35, 0.25, True)
    cuboid_0 = abstraction_14(bbox, 0.17, 0.24, 0.06, 0.5)
    cuboid_1 = abstraction_12(bbox, 1.11, 0.09, 0.24, 0.5, cuboid_0, 1.0)
    cuboid_2 = abstraction_9(1.12, 0.09, 0.25, cuboid_0, 0.0, 0.5, 0.5, 0.95, 0.24, 0.5)
    translate(cuboid_2, Y, 3, 0.58)

`;

const baselineInitialTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.73, 0.39, True)
    cuboid_0 = Cuboid(0.02, 1.73, 0.39, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.01, 0.5)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(0.84, 0.02, 0.39, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.0, 0.5, 0.5, 0.67, 0.0, 0.5)
    reflect(cuboid_1, Y)
    cuboid_2 = Cuboid(0.83, 0.02, 0.39, True)
    attach(cuboid_2, cuboid_0, 0.0, 0.5, 0.5, 0.91, 0.18, 0.5)
    translate(cuboid_2, Y, 5, 0.68)

`;

const baselineTargetTask3 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.35, 0.25, True)
    cuboid_0 = Cuboid(0.17, 1.35, 0.24, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.06, 0.5)
    reflect(cuboid_0, X)
    cuboid_1 = Cuboid(1.11, 0.09, 0.24, True)
    attach(cuboid_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    attach(cuboid_1, cuboid_0, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5)
    reflect(cuboid_1, Y)
    cuboid_2 = Cuboid(1.12, 0.09, 0.25, True)
    attach(cuboid_2, cuboid_0, 0.0, 0.5, 0.5, 0.95, 0.24, 0.5)
    translate(cuboid_2, Y, 3, 0.58)

`;

const abstractionsTask4 = `def abstraction_0(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    squeeze(implicit_cuboid, i_bbox, i_bbox, bot, f_var_0, f_var_1)

def abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_bbox, 0.5, 0.0, 0.5, 0.5, 1.0, f_var_3)
    return cuboid_0

def abstraction_5(f_var_0, f_var_1):
    cuboid_0 = Cuboid(f_var_0, f_bb_y * 1.0, f_var_1, True)
    return cuboid_0

def abstraction_9(f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7, f_var_8)
    return cuboid_0

def abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_5(f_var_0, f_var_1)
    abstraction_0(cuboid_0, i_bbox, f_var_2, f_var_3)
    return cuboid_0

def abstraction_12(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, i_var_0, f_var_4):
    cuboid_0 = abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    attach(cuboid_0, i_var_0, 0.0, 0.5, 0.5, f_var_4, 0.0, 0.5)
    reflect(cuboid_0, Y)
    return cuboid_0

def abstraction_14(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    reflect(cuboid_0, X)
    return cuboid_0`;

const abstractedInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.86, 0.22, True)
    cuboid_0 = abstraction_10(bbox, 0.57, 0.05, 0.45, 0.11)
    cuboid_1 = abstraction_14(bbox, 0.08, 0.17, 0.07, 0.61)
    cuboid_2 = abstraction_12(bbox, 0.48, 0.1, 0.17, 0.61, cuboid_1, 1.0)
    cuboid_3 = abstraction_9(0.49, 0.04, 0.17, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.15, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.57, 0.15, 0.99)
    translate(cuboid_3, Y, 7, 0.76)

`;

const abstractedTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.74, 0.53, True)
    cuboid_0 = abstraction_10(bbox, 0.86, 0.08, 0.5, 0.07)
    cuboid_1 = abstraction_14(bbox, 0.06, 0.46, 0.03, 0.57)
    cuboid_2 = abstraction_12(bbox, 0.77, 0.04, 0.46, 0.57, cuboid_1, 0.87)
    cuboid_3 = abstraction_9(0.76, 0.04, 0.45, cuboid_1, 0.0, 0.5, 0.5, 0.96, 0.25, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.25, 0.98)
    translate(cuboid_3, Y, 2, 0.5)

`;

const baselineInitialTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.63, 1.86, 0.22, True)
    cuboid_0 = Cuboid(0.57, 1.86, 0.05, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.45, 0.11)
    cuboid_1 = Cuboid(0.08, 1.86, 0.17, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.07, 0.61)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.48, 0.1, 0.17, True)
    attach(cuboid_2, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.61)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 1.0, 0.0, 0.5)
    reflect(cuboid_2, Y)
    cuboid_3 = Cuboid(0.49, 0.04, 0.17, True)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.95, 0.15, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.57, 0.15, 0.99)
    translate(cuboid_3, Y, 7, 0.76)

`;

const baselineTargetTask4 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(0.87, 1.74, 0.53, True)
    cuboid_0 = Cuboid(0.86, 1.74, 0.08, True)
    squeeze(cuboid_0, bbox, bbox, bot, 0.5, 0.07)
    cuboid_1 = Cuboid(0.06, 1.74, 0.46, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.03, 0.57)
    reflect(cuboid_1, X)
    cuboid_2 = Cuboid(0.77, 0.04, 0.46, True)
    attach(cuboid_2, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.57)
    attach(cuboid_2, cuboid_1, 0.0, 0.5, 0.5, 0.87, 0.0, 0.5)
    reflect(cuboid_2, Y)
    cuboid_3 = Cuboid(0.76, 0.04, 0.45, True)
    attach(cuboid_3, cuboid_1, 0.0, 0.5, 0.5, 0.96, 0.25, 0.5)
    attach(cuboid_3, cuboid_0, 0.5, 0.5, 0.0, 0.5, 0.25, 0.98)
    translate(cuboid_3, Y, 2, 0.5)

`;

const abstractionsTask5 = `def abstraction_1(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(f_var_1, f_bb_y * 1.0 + f_var_0 * -1.0, f_var_2, b_var_0)
    squeeze(cuboid_1, i_bbox, cuboid_0, bot, 0.5, 0.5)
    return cuboid_0, cuboid_1

def abstraction_5(implicit_cuboid, i_bbox, f_var_0, f_var_1):
    attach(implicit_cuboid, i_bbox, 0.5, 1.0, 0.5, f_var_0, 0.0, f_var_1)

def abstraction_8(i_bbox, f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4, c_var_0):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    squeeze(cuboid_0, i_bbox, i_var_0, bot, f_var_3, f_var_4)
    reflect(cuboid_0, c_var_0)
    return cuboid_0

def abstraction_17(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    abstraction_5(cuboid_0, i_bbox, f_var_3, f_var_4)
    return cuboid_0

def abstraction_18(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, c_var_0):
    cuboid_0 = abstraction_8(i_bbox, f_var_0, f_bb_y * 1.0, f_var_1, i_bbox, f_var_2, f_var_3, c_var_0)
    return cuboid_0`;

const abstractedInitialTask5 = `@root_assembly
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

const abstractedTargetTask5 = `@root_assembly
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

const baselineInitialTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.1, 1.1, 1.1, True)
    cuboid_0 = Cuboid(1.1, 0.05, 1.1, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    sub_bbox_1 = Cuboid(0.72, 1.05, 0.72, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.12, 1.05, 0.69, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.08, 0.48)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(0.69, 0.18, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.52, 0.0, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.25, 0.91, 0.03)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.04, 0.18, 0.69, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.15, 0.0, 0.5)
    cuboid_1 = Cuboid(0.08, 1.05, 0.08, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.65, 0.11)
    reflect(cuboid_1, Z)

`;

const baselineTargetTask5 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.36, 0.62, 1.36, True)
    cuboid_0 = Cuboid(1.36, 0.08, 1.36, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    sub_bbox_1 = Cuboid(1.25, 0.54, 1.25, True)
    squeeze(sub_bbox_1, bbox, cuboid_0, bot, 0.5, 0.5)
    make_subassembly_1(sub_bbox_1)

@child_assembly
def make_subassembly_1(bbox):
    sub_bbox_2 = Cuboid(0.04, 0.54, 1.25, True)
    squeeze(sub_bbox_2, bbox, bbox, bot, 0.02, 0.5)
    reflect(sub_bbox_2, X)
    cuboid_1 = Cuboid(1.21, 0.43, 0.04, True)
    attach(cuboid_1, bbox, 0.5, 1.0, 0.5, 0.49, 0.0, 0.02)
    attach(cuboid_1, sub_bbox_2, 0.0, 0.5, 0.5, 0.21, 0.6, 0.02)
    reflect(cuboid_1, Z)
    make_subassembly_2(sub_bbox_2)

@child_assembly
def make_subassembly_2(bbox):
    cuboid_0 = Cuboid(0.04, 0.43, 1.18, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.52, 0.0, 0.5)
    cuboid_1 = Cuboid(0.04, 0.54, 0.04, True)
    squeeze(cuboid_1, bbox, bbox, bot, 0.5, 0.02)
    reflect(cuboid_1, Z)

`;

const abstractionsTask6 = `def abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
    cuboid_0 = Cuboid(f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True)
    attach(cuboid_0, i_bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    cuboid_1 = Cuboid(f_var_1, f_var_2, f_var_3, True)
    attach(cuboid_1, i_bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
    return cuboid_0, cuboid_1

def abstraction_9(f_var_0, f_var_1, f_var_2, i_var_0, f_var_3, f_var_4, f_var_5, f_var_6, f_var_7):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, True)
    attach(cuboid_0, i_var_0, f_var_3, 0.5, f_var_4, f_var_5, f_var_6, f_var_7)
    return cuboid_0

def abstraction_10(i_bbox, f_var_0, f_var_1, f_var_2, b_var_0, i_var_0, f_var_3, f_var_4):
    cuboid_0 = Cuboid(f_var_0, f_var_1, f_var_2, b_var_0)
    squeeze(cuboid_0, i_bbox, i_var_0, bot, f_var_3, f_var_4)
    return cuboid_0

def abstraction_12(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4):
    cuboid_0, cuboid_1 = abstraction_2(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3)
    attach(cuboid_1, cuboid_0, 0.5, 1.0, 0.5, 0.5, f_var_4, 0.5)
    return cuboid_0, cuboid_1

def abstraction_19(i_bbox, f_var_0, f_var_1, b_var_0, f_var_2, f_var_3, f_var_4, f_var_5, b_var_1, f_var_6, f_var_7):
    cuboid_0 = abstraction_10(i_bbox, f_var_0, f_bb_y * 1.0, f_var_1, b_var_0, i_bbox, f_var_2, f_var_3)
    cuboid_1 = abstraction_10(i_bbox, f_var_4, f_bb_y * 1.0, f_var_5, b_var_1, i_bbox, f_var_6, f_var_7)
    return cuboid_0, cuboid_1`;

const abstractedInitialTask6 = `@root_assembly
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

const abstractedTargetTask6 = `@root_assembly
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

const baselineInitialTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.43, 1.19, 1.43, True)
    cuboid_0 = Cuboid(1.43, 0.02, 1.43, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    sub_bbox_1 = Cuboid(1.18, 1.17, 1.18, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
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

const baselineTargetTask6 = `@root_assembly
def make_root_assembly():
    bbox = Cuboid(1.82, 0.65, 1.82, True)
    cuboid_0 = Cuboid(1.82, 0.02, 1.82, True)
    attach(cuboid_0, bbox, 0.5, 1.0, 0.5, 0.5, 0.0, 0.5)
    sub_bbox_1 = Cuboid(1.69, 0.63, 1.69, True)
    attach(sub_bbox_1, bbox, 0.5, 0.0, 0.5, 0.5, 1.0, 0.5)
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

export const abstractedEditingTasks = [
  {
    initial: abstractedInitialTask0,
    target: abstractedTargetTask0,
    abstractions: abstractionsTask0,
  },
  {
    initial: abstractedInitialTask1,
    target: abstractedTargetTask1,
    abstractions: abstractionsTask1,
  },
  {
    initial: abstractedInitialTask2,
    target: abstractedTargetTask2,
    abstractions: abstractionsTask2,
  },
  {
    initial: abstractedInitialTask3,
    target: abstractedTargetTask3,
    abstractions: abstractionsTask3,
  },
  {
    initial: abstractedInitialTask4,
    target: abstractedTargetTask4,
    abstractions: abstractionsTask4,
  },
  {
    initial: abstractedInitialTask5,
    target: abstractedTargetTask5,
    abstractions: abstractionsTask5,
  },
  {
    initial: abstractedInitialTask6,
    target: abstractedTargetTask6,
    abstractions: abstractionsTask6,
  },
];

export const baselineEditingTasks = [
  {
    initial: baselineInitialTask0,
    target: baselineTargetTask0,
    abstractions: '',
  },
  {
    initial: baselineInitialTask1,
    target: baselineTargetTask1,
    abstractions: '',
  },
  {
    initial: baselineInitialTask2,
    target: baselineTargetTask2,
    abstractions: '',
  },
  {
    initial: baselineInitialTask3,
    target: baselineTargetTask3,
    abstractions: '',
  },
  {
    initial: baselineInitialTask4,
    target: baselineTargetTask4,
    abstractions: '',
  },
  {
    initial: baselineInitialTask5,
    target: baselineTargetTask5,
    abstractions: '',
  },
  {
    initial: baselineInitialTask6,
    target: baselineTargetTask6,
    abstractions: '',
  },
];
