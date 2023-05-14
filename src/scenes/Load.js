class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, 300, 1000 * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // set load path
        this.load.path = 'assets/';
        // take care of all of our asset loading now
        this.load.atlas('char', 'hand.png', 'hand.json');
        this.anims.create({
            key:"jump",
            frameRate:10,
            frames: this.anims.generateFrameNames("hand", {
                prefix:"hand",
                suffix:".png",
                start: 1,
                end:4
            })
        });
        this.load.image('plx_back', 'background1.png');
        this.load.image('platform', 'truck.png');
        this.load.image('window','window.png');
    }

    create() {
        // ...and pass to the next Scene
        this.scene.start('titleScene');
    }
}