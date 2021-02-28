/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const prefix = `def abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1):
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

def abstraction_12(i_bbox, f_var_0, b_var_0, f_var_1):
    cuboid_0 = abstraction_0(i_bbox, f_var_0, b_var_0, f_var_1)
    cuboid_1 = abstraction_0(i_bbox, f_var_0 * 0.95, b_var_0, 1.0 + f_var_1 * -1.0)
    return cuboid_0, cuboid_1

def abstraction_13(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3):
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

def abstraction_18(i_bbox, f_var_0, f_var_1, f_var_2, f_var_3, f_var_4, f_var_5):
    cuboid_0 = abstraction_15(i_bbox, f_bb_x * 1.0, f_var_0, f_bb_z * 1.0, True, 0.5)
    cuboid_1 = abstraction_8(i_bbox, f_var_1, f_var_2, f_var_3, cuboid_0, f_var_4, f_var_5)
    return cuboid_0, cuboid_1`;

const program0 = `@root_assembly
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
    translate(cuboid_1, X, 2, 0.86)`;

const program1 = `@root_assembly
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
    reflect(cuboid_1, X)`;

const program2 = `@root_assembly
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
    cuboid_0, cuboid_1 = abstraction_12(bbox, 0.16, True, 0.11)`;

const namingTaskSlice = createSlice({
  name: 'namingTaskSlice',
  initialState: {
    // The list of programs that are being named, along with a common prefix.
    prefix,
    programs: [program0, program1, program2, program0, program1, program2, program0, program1, program2],

    // The abstraction that's being named, along with the assigned names.
    abstraction: 'abstraction_12',
    names: {},

    // Current parameter values, where the mapping is name --> value.
    parameterValues: {},
    cachedValuesFetched: false,
  },
  reducers: {
    setParameterValue(state, { payload }) {
      const { name, newValue } = payload;
      state.parameterValues = { [name]: newValue };
    },
    resetParameterValues(state) {
      state.parameterValues = {};
    },
    markCachedValuesFetched(state) {
      state.cachedValuesFetched = true;
    },
  },
});

export const { setParameterValue, resetParameterValues, markCachedValuesFetched } = namingTaskSlice.actions;

export default namingTaskSlice.reducer;
