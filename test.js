const somme = () => { }

/**
 * somme : nbr1:number,nbr2:number,nbr3:number ->number
 * cas 1:normal : 2,3,5 -> 10
 * cas 2:non normal : propager une erreur (avec le bon message)
 * ->2.1 argument qui manque
 * ->2.2 valeur non number(NAN)
 */

test_somme_cas_normal();
test_somme_cas_non__normal();

function test_somme_cas_normal() {
    //Arange
    let nbr1 = 2;
    let nbr2 = 3;
    let nbr3 = 14;
    const resultatAttendu = nbr1 + nbr2 + nbr3;

    //Act
    const resultatObtenu = somme(nbr1, nbr2, nbr3);

    //Assert
    if (resultatAttendu === resultatObtenu) {
        console.log('PASSED.........ok...ok');
    } else {
        console.log("FAILED...............")
    }


}

function test_somme_cas_non__normal() {

    //2.1 argument qui manque

    //nbr1 manquant
    {   //Arange
        let nbr2 = 3;
        let nbr3 = 14;
        const resultatAttendu = nbr2 + nbr3;

        //Act
        const resultatObtenu = somme(nbr2, nbr3);

        //Assert
        if (resultatAttendu === resultatObtenu) {
            console.log('PASSED.........ok...ok');
        } else {
            console.log("FAILED...............")
        }
    }
    //nbr1 et nbr2 manquant
    {   //Arange
        let nbr3 = 14;
        const resultatAttendu = nbr3;

        //Act
        const resultatObtenu = somme(nbr3);

        //Assert
        if (resultatAttendu === resultatObtenu) {
            console.log('PASSED.........ok...ok');
        } else {
            console.log("FAILED...............")
        }
    }

    //nbr1 , nbr2 et nbr3 manquant
    {   //Arange

        const resultatAttendu = 0;

        //Act
        const resultatObtenu = somme();

        //Assert
        if (resultatAttendu === resultatObtenu) {
            console.log('PASSED.........ok...ok');
        } else {
            console.log("FAILED...............")
        }
    }

    //2.2 valeur non number(NAN)
    {
        //Arange
        let nbr1 = 2;
        let nbr2 = "9";
        let nbr3 = 14;
        const resultatAttendu = "Error:";

        //Act
        const resultatObtenu = somme(nbr1, nbr2, nbr3);

        //Assert
        if (resultatAttendu === resultatObtenu) {
            console.log('PASSED.........ok...ok');
        } else {
            console.log("FAILED...............")
        }
    }



}

