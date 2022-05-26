function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    let sumOfCoins = 0;
    for (const coin of coins) {
        if (coin > sumOfCoins + 1) {
            return sumOfCoins + 1;
        } else {
            sumOfCoins += coin
        }
    }
    return sumOfCoins + 1;
}
  // [1,2,5] => 4
  //  [1, 1, 1, 1, 1] => 6
  // [1, 5, 1, 1, 1, 10, 15, 20, 100] => 55
/*
         [5, 7, 1, 1, 2, 3, 22] => 20
 sort => [1, 1, 2, 3, 5, 7, 22]
 
coin summ       
  1 =>  1 +1 =  2 > next Coin 1
  1 =>  2 +1 =  3 > next Coin 1
  2 =>  4 +1 =  5 > next Coin 3
  3 =>  7 +1 =  8 > next Coin 5
  5 => 12 +1 = 13 > next Coin 7
  7 => 19 +1 = 20 < next Coin 22  find =20 
  22 => 41
 
*/