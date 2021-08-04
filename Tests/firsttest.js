import { Selector } from 'testcafe';
import Navbar from '../page_objects/components/Navbar'
import searchresultpage from '../page_objects/pages/searchresultpage';

const navbar=new Navbar()
const srp=new searchresultpage()

fixture `first test`
    .page `https://my.xfinity.com/?cid=cust`
    .beforeEach(async t => {
   // await t.setTestSpeed(0.1)
   srp.settestspeed(0.1)
    });
    
test('My first test', async t => {
    console.log("Comcast website");
//    await t.typeText(navbar.searchbox,'Modem',{ paste: true })
//    const searchbutton=Selector('.search-button').child('svg')
//    await t.click(searchbutton)
   navbar.search('Modem')
   await t.expect((srp.linktext).innerText).contains('Modem - Xfinity.com Search')
  
}); 