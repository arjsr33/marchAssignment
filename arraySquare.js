// Sum of Squares of Array Element
let array=[4,5,6,12,4,21];
var sum=0;
for( i=0 ; i < array.length ; i++)
{
    sum=sum+array[i]*array[i];
}
document.write("Given Array is " +array ,"</br>" );

document.write("Sum of squares of all the numbers in the array is "+sum);
