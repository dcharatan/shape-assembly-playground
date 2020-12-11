export const EXAMPLE_PROGRAM_CUBE = `@root_assembly
def root_asm():
    bbox = Cuboid(1, 1, 1, True)
    cube = Cuboid(1, 1, 1, True)
`;

export const EXAMPLE_PROGRAM_CHAIR = `@child_assembly
def assembly_fn_3(bbox):
    cube0 = Cuboid(0.141, 0.8, 0.14, True)
    cube1 = Cuboid(0.097, 0.059, 0.418, True)
    squeeze(cube0, bbox, bbox, top, 0.492, 0.103)
    attach(cube1, cube0, 0.5, 0.5, 0.0, 0.397, 0.802, 1.0)
    reflect(cube0, Z)

@child_assembly
def assembly_fn_2(bbox):
    cube0 = Cuboid(0.058, 0.732, 0.053, True)
    cube1 = Cuboid(0.082, 0.792, 0.055, True)
    cube2 = Cuboid(0.533, 0.078, 0.045, True)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.295, 0.001, 0.554)
    attach(cube1, bbox, 0.5, 1.0, 0.5, 0.068, 0.992, 0.437)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.062, 0.002, 0.6)
    attach(cube2, bbox, 0.5, 1.0, 0.5, 0.514, 0.989, 0.446)
    attach(cube0, cube2, 0.5, 1.0, 0.5, 0.22, 0.32, 0.416)
    translate(cube0, X, 2, 0.41)
    reflect(cube1, X)

@child_assembly
def assembly_fn_1(bbox):
    bbox_fn_3 = Cuboid(0.147, 0.803, 0.685, True)
    assembly_fn_3(bbox_fn_3)
    cube1 = Cuboid(0.418, 0.059, 0.098, True)
    squeeze(bbox_fn_3, bbox, bbox, top, 0.107, 0.503)
    attach(cube1, bbox_fn_3, 0.0, 0.5, 0.5, 0.98, 0.8, 0.085)
    reflect(bbox_fn_3, X)
    reflect(cube1, Z)

@root_assembly
def assembly_fn_0():
    bbox = Cuboid(0.714, 1.665, 0.716, True)
    bbox_fn_1 = Cuboid(0.68, 0.804, 0.691, True)
    assembly_fn_1(bbox_fn_1)
    cube1 = Cuboid(0.714, 0.077, 0.714, True)
    bbox_fn_2 = Cuboid(0.676, 0.8, 0.073, True)
    assembly_fn_2(bbox_fn_2)
    attach(bbox_fn_1, bbox, 0.5, 0.0, 0.5, 0.497, 0.001, 0.498)
    attach(cube1, bbox_fn_1, 0.499, 0.276, 0.502, 0.5, 1.0, 0.5)
    squeeze(bbox_fn_2, bbox, cube1, top, 0.5, 0.072)
`;

export const EXAMPLE_PROGRAM_TABLE = `@child_assembly
def assembly_fn_2(bbox):
    cube0 = Cuboid(0.039, 0.82, 0.066, True)
    cube1 = Cuboid(0.05, 0.066, 0.475, True)
    cube2 = Cuboid(0.063, 0.886, 0.059, True)
    attach(cube0, bbox, 0.5, 1.0, 0.5, 0.255, 0.97, 0.348)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.291, 0.0, 0.527)
    squeeze(cube2, bbox, bbox, top, 0.429, 0.069)
    attach(cube0, cube1, 0.5, 0.0, 0.5, 0.435, 0.937, 0.309)
    reflect(cube1, Y)

@child_assembly
def assembly_fn_1(bbox):
    bbox_fn_2 = Cuboid(0.09, 0.909, 0.508, True)
    assembly_fn_2(bbox_fn_2)
    cube1 = Cuboid(1.262, 0.06, 0.046, True)
    cube2 = Cuboid(1.261, 0.052, 0.039, True)
    cube3 = Cuboid(1.385, 0.026, 0.07, True)
    squeeze(bbox_fn_2, bbox, bbox, top, 0.032, 0.504)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.496, 0.001, 0.071)
    attach(cube3, bbox, 0.5, 1.0, 0.5, 0.499, 1.0, 0.93)
    attach(cube1, bbox_fn_2, 0.0, 0.5, 0.5, 0.691, 0.033, 0.061)
    attach(cube3, bbox_fn_2, 0.0, 0.5, 0.5, 0.046, 0.986, 0.932)
    attach(cube2, bbox_fn_2, 0.0, 0.5, 0.5, 0.692, 0.246, 0.054)
    reflect(bbox_fn_2, X)
    reflect(cube1, Y)

@root_assembly
def assembly_fn_0():
    bbox = Cuboid(1.437, 0.945, 0.567, True)
    bbox_fn_1 = Cuboid(1.397, 0.91, 0.514, True)
    assembly_fn_1(bbox_fn_1)
    cube1 = Cuboid(1.437, 0.036, 0.567, True)
    squeeze(bbox_fn_1, bbox, bbox, top, 0.501, 0.491)
    attach(cube1, bbox, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5)
`;

