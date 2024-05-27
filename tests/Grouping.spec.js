const { test, expect } = require('@playwright/test')
//import { test, expect } from '@playwright/test'

test.beforeAll(async()=>{
console.log("this is before all");
})
test.afterAll(async()=>{
console.log("this is after All");
})
test.beforeEach(async()=>{
console.log("this is before Each");
})
test.afterEach(async()=>{
console.log("this is after Each");
})




test.describe('group 1', () => {//describe without async + without {page}

    test('test1', async ({ page }) => {
        console.log("this is test1");
    })
    test('test2', async ({ page }) => {
        console.log("this is test2");
    })
})

test.describe('group 2',  () => {

    test('test3', async ({ page }) => {
        console.log("this is test3");
    })
    test('test4', async ({ page }) => {
        console.log("this is test4");
    })
})
