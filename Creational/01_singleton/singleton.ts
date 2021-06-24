class Matherland {

    private static country : Matherland ;

    private constructor () {}

    public static getCountry(): Matherland {
        if (!Matherland.country) {
            Matherland.country = new Matherland();
        }
        return Matherland.country;
    }
}

const s1 = Matherland.getCountry();
const s2 = Matherland.getCountry();

console.log(s1===s2);