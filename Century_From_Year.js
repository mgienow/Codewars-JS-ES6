/*
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
*/

function century(year) {
//divide the year by 100 to get the century, then Math.floor
//to round down to nearest whole
  let century = Math.floor(year/100);
//if century is the same as the year divide by 100 then it's a millennial
//year like 1900 or 2000 and so the century will be the same
  if(century == year/100){
  return(century);
//BUT if it's not equal, it is 1901 or 2007 etc, and you've moved to the NEXT
//century -- so return century + 1
  } else return(century + 1)
}

//But i forgot about Math.ceil, which rounds UP.  SO we don't need
//to compare to weed out the millennium years, just round up!
function century(year) {
  // Finish this :)
  let century = Math.ceil(year/100);
return(century)

}
//oh yeah, arrow function
const century = year => Math.ceil(year/100)
