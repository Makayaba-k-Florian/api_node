export const ARGUMENTS_NUMBER_ERROR = "Le nombre d'ararguments ne sont pas valid"
export const TYPE_ARGUMENTS_NOT_RESPECTE = "Type de parametre non respecté"

export const somme = (nbr1,nbr2,nbr3) => {
    if(nbr1 ===undefined || nbr2===undefined || nbr3===undefined ){
        throw new Error(ARGUMENTS_NUMBER_ERROR);
    }
    if(typeof nbr1 !== 'number' || typeof nbr2 !== 'number' || typeof nbr3 !== 'number' ){
        throw new Error(TYPE_ARGUMENTS_NOT_RESPECTE);

    }
    return nbr1+nbr2+nbr3;

}



    
