/* <---
  BUBBLE SORTING METHODS TO SORT ELEMENTS IN AN ARRAY FROM SMALLEST TO LARGEST
INTRO:
BUBBLING SORTING IS USED FOR SMALL AMOUNT OF LISTED DATA. IT HAS THE TIME COMPLEXITY OF O(N)2

STEPS:
1. loop through elements
2. select two items; if a > b;
2a. move value of index n to index n+1
3. repeat till all is false
------> */

const items = [1, 2, 4, 3, 9, 8, 6];
const negative_items = [ 2, -4, 3, 9, 8, 6, 5];

// bubble sorting methods
const sort_arr = (arr_extract) => {
    let i = 0;
    for ( i; i < arr_extract.length - 1; i++ ){
    for (let j = 0; j < arr_extract.length - 1- i; j++){
     if ( arr_extract[j] > arr_extract[j+1] ){
        let temp  = arr_extract[j];
        let temp2 = arr_extract[j+1]
        arr_extract[j] = temp2;
        arr_extract[j+1] = temp;
     }
    }
    }
  return(arr_extract)

};


test('test normal integers under 10', () => {
    // unsorted raw data = [1, 2, 4, 3, 9, 8, 6];
    const case_one = sort_arr(items);
    expect(case_one).toEqual([1, 2, 3, 4, 6, 8, 9])
})

test('test for mix integers', () => {
    // unsorted raw data = [ 2, -4, 3, 9, 8, 6, 5];
    const case_one = sort_arr(negative_items);
    console.log({negative_items})
    expect(case_one).toEqual([-4, 2, 3, 5, 6, 8, 9])
})







/*
<!-- MISTAKES, WORKINGS
//
function Swap (arr, first_item, last_item) {
    // console.log({ arr, first_item, last_item })
    const temp = arr[first_item];
     arr[first_item] = arr[last_item];
     arr[last_item] = temp;
    // items.splice(first_item)
    console.log({ arr, first_item, last_item })

}

function printArray(arr, size)
{
console.log({arr, size})

    var i;
    for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
    document.write("\n");
}

// sort array from lowest to highest using Bubble Sorting
function Sort (arr) {
    //   iterate
    let i = 0; // indexing
    let j = 0;

    for (i; i < items.length - 1; i++){
   for(j; j  < items?.length - i-1; j++ ){
        if (items[j] > items[j+1]){
          Swap(items, items[j], items[j+1])
        }
   }
    }
}
*/
