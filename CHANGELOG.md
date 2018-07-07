# Changelog

## v0.4.0

### BREAKING CHANGES

- Renamed `gets` to `props` to meep the convention consistent
- Renamed `includes` to `contains` for strings (swapped with array)
- Renamed `contains` to `includes` for arrays (swapped with string)
- Removed `deepClone` because `assign` ultimately generates a brand new object when ran

### New

- Added `join` string function which accepts a string and an array to generate a joined string
- Added `branch` function which takes 3 functions and a value, and will run either the 2nd or 3rd function based on if the first passes
- Added `ap` function which takes an array of functions to be applied to an array of data, concating the results together
- Added `on` function which takes 2 functions and 2 values, applies the 2nd function to both values and then applies the first function onto those

### Changes

- Converted the function used by compact to just be `identity`
- Added some slight test additions to `pipe`
- Tweaked documentation automation to make sure the main site is always up to date

## v0.3.0

### Changes

- Re organized the `src` and `test` folder contents into seperate folders based on category
  - This is no way affects usage, you can still do `import isEmpty from 'kyanite/isEmpty'` it's more to make it easier to work with and avoid duplication
- `findIndex` returns a maybe, so instead of a -1 if no index is found it will return `undefined`
- The `src` folder is now included on install, so if you want to use the es6 versions of the module, you can import them from `kyanite/src/type/function`
  - An example might be for curry it'd be: `import curry from 'kyanite/src/function/curry'`

### Fixes

- A few documentation fixes which also involved some missing information/categories

## v0.2.2

### New

- Added `encase` which encases the provided function with try catch to safely execute the function
- Added `drop` which takes an array and drops the requested number of values from the front
- Added `take` which pulls values from an array up until the point specified (the opposite of drop)
- Added `sortWith` which takes an array of functions and goes through the array when it encounters ties with the data while sorting it

## v0.2.1

### New

- Added `findIndex` function which takes a function and array and returns the first value from the array that passes the function
- Added `groupBy` function which groups the values of an array into common properties of an object
- Added `sortBy` function which sorts an array based on the values when ran through a function
- Added `descendBy` function which accepts a function to run against values for sorting in descending order
- Added `ascendBy` function which accepts a function to run against values for sorting in ascending order

## v0.2.0

### New

- Added `ascend` function which can be used with sort for ascending order
- Added `descend` function which can be used with sort for descending order
- Added `both` function which accepts 2 functions and a value, returns true if both functions pass, otherwise returns false

### Improved

- Added ability to handle string numbers to `add` function

## v0.1.0

### BREAKING CHANGES (If converting from dusty-fns)

- `fuzzySearch` params have been swapped, so now its `fuzzySearch(needle, haystack)` instead
- Renamed `removeAt` to just  `remove`
- Renamed `replaceAt` to just `update`
- `flatten` has been removed, consider using `concat` and `concatMap` instead
- `uniq` now only looks for an array, use `uniqBy` in order to use the old functionality
- Removed `clone` since `assign` is essentially the same thing with more capabilities
- Function params passed to `juxt` should now be contained within a single array
- Changed the return of `mean` so it returns 0 instead of `NaN` for bad arguments passed in
- `isEmpty` now handles values such as `null`, `undefined`, `NaN`, and `Booleans` it will return `true` for ALL of these
- `empty` no longer throws an error for non "emptyables". Instead it returns `undefined`

### Fixed

- Addressed copy and paste errors for `prepend` docs
- Addressed several documentation errors

### Improved

- Some more tweaks to internal documentation scripts
- Replaced `ava` and converted back to `tape` (Yay!)
- `max` now uses `last` internally instead of `nth` should improve is seperate build size/performance
- `min` now uses `first` internally instead of `nth` should improve is seperate build size/performance
- Removed `functionName` internal since it's no longer being used
- Improved build size of `isEqual` by removing impossible logic
- Added onto `identical` documentation with more examples
- Re-wrote `assign` for better optimization,

### New

- Added `path` function to safely navigate objects that may or may not have properties
- Added `sift` function which works a lot like `filter` but with `Object` data types
- Added `whole` function which works a lot like `every` but with `Object` data types
- Added `any` function which works a lot like `some` but with `Object` data types
- Added `insert` function which inserts a data value into a specified index of an array
- Added `height` function which works like length, however it handles object data types
- Added `gets` function which goes through an object to pull values requested in an array
- Added `plan` function which takes a schema object of functions to apply to a matching object of data
- Added `gt` function which compares the passed in values to determine if one is greater than the other
- Added `gte` function which compares the passed in values to determine if one is greater than or equal to the other
- Added `lt` function which compares the passed in values to determine if one is less than the other
- Added `lte` function which compares the passed in values to determine if one is less than or equal to the other
- Added `when` function which uses a logic function to trigger an action function if the arguments are true
- Added `concat` function which concats the values of an array to a new array
- Added `concatMap` function which applies a function to the values of an array and concats them
- Added `compact` function which takes an array and removes all falsy values from it
- Added `uniqBy` function which does what the original `uniq` was built to do
