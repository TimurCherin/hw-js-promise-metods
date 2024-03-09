                                                            // ex 1
const delayedPromise = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Resolved after ${ms}ms`),ms)
    })
  }
  const promiseMasive =  [delayedPromise(2000), delayedPromise(1000),delayedPromise(1500),delayedPromise(2500), delayedPromise(3000)]
  Promise.all(promiseMasive).then(console.log(promiseMasive))
                                                            // ex 2
const randomDelay = value => {
    const randomTime = Math.floor(Math.random() * 4000) + 1000;
    return new Promise(resolve => {
        setTimeout(() => resolve(`Resolved after ${randomTime}ms`),randomTime)
    })
}
const randomTimeMasive =  [randomDelay("apple"), randomDelay("green"),randomDelay("work"),randomDelay("job"), randomDelay("world")]
Promise.race(randomTimeMasive).then((ad)=> {
    console.log("Fast Primise is ", ad);
    })