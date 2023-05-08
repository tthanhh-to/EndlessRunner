class Title extends Phaser.Scene {
    constructor() {
      super("titleScene");
    }
    preload(){
    }
    create() {
        let titleConfig = {
            fontFamily: 'Courier Prime',
            fontSize: '28px',
  //          backgroundColor: '#ffeb7a',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
      this.add.text(20, 20, "Endless Runner Game", titleConfig);
      this.add.text(20, 60, "Created by Thanh To\n Art by Joyce Cha", titleConfig);
      this.add.text(20, 500, "Press space bar to continue", titleConfig);
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
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