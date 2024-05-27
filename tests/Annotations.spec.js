const {test,expect} = require ('@playwright/test')
// //Only
// test.skip('test1',async({page})=>{
// console.log("this test 1");
  
// })
// //Skip
// test.skip('test2',async({page})=>{
//     console.log("this test 2");
  
// })
//Skip based on condition
// test('test3',async({page,browserName})=>{
    
//     if(browserName==='chromium'){
//         test.skip()
//         console.log("this test 3"); 
//     }
   
// })
//fixme
// test.fixme('test4',async({page})=>{

//     console.log("this test 4");
// })
// test('test5',async({page})=>{
//     test.fail() //expected to fail
//     console.log("this test 5");
//     expect(1).toBe(1) //actual passed
  
// })
// test('test6',async({page,browserName})=>{
//     if(browserName==='chromium'){
//         test.fail()
//     }
//     console.log("this test 5"); 
// })
//slow : increase the timout to triple
test('test7',async({page,browserName})=>{
    //test.slow()
    test.setTimeout(5000)
    console.log("this test 5"); 
})