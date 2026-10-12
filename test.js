import assert from 'node:assert';
import test from 'node:test';
import { somme ,ARGUMENTS_NUMBER_ERROR,TYPE_ARGUMENTS_NOT_RESPECTE} from './math.js';

test('cas normal', () => {
    //Arange
    let nbr1 = 2;
    let nbr2 = 3;
    let nbr3 = 14;
    const resultatAttendu = nbr1 + nbr2 + nbr3;

    //Act
    const resultatObtenu = somme(nbr1, nbr2, nbr3);

    //Assert
    assert.strictEqual(resultatAttendu,resultatObtenu);
})

test('cas nombre d arg invalide', () => {
    //Arange
    let nbr1 = 2;

    const resultatAttendu = ARGUMENTS_NUMBER_ERROR ;
    let resultatObtenu;
    //Act
    try {
        somme(nbr1);
    } catch (error) {
        resultatObtenu = error.message
    }
    

    //Assert
    assert.strictEqual(resultatAttendu,resultatObtenu);
})

test('cas type arg non respecté', () => {
    //Arange
    let nbr1 = 2;
    let nbr2 = '2';
    let nbr3 = 2;


    const resultatAttendu = TYPE_ARGUMENTS_NOT_RESPECTE ;
    let resultatObtenu;
    //Act
    try {
        somme(nbr1,nbr2,nbr3);
    } catch (error) {
        resultatObtenu = error.message
    }
})