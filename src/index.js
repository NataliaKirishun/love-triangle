/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  let result=0;
    for (let i=0; i<arr.length;i++) {
        let a=arr[i],
            b=arr[a-1],
            c=arr[b-1];
        if ((arr[c-1]===a)&&(a!==b)&&(b!==c)) {
            arr[i]=0;
            arr[a-1]=0;
            arr[b-1]=0;
            result++;           
        }
    };


    return result;
};
