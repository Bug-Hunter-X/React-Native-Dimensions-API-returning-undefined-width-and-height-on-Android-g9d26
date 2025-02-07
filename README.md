# React Native Dimensions API Returning Undefined Width and Height on Android

This repository demonstrates a common issue in React Native where the `Dimensions` API returns `undefined` width and height values, particularly on Android devices. This often happens during app initialization or when the screen orientation changes.

The `DimensionsBug.js` file shows the problematic code that leads to this error.  The `DimensionsBugSolution.js` file provides a solution using `Dimensions.addEventListener` to listen for changes in dimensions.

## Problem

Incorrectly using `Dimensions.get('window')` can lead to `undefined` width and height, causing crashes or incorrect layouts.

## Solution

Using `Dimensions.addEventListener` ensures that the application correctly handles changes in screen dimensions and prevents undefined values.