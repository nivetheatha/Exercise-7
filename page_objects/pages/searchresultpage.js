import { Selector,t } from "testcafe";
import basepage from "./basepage";
class searchresultpage extends basepage{
    constructor()
    {
    super()
this.linktext=Selector('title')
    }
}
export default searchresultpage