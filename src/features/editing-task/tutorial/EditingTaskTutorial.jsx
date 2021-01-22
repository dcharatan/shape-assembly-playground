import React from 'react';
import { useSelector } from 'react-redux';
import Markdown from './Markdown';
import '../../../index.scss';

const page0 = `# Tutorial: Cuboids
The \`Cuboid\` command is ShapeAssembly's basic building block. Its format is as follows:

\`cuboid_name = Cuboid(length, width, height, aligned)\`

You can modify numeric parameters by clicking on them and dragging the slider that appears. Try to modify the cuboid in the 3D viewer so that it matches the editing target. Note that a cuboid cannot be larger than its bounding box, so you'll have to adjust the bounding box first. When you reduce the size of a bounding box, all cuboids within that bounding box are automatically clamped to the bounding box's dimensions.

To help with fine adjustments, you can toggle a wireframe view of editing target using the \`Show Target (Wireframe)\` button. Click \`Complete Task\` once you're ready to move on.`;

const page1 = `# Tutorial: Attachments
The \`attach\` command is used to connect cuboids created by the \`Cuboid\` command. Its format is as follows:

\`attach(cuboid_1, cuboid_2, x1, y1, z1, x2, y2, z2)\`

The \`attach\` in the code below moves \`cuboid_1\` so that the coordinates (\`x1\`, \`y1\`, \`z1\`) in \`cuboid_1\`, which range from 0 to 1 and are relative to the cuboid's dimensions, line up with the corresponding coordinates (\`x2\`, \`y2\`, \`z2\`) in \`cuboid_2\`.

Cuboids can be rotated and stretched via repeated applications of the \`attach\` statement. The first \`attach\` moves a cuboid without changing its shape, while subsequent \`attach\`es can deform the cuboid.`;

const page2 = `# Tutorial: Squeeze
The \`squeeze\` command is an advanced version of the \`attach\` command. Its format is as follows:

\`squeeze(target, side_1, side_2, face, x, y)\`

This command moves the cuboid \`target\` so that it's between the cuboids \`side_1\` and \`side_2\`. The parameter \`face\` specifies which face (top, bot, left, right, front or back) of \`side_1\` the \`target\` is connected to, while \`x\` and \`y\` specify where on the face the connection lies.

You may have noticed that you can hover over cuboids and function names in the text to highlight the cuboids they're associated with. You can also do the reverse, hovering over cuboids in the 3D viewer to highlight them in the code.`;

const page3 = `# Tutorial: Reflection
The \`reflect\` command is used to mirror a cuboid along an axis. Its format is as follows:

\`reflect(target, axis)\`

The parameter \`axis\` can be \`X\`, \`Y\` or \`Z\`. The example below shows the \`reflect\` command applied to the cuboid \`sub_bbox_1\`, which has been turned into a bounding box for a subassembly using the \`make_subassembly_1\` function. In ShapeAssembly, any cuboid can be used as the bounding box for a subassembly if it's fed into a special function marked with the \`@child_assembly\` decorator. When cuboids that have become subassemblies are reflected, their contents are cloned and reflected as well.`;

const page4 = `# Tutorial: Translation (Linear Patterning)
The \`translate\` command is used to clone a cuboid several times along an axis. Its format is as follows:

\`translate(target, axis, num_clones, distance)\`

The parameter \`axis\` can be \`X\`, \`Y\` or \`Z\`, while the parameters \`num_clones\` and \`distance\` dictate the number of clones in the symmetry group and the symmetry group's (spatial) extent respectively.

Now that you've learned about all of ShapeAssembly's operators, you're ready to begin your editing task! You'll have to modify the given shape to match the target by adjusting the program's numeric parameters. Try to spend a few minutes per shape and get as close as possible to the target. Remember that the \`Show Target (Wireframe)\` option can be very helpful for fine adjustments!`;

const page5Baseline = `# Practice Task
Here's an example of a task you will encounter. Practice adjusting the program to match the target shape. Once you feel comfortable with the editing process, you can move on to the main editing tasks.`;

const page5Abstraction = `# Practice Task and Tutorial: Abstraction
Throughout the editing task, you will find a series of functions called \`abstraction_<number>\`. These so-called abstractions are combinations of the aforementioned ShapeAssembly functions and other abstractions. Practice adjusting an abstraction's parameters in the program below. Once you feel comfortable with the editing process, you can move on to the main editing tasks.`;

const EditingTaskTutorial = () => {
  const currentTaskIndex = useSelector((state) => state.editingTaskSlice.currentTaskIndex);
  const studyCondition = useSelector((state) => state.editingTaskSlice.studyCondition);

  const page = {
    0: page0,
    1: page1,
    2: page2,
    3: page3,
    4: page4,
    5: studyCondition === 1 ? page5Baseline : page5Abstraction,
  }[currentTaskIndex];
  if (!page) {
    return null;
  }

  return (
    <div className="border rounded p-3 mb-2" variant="secondary">
      <Markdown>{page}</Markdown>
    </div>
  );
};

export default EditingTaskTutorial;
