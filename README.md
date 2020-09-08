# ShapeAssembly Playground
This interactive web app allows you to try out the ShapeAssembly language. It's based on the [TypeScript ShapeAssembly parser](https://github.com/dcharatan/shape-assembly-parser), which transcribes the human-readable, Python-like ShapeAssembly syntax described in the parser's README to executable ShapeAssembly code. Note that a running ShapeAssembly server is required for full playground functionality.

Here's an example of the ShapeAssembly code for a simple chair:

```
@child_assembly
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
    reflect(arm_bbox, X)
```

## Quick Start

To get started, clone this repository, run `yarn` to install the dependencies, and then run `yarn start` to start the server. This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
