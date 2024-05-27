const { test, expect } = require('@playwright/test');
const data1 = {"createdAt": "2024-03-28T08:06:59.287Z","name": "saif","job": "Senior Automation tester"}

var idUser;
//Using request as fixture , we can perform Api testing
test('Get User', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json());
    expect(response.status()).toBe(200)



})
test('Create User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users/', {
        data: {
            data1
        },
        headers: {
            "Accept": "application/json"
        }
    });
    //console.log(await response.json());
    expect(response.status()).toBe(201)
    expect(response.statusText()).toEqual('Created')
    expect(await response.json()).toContain(data1)
    var res = await response.json()
    console.log(res);
   
    idUser = res.id
    console.log(await idUser);


})
test('Update User', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + idUser, {
        data: {
            data1
        },
        headers: {
            "Accept": "application/json"
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200)
})
test('Delete User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + idUser)
    expect(response.status()).toBe(204)

})

