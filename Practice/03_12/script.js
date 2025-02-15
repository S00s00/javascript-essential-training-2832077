/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Somepack from "./Somepack";

const somepack = new Somepack(
    "Some pack name",
    30,
    "Green",
    5,
    20,
    20,
    true,
    "2025-01-01",
    "something"
);

console.log("this id the created pack: ", somepack)