import { Selector } from 'testcafe';
import {login} from '../helper'
fixture `Login`
    .page `https://login.xfinity.com/login`
    

    test('Invalid Login', async t => {
    
        
        // const login=Selector('#user')
        // await t.expect(login.exists).ok()
        // await t.typeText(login,"nivethetha.e@gmail.com")
        // const password=Selector("#passwd")
        // await t.expect(password.exists).ok()
        // await t.typeText(password,"software01")
        // const submit=Selector('.submit')
        // await t.click(submit)
        await login("nivthetha.e@gmail.com","software01")

        const errormessage=Selector('#error').innerText
        await t.expect(errormessage).contains("The Xfinity ID or password you entered was incorrect. Please try again.")


    })

    
    