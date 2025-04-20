import { supabase } from "../../../supabaseSettings/supabaseClient";

async function callGetSettings(typeOfWork, category, size) {
    const {data} = await supabase.rpc('get_Settings', {
        typeOfWork: typeOfWork,
        category: category,
        size: size
    })

    console.log('Result:', data)
    return data;
}

export default callGetSettings