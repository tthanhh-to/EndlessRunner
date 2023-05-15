class Title extends Phaser.Scene {
    constructor() {
      super("titleScene");
    }
    preload(){
    }
    create() {
        let titleConfig = {
            fontFamily: 'Bungee Shade',
            fontSize: '28px',
  //          backgroundColor: '#ffeb7a',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
      this.add.text(20, 20, "Highway Hopper", titleConfig);
      this.add.text(20, 60, "Music, Art, and Programming by Thanh To", titleConfig);
      this.add.text(20, 500, "Press space bar to to jump\n Press -> to start game", titleConfig);
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // easy mode
        //   game.settings = {
        //     spaceshipSpeed: 5,
        //     butterSpeed: 7,
        //     gameTimer: 61000    
        //   }
          this.scene.start('playScene');    
        }
    //     if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
    //       // hard mode
    //       game.settings = {
    //         spaceshipSpeed: 6,
    //         butterSpeed: 8,
    //         gameTimer: 46000    
    //       }
    //       this.sound.play('sfx_select');
    //       this.scene.start('playScene');    
    //     }
      }
}