export const EXAMPLE_PROGRAM_SHELF = `@root_assembly
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

export const EXAMPLE_PROGRAM_CHAIR_1 = `@child_assembly
def back_asm(bbox):
    surface = Cuboid(1.16, 0.64, 0.13, True)
    slat = Cuboid(0.04, 0.76, 0.1, False)
    attach(surface, bbox, 0.5, 0.1, 0.5, 0.5, 1, 0.7)
    attach(slat, bbox, 0.5, 0, 0.5, 0.2, 0, 0.45)
    attach(slat, surface, 0.5, 0.6, 0.8, 0.2, 0.3, 0.2)
    reflect(slat, X)
    

@root_assembly
def root_asm():
    bbox = Cuboid(1.2, 1.4, 1, True)
    base_bbox = Cuboid(0.9, 0.5, 0.8, True)
    seat_bbox = Cuboid(1.1, 0.1, 0.9, True)
    back_bbox = Cuboid(1.1, 0.9, 0.2, False)
    back_asm(back_bbox)
    arm_bbox = Cuboid(0.1, 0.4, 0.7, False)
    attach(base_bbox, bbox, 0.5, 0, 0.5, 0.5, 0, 0.5)
    squeeze(back_bbox, bbox, base_bbox, top, 0.5, 0.1)
    attach(seat_bbox, base_bbox, 0.5, 0, 0.5, 0.5, 1, 0.5)
    attach(arm_bbox, back_bbox, 0.5, 0.5, 0, 0.1, 0.3, 0.5)
    attach(arm_bbox, seat_bbox, 0.5, 0, 0.5, 0.1, 0.7, 0.5)
    reflect(arm_bbox, X)`;

export const EXAMPLE_PROGRAM_CHAIR_2 = `@child_assembly
def assembly_fn_4(bbox):
    cube0 = Cuboid(0.044, 0.796, 0.413, True)
    cube1 = Cuboid(0.061, 0.061, 0.461, False)
    cube2 = Cuboid(0.053, 0.736, 0.062, False)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.633, 0.044, 0.417)
    attach(cube1, bbox, 0.313, 0.962, 0.019, 0.412, 0.992, 0.114)
    attach(cube2, bbox, 0.5, 0.0, 0.5, 0.595, 0.0, 0.893)
    attach(cube1, cube0, 0.5, 0.0, 0.5, 0.071, 0.905, 0.619)
    attach(cube2, cube0, 0.672, 0.593, 0.052, 0.5, 0.5, 1.0)

@child_assembly
def assembly_fn_3(bbox):
    cube0 = Cuboid(0.944, 0.945, 0.552, True)
    cube1 = Cuboid(1.027, 0.063, 0.595, False)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.503, 0.007, 0.488)
    attach(cube0, bbox, 0.905, 0.999, 0.488, 0.863, 0.952, 0.466)
    attach(cube1, bbox, 0.496, 0.944, 0.02, 0.496, 0.993, 0.048)
    attach(cube1, cube0, 0.5, 0.0, 0.5, 0.509, 0.903, 0.492)

@child_assembly
def assembly_fn_2(bbox):
    cube0 = Cuboid(0.963, 0.225, 0.849, True)
    cube1 = Cuboid(0.997, 0.076, 0.096, True)
    cube2 = Cuboid(1.054, 0.049, 0.806, True)
    cube3 = Cuboid(0.989, 0.078, 0.85, True)
    attach(cube0, bbox, 0.5, 1.0, 0.5, 0.483, 0.995, 0.52)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.5, 0.002, 0.933)
    attach(cube2, cube1, 0.5, 0.219, 1.0, 0.5, 0.5, 0.0)
    attach(cube3, cube0, 0.485, 0.975, 0.5, 0.5, 0.0, 0.5)
    attach(cube2, cube3, 0.5, 1.0, 0.5, 0.503, 0.005, 0.413)

@child_assembly
def assembly_fn_1(bbox):
    cube0 = Cuboid(0.1, 0.419, 0.126, True)
    cube1 = Cuboid(0.149, 0.47, 0.126, False)
    attach(cube0, bbox, 0.5, 1.0, 0.5, 0.247, 0.985, 0.111)
    squeeze(cube1, bbox, bbox, top, 0.093, 0.891)
    reflect(cube0, X)
    reflect(cube1, X)

