10 % is not so very much, but I agree that the code we agreed on 

// 2️⃣ BUBBLE SORT (2 Loops) = "Viele MAX-Vergleiche"
const input = [5,2,8,1,9];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - 1; j++) {
    if (input[j] > input[j+1]) { /* TAUSCH */ }
  }
}

is very good.

in the sort visualiser I see it in action:

the first bar is compared with the next neighbour and
-  if it is bigger (a > b) it continues and visually "moves" to the right.
- if the neighbour on the right is bigger, that bar becomes the next "max" and max moves on to the right.

in the end, the highest bars end up on the right. and then the next highest and so on.



this is compatible with comparing j with j+1

I actually do not know how to visualise comparing i with j