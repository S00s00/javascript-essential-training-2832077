/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const pillow = {
    color:"white",
    size :{
        width:59,
        length: 60,
    },
    sponges:{
        shape:"round",
        color:"brown"
    },
    covered: false,
    cover(addcover){
            this.covered = addcover;
    }
}

console.log("This is my pillow", pillow);