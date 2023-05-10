class Play extends Phaser.Scene {
     
    constructor() {
      super("playScene");
    }
    preload(){
        this.load.image('plx_back', './assets/background1.png');
        this.load.image('platform', './assets/jungle_platform.png');
        this.load.image('window','./assets/window.png');
        this.load.image('char', './assets/dino.png');
//        this.load.image('particle','./assets/emmiter_graphicy.png');
    }   
    create(){
        this.plx_back=this.add.tileSprite(0,-30,2150,1646,'plx_back').setOrigin(0,0).setScale(.45);
        const platforms = this.physics.add.staticGroup();
        this.add.sprite(440,317,"window").setScale(.49);
        platforms.create(0, 0, 'platform');
        // platforms.create(600, 400, 'platform');
        // platforms.create(50, 250, 'platform');


        /*
         The next power of two value from the height of the Fill Pattern frame.
        */

        //  this.potWidth = GetPowerOfTwo(displayFrame.width);
        // this.potHeight = displayFrame.height;
        // this.fillCanvas = CanvasPool.create2D(this, this.potWidth, this.potHeight);

    }
    update(){
        this.plx_back.tilePositionX += 2.5;

    }
}