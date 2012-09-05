/*
https://www.interviewstreet.com/challenges/dashboard/#problem/4e90477dbd22b
*/

function insertionSort(arr) {

    var j,
        tmp,
        count = 0;

    for (var i = 1; i < arr.length; i++) {
        j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[ j - 1] = tmp;

            j -= 1;
            count += 1;
        }
    }

    console.log(count);
}

insertionSort([1,1,1,2,2]);
insertionSort([2,1,3,1,2]);
insertionSort([62935,82200,877141,585771,619073,183328,809452,189197,41883,
                777611,360495,295099,198393,308583,537954,11054,515803,403848]);


