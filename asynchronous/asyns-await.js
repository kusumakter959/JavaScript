// eta function er modde arekta function call korte thake, Infinity, jar karone hendle kora koshto hoye jai, ei jonno promiss uase kora hoy

const paymentSuccess = true;
const mark = 90;

function enroll() {
  console.log("Course enrollment is in progress");
  const promiss = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment faild");
      }
    }, 2000);
  });
  return promiss;
}

function progress() {
  console.log("Course on Progress...");
  const promiss = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not enught marks");
      }
    }, 3000);
  });

  return promiss;
}

function getcertificate() {
  console.log("Preparing your certificate");
  const promiss = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats!");
    }, 1000);
  });
  return promiss;
}
enroll(function () {
  progress(getcertificate);
});

async function course() {
  try {
    await enroll();
    await progress();
    const message = await getcertificate();
    console.log(message);
  } catch(err) {
    console.log(err);
  }
}
course();
// enroll()
//     .then(progress)
//     .then(getcertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
