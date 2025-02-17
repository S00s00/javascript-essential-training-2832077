import Backpack from "./Backpack.js";

// eslint-disable-next-line no-unused-vars
class Somepack extends Backpack{
        constructor(
            name,
            volume,
            color,
            pocketNum,
            strapLengthL,
            strapLengthR,
            lidOpen,
            somefeature
          ){
            super( name,volume,color,pocketNum,strapLengthL,strapLengthR,lidOpen);
            this.somefeature =somefeature;
          }

          someMethod(){
            console.log("this must do something");
          }
    
}

export default Somepack;