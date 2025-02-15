import Backpack from "../../03_13/Backpack";

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
            dateAcquired,
            somefeature
          ){
            super( name,volume,color,pocketNum,strapLengthL,strapLengthR,lidOpen,dateAcquired);
            this.somefeature =somefeature;
          }

          someMethod(){
            console.log("this must do something");
          }
    
}

export default Somepack;