@root_assembly
def assembly_fn_0():
    bbox = Cuboid(1.216, 1.524, 1.067, True)
    bbox_fn_1 = Cuboid(1.215, 0.487, 0.842, True)
    assembly_fn_1(bbox_fn_1)
    bbox_fn_2 = Cuboid(1.054, 0.378, 0.916, True)
    assembly_fn_2(bbox_fn_2)
    bbox_fn_3 = Cuboid(1.027, 1.005, 0.589, True)
    assembly_fn_3(bbox_fn_3)
    bbox_fn_4 = Cuboid(0.075, 0.879, 0.495, False)
    assembly_fn_4(bbox_fn_4)
    attach(bbox_fn_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.001, 0.598)
    attach(bbox_fn_3, bbox, 0.5, 1.0, 0.5, 0.515, 0.99, 0.298)
    attach(bbox_fn_2, bbox_fn_1, 0.497, 0.119, 0.534, 0.5, 1.0, 0.5)
    attach(bbox_fn_2, bbox_fn_3, 0.5, 1.0, 0.5, 0.507, 0.309, 0.955)
    attach(bbox_fn_4, bbox_fn_1, 0.5, 0.0, 0.5, 0.098, 0.976, 0.663)
    attach(bbox_fn_4, bbox_fn_3, 0.5, 0.5, 0.0, 0.045, 0.401, 0.865)
    reflect(bbox_fn_4, X)`;

export const EXAMPLE_PROGRAM_CHAIR_3 = `@child_assembly
def assembly_fn_4(bbox):
    cube0 = Cuboid(0.061, 0.679, 0.08, False)
    cube1 = Cuboid(0.051, 0.067, 0.45, True)
    attach(cube0, bbox, 0.5, 1.0, 0.5, 0.511, 0.987, 0.228)
    attach(cube0, bbox, 0.5, 0.0, 0.5, 0.511, 0.013, 0.048)
    attach(cube1, cube0, 0.5, 0.5, 0.0, 0.41, 0.847, 0.832)
    reflect(cube0, Z)  

@child_assembly
def assembly_fn_3(bbox):
    cube0 = Cuboid(0.645, 0.652, 0.01, True)
    cube1 = Cuboid(0.712, 0.849, 0.069, True)
    attach(cube0, bbox, 0.946, 1.0, 0.53, 0.887, 0.951, 0.959)
    squeeze(cube1, bbox, bbox, top, 0.5, 0.484)
    attach(cube0, cube1, 0.5, 0.5, 0.0, 0.495, 0.559, 0.989)

@child_assembly
def assembly_fn_2(bbox):
    cube0 = Cuboid(0.688, 0.035, 0.617, True)
    cube1 = Cuboid(0.094, 0.119, 0.722, True)
    cube2 = Cuboid(0.577, 0.029, 0.02, True)
    cube3 = Cuboid(0.754, 0.111, 0.644, True)
    attach(cube0, bbox, 0.5, 1.0, 0.5, 0.502, 1.0, 0.568)
    attach(cube1, bbox, 0.5, 0.0, 0.5, 0.061, 0.0, 0.488)
    attach(cube2, cube1, 0.0, 0.5, 0.5, 0.963, 0.32, 0.903)
    attach(cube3, cube0, 0.492, 0.986, 0.503, 0.5, 0.0, 0.5)
    attach(cube2, cube3, 0.5, 1.0, 0.5, 0.484, 0.014, 0.871)
    reflect(cube1, X)

@child_assembly
def assembly_fn_1(bbox):
    bbox_fn_4 = Cuboid(0.064, 0.68, 0.824, True)
    assembly_fn_4(bbox_fn_4)
    cube1 = Cuboid(0.822, 0.124, 0.545, True)
    attach(bbox_fn_4, bbox, 0.5, 0.0, 0.5, 0.038, 0.023, 0.501)
    attach(cube1, bbox, 0.5, 1.0, 0.5, 0.495, 0.998, 0.469)
    attach(bbox_fn_4, cube1, 0.5, 1.0, 0.5, 0.035, 0.251, 0.484)
    reflect(bbox_fn_4, X)

@root_assembly
def assembly_fn_0():
    bbox = Cuboid(0.847, 1.604, 1.015, True)
    bbox_fn_1 = Cuboid(0.843, 0.791, 0.822, True)
    assembly_fn_1(bbox_fn_1)
    bbox_fn_2 = Cuboid(0.768, 0.195, 0.741, True)
    assembly_fn_2(bbox_fn_2)
    bbox_fn_3 = Cuboid(0.712, 0.849, 0.072, False)
    assembly_fn_3(bbox_fn_3)
    attach(bbox_fn_1, bbox, 0.5, 0.0, 0.5, 0.5, 0.012, 0.558)
    squeeze(bbox_fn_3, bbox, bbox_fn_1, top, 0.52, 0.037)
    attach(bbox_fn_2, bbox_fn_1, 0.508, 0.683, 0.548, 0.5, 1.0, 0.5)`;
