
export const FILE_ARGUMENT_VALUE_ERROR = "le fichier n'est pas un txt";

export function analyseFile(file_name){

    if(typeof file_name !== 'string' || typeof file_name === 'string' && !file_name.endsWith('.txt')){
        return FILE_ARGUMENT_VALUE_ERROR;
    }

}