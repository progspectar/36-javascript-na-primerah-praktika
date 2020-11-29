
//JS
document.addEventListener('DOMContentLoaded', function () {

  var myInput = document.querySelector('.input-test');
  var myRadi = document.getElementsByName('r1');
  nextSmaller(133232766512347);

  myInput.addEventListener('click', function () {
    for (let index = 0; index < myRadi.length; index++) {
      //  console.log(myRadi[index]);
      if (myRadi[index].checked) {
        let el = myRadi[index];
        console.log(el.attributes['value'].value)
        var txt = "";
        for (let i = 0; i < el.attributes.length; i++) {
          txt = txt + el.attributes[i].name + " = " + el.attributes[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = txt;
      }
    }

  });
}, false);

function nextSmaller(n) {
  //133232766512347
  // const rev = [...`${n}`].map(Number).reverse()
  // const idx1 = rev.findIndex((v, i, a) => i && a[i - 1] < v)

  const rev1 = [...`${n}`]
  const rev2 = [...n]

  let a = [...`${n}`]
  const rev = [...`${n}`].map(Number).reverse()
  const idx1 = rev.findIndex((v, i, a) => i && a[i - 1] < v)

  if (idx1 < 0) return idx1

  const idx2 = rev.slice(0, idx1).findIndex(v => v < rev[idx1])
  if (idx2 < 0) return idx2;

  [rev[idx1], rev[idx2]] = [rev[idx2], rev[idx1]]

  const nn1 = "111"
  const nn = +[1, 1, 1]
  console.log(rev1)
  console.log(rev2)
  return nn


}