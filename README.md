# Problem Solving — Assignment 4

All 20 solutions are implemented in one file: [solution.js](solution.js). The exact function names and parameter order follow the assessment. Each problem has a numbered title and complexity comment. In-place problems mutate their input and return no value where required.

## Run tests

Use Node.js 20.19+ or 22.12+:

```sh
node --test solution.test.cjs
```

The tests cover every supplied example, boundary inputs, in-place behavior, large digit arrays without numeric conversion, and an additional deterministic brute-force comparison for 3Sum.

## Source

[STN-7 Problem Solving Assessment List](https://docs.google.com/document/d/1JUfENDeplDlPDhM8GXkt2g_vOHu4z9_LMiSDlh5kn8I/edit)

## Clarification about Problem 20

Example 3 lists `inter` for `["interspecies", "interstellar", "interstate"]`. All three strings actually start with `inters`. The implementation returns `inters`, following the stated requirement to return the longest common prefix. This discrepancy is documented rather than hardcoding an incorrect sample output.

## Submission

Publish this directory as your own separate GitHub repository. The test file contains tests only; all problem solutions remain in the single solution file. No dependencies are required.
