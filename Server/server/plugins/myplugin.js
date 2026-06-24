import { myutil } from "../utils/myutil";

export default defineNitroPlugin((nitroApp)=> {
    console.log('Nitro plugin:-', nitroApp);
    myutil()
})