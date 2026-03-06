// write a program using promise.all() inside an async/ await to await 3 promises. compare it's results with the case where we await these promise one by one

function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is the task 1");
    }, 500);
  });
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is the task 2");
    }, 800);
  });
}

function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ths is task 3");
    }, 1000);
  });
}

async function onlyPromise() {
  console.log("---starting one by one--- ");
  console.time("sequential time ");
  console.log(await func1());
  console.log(await func2());
  console.log(await func3());

  console.timeEnd("sequential time ");
}
onlyPromise();

async function allPromise() {
  console.log("---starting from here  ");
  console.time("parallel time ");
  console.log(await Promise.all([func1(), func2(), func3()]));

  console.timeEnd("parallel time ");
}

allPromise();
