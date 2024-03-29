let array = [17,10,7,998,4567899,314];
document.write("The given array is "+array,"</br>");
{
document.write("The first element of the array is "+array[0]+ " and its "+prime(array[0]));
}
      
function prime(x)
{
for(let k=2;k<=x/2;k++)
{
    if (x%k==0)
    {
    return("Not prime</br>");
    break;
    }
    if(k==(x/2 | 0))
    return("Prime</br>");
}
}