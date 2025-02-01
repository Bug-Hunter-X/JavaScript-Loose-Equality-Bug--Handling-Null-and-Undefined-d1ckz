# JavaScript Loose Equality Bug: Handling Null and Undefined

This repository demonstrates a common yet subtle bug in JavaScript related to loose equality (`==`) when comparing `null` and `undefined` values.

The `bug.js` file contains code that incorrectly uses loose equality to handle both `null` and `undefined`, causing unexpected behavior when different treatment is required.

The `bugSolution.js` file provides a corrected version of the code, showcasing how to use strict equality (`===`) for accurate comparison between `null` and `undefined`.

## How to Reproduce the Bug
1. Clone the repository.
2. Run `bug.js` in a JavaScript environment (e.g., Node.js, browser console).
3. Observe the output. Both `null` and `undefined` produce the same result, which may not be the intended behavior.

## Solution
The solution lies in utilizing the strict equality operator (`===`) to differentiate between `null` and `undefined` values.