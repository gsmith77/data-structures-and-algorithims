// Solution to leetcode problem 1041: Robot Bounded In Circle
// https://poitevinpm.medium.com/solution-to-leetcode-problem-1041-robot-bounded-in-circle-544dbcce3335

// Time - Big O(n)
// Space - O(1)
// Level: Medium

// function isRobotBounded(instructions) {
//   // robot is bounded if:
//   // end position is 0,0
//   // OR
//   // end direction is not North

//   if (!instructions || !instructions?.length) {
//     return true;
//   }

//   let x = 0;
//   let y = 0;
//   let direction = "N"; // we start facing north!

//   for (const instruction of instructions) {
//     if (instruction == "G") {
//       // increment x or y
//       // check which you are facing to know which of the 4 quardrants to explore
//       if (direction == "N") {
//         y++;
//       } else if (direction == "W") {
//         x--;
//       } else if (direction == "S") {
//         y--;
//       } else if (direction == "E") {
//         x++;
//       }
//     } else if (instruction == "L") {
//       // change direction
//       if (direction == "N") {
//         direction = "W";
//       } else if (direction == "W") {
//         direction = "S";
//       } else if (direction == "S") {
//         direction = "E";
//       } else if (direction == "E") {
//         direction = "N";
//       }
//     } else if (instruction === "R") {
//       // change direction
//       if (direction == "N") {
//         direction = "E";
//       } else if (direction == "E") {
//         direction = "S";
//       } else if (direction == "S") {
//         direction = "W";
//       } else if (direction == "W") {
//         direction = "N";
//       }
//     }
//   }

//   // if we aren't going north then we aren't running from the start place
//   return (x == 0 && y == 0) || direction != "N";
// }

function isRobotBounded(instructions) {
  // need x and y for my axis
  // need to know the directon we are facing to increment/decrement our x and y

  if (!instructions || typeof instructions !== "string") {
    return;
  }

  let x = 0;
  let y = 0;
  let direction = "N"; // we start facing north

  // Answer:
  // we will get back to 0,0 if we turn in either 1, 2 or 4 iterations
  // therefore we can check that if we aren't facing N then we have turned
  // which justifies the conclusion that we will return back to 0,0 in 1, 2,
  // or 4 iterations

  // we know we are going to return back to 0,0 when
  // we are not facing N
  // and
  // we are at 0,0
  // and
  // if there is no instructions or instruction

  for (const i of instructions) {
    // increment / decrement
    if (i == "G") {
      if (direction == "N") {
        y++;
      } else if (direction == "W") {
        x--;
      } else if (direction == "S") {
        y--;
      } else if (direction == "E") {
        x++;
      }
    } else if (i == "L") {
      if (direction == "N") {
        direction = "W";
      } else if (direction == "W") {
        direction = "S";
      } else if (direction == "S") {
        direction = "E";
      } else if (direction == "E") {
        direction = "N";
      }
    } else if (i == "R") {
      if (direction == "N") {
        direction = "E";
      } else if (direction == "E") {
        direction = "S";
      } else if (direction == "S") {
        direction = "W";
      } else if (direction == "W") {
        direction = "N";
      }
    }
  }

  return (x == 0 && y == 0) || direction != "N";
}

// Test cases
const instructionsInputs = ["GGLLGG", "GG", "GL", "GR", "GGRRGG", "GGRG", ""];
const expectedResult = [true, false, true, true, true, true, true, true, true];
instructionsInputs.forEach((instruction, i) => {
  const result = isRobotBounded(instruction);
  if (result === expectedResult[i]) {
    console.log("Passed for input -", instruction);
  } else {
    console.log("Failed for input -", instruction);
  }
});
