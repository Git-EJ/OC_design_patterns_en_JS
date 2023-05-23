class Movie {
    constructor(data) {
        // this._title = {} //initialise la propriété title comme un objet vide avant d'affecter des valeurs à ses propriétés.
        // this._title._fr = data.title.fr
        // this._title._en = data.title.en
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    // get title() {
    //     if (!this._title._fr && !this._title._en) {
    //     return `Missing Title`

    //     } else if ( this._title._fr && this._title._fr.length > 0){
    //     return this._title._fr

    //     } else {
    //         return this._title._en
    //     }
    // }

    get title () {
        return this._title.hasOwnProperty('fr') ? this._title['fr'] : this._title['fr']
    }

    get duration() {
        const toHours = Math.floor(this._duration/60) //Math floor arrondi à l'entier le plus proche (haut ou bas)
        const toMinutes = this._duration % 60 //Modulo % nombre de minutes restantes exemple predator 107 % 60 reste 47 
        this._duration = `${toHours}h${toMinutes}min`
        return this._duration
    }

    get synopsis() {
        return this._synopsis
    }
    get picture() {
        return `../assets/${this._picture}`
    }
    get thumbnail() {
        return `../assets/thumbnails/${this._picture}`
    }
    get released_in() {
        return this._released_in
    }
}
