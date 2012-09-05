
function cardShuffling(n,k) {

    var tmp,
        start_seq,
        split_size,
        index = 0,
        i=1,
        cards = [],
        piles = [],
        new_stack = [],
        end_seq = '',
        count = 0;

    //creating the initial stack of cards
    //ele 0 is top and ele n is bottom
    //we now have a seq c1c2c3c4...cn
    while (i <= n) {
        cards.push("c" + i);
        i++;
    }

    split_size = n / k;
    start_seq = cards.join();

    while (start_seq !== end_seq) {

        //create the k piles
        for (var j = 0; j < k; j++) {
            tmp = '';
            for (var m = 0; m < split_size; m++) {

                //add '|' as a separator
                tmp += cards[j*split_size + m] + "|";
            }
            piles.push(tmp);
        }

        //the bottom one is the first pile
        piles.reverse();

        while (index < split_size) {
            //take the ith ele of each pile
            for (j = 0; j < piles.length; j++) {
                new_stack.push(piles[j].split("|")[index]);
            }
            index++;
        }

        end_seq = new_stack.join();
        cards = new_stack;

        //reset everything for next iteration
        piles = [];
        new_stack = [];
        index = 0;

        //update required count
        count += 1;

    }


    console.log(count);
}

cardShuffling(6,3); //6
cardShuffling(4,2); //4
cardShuffling(5,5); //2

