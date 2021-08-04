import { Selector,t } from "testcafe";
class basepage{
    async settestspeed(speed)
    {
        await t.setTestSpeed(speed)
    }
}
export default basepage