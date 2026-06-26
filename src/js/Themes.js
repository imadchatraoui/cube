class Themes {

  constructor( game ) {

    this.game = game;
    this.theme = null;

    this.defaults = {
      cube: {
        U: 0xfff7ff, // white
        D: 0xffef48, // yellow
        F: 0xef3923, // red
        R: 0x41aac8, // blue
        B: 0xff8c0a, // orange
        L: 0x82ca38, // green
        P: 0x08101a, // piece
        G: 0xd1d5db, // background
      },
      kukko: {
        U: 0xffb6c1, // Rosa pastello
        D: 0xfdfd96, // Giallo pastello
        F: 0xffb347, // Arancione pastello
        R: 0x77dd77, // Verde pastello
        B: 0xaec6cf, // Azzurrino pastello
        L: 0xff6961, // Rosso pastello
        P: 0xffffff, // Plastica interna (bianca, come nella tua foto)
        G: 0xd6f5d6, // Sfondo (verde menta chiarissimo)
      },
      dust: {
        U: 0xfff6eb,
        D: 0xe7c48d,
        F: 0x8f253e,
        R: 0x607e69,
        B: 0xbe6f62,
        L: 0x849f5d,
        P: 0x08101a,
        G: 0xE7C48D,
      },
      camo: {
        U: 0xfff6eb,
        D: 0xbfb672,
        F: 0x37241c,
        R: 0x718456,
        B: 0x805831,
        L: 0x37431d,
        P: 0x08101a,
        G: 0xBFB672,
      },
      rain: {
        U: 0xfafaff,
        D: 0xedb92d,
        F: 0xce2135,
        R: 0x449a89,
        B: 0xec582f,
        L: 0xa3a947,
        P: 0x08101a,
        G: 0x87b9ac,
      },
    };

    this.colors = JSON.parse( JSON.stringify( this.defaults ) );

  }

  getColors() {

    return this.colors[ this.theme ];

  }

  setTheme( theme = false, force = false ) {

        if ( theme === this.theme && force === false ) return;
        if ( theme !== false ) this.theme = theme;

        // AGGIUNGI QUESTO BLOCCO:
        if (this.theme === 'kukko') {
            this.colors['kukko'] = this.defaults['kukko'];
        }
        // FINE BLOCCO

        const colors = this.getColors();

        this.game.dom.prefs.querySelectorAll( '.range__handle div' ).forEach( range => {
          range.style.background = '#' + colors.R.toString(16).padStart(6, '0');
        } );

        this.game.cube.updateColors( colors );
        this.game.confetti.updateColors( colors );
        this.game.dom.back.style.background = '#' + colors.G.toString(16).padStart(6, '0');
      }

}

export { Themes };
