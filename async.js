// Asyc frena el javascript y hace que se lea de manera correcta.

const n1 = () => {
 return 1;
};
const n2 = () => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            reject (2); 
            }, 2000);
    })

}
   const n3 = () => {
    return 3;
   };
const showNumbers = async () => {
    try {
        console.log(n1());
console.log( await n2());
console.log(n3());
    } catch(error) {
        console.log('Hubo un error y fue', error );
    }
};

showNumbers();
