/* Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

Test.assertEquals(bmi(80, 1.80), "Normal");
*/

/*This was my first version:*/
function bmi(weight, height) {
  var heightSq = Math.pow(height, 2);
  var result = weight/(heightSq);
  if(result<=18.5) {
  return "Underweight";
  } else if(result <= 25.0) {
     return 'Normal';
      } else if(result <= 30.0) {
        return 'Overweight';
        } else {
          return 'Obese';
          }
}

/*Here is my second version, refactored to ES6,
which I am trying to learn. I still need to think it
through in ES5 terms first, but baby steps...*/

function bmi(weight, height) {
  const bmi = weight/Math.pow(height, 2);

  return bmi<=18.5 ? 'Underweight' : bmi<=25 ? 'Normal' : bmi<=30.0 ? 'Overweight' : 'Obese';
}
