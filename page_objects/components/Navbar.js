import { Selector,t } from "testcafe";
class Navbar
{
    constructor()
    {
        this.searchbox=Selector('#main-search-field')
    }

    async search(text)
    {
        await t
        .typeText(this.searchbox,text,{paste:true})
        .pressKey('enter')
    }
}

export default Navbar