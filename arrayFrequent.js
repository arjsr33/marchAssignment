let array = [7,7,3,4,5,3,2,1,3,5,3,6,7,8,9,4,5,6,7,89,4,5,3,2,45,2,45,3,234,54,3,2,457,7,678];
var count = {};
array.forEach(element => {
    if(count[element])
    count[element]++;
    else
    count[element]=1;
});
var freq = 0;
var freqnum = 0;
for (const element in count) {
    if (count[element]>freq)
    {
        freqnum=element;
        freq=count[element];
    }

}
console.log(freqnum);
console.log(freq);

document.write("The array used to find most frequent element "+array, "</br>");
document.write("Most Frequently occuring number is "+freqnum);
document.write("</br> Number of occurences of this number in the array is "+freq);


    

