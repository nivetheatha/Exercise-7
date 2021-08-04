import {t}  from 'testcafe'
export async function login(username,password)
{
    await t.typeText('#user',username,{paste:true})
    await t.typeText('#passwd',password,{paste:true})
    await t.click('.submit')

}