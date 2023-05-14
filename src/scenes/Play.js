class Play extends Phaser.Scene {
     
    constructor() {
      super("playScene");
    } 

    create(){
        this.physics.world.gravity.y = 2600;
        this.plx_back=this.add.tileSprite(0,-30,2150,1646,'plx_back').setOrigin(0,0).setScale(.45);
        this.gtruck=new Truck(this,450,500,'platform').setScale(.8);
        this.add.sprite(440,317,"window").setScale(.49);
        this.hand=this.physics.add.sprite(200,-100,'hand_atlas','hand1').setScale(.5);
        this.anims.create({
            key:"jump",
            frameRate:10,
            frames: this.anims.generateFrameNames("hand_atlas", {
                prefix:"hand",
                start: 1,
                end:5
            })
        });
        this.hand.setSize(250,530);
        this.hand.setDebugBodyColor(0x00FF00);
        this.hand.setBounce(0);
//        this.physics.add.collider(this.hand, this.gtruck);
        this.hand.setCollideWorldBounds(true);
        let groundBound = this.physics.add.sprite(960, 640);
        groundBound.body.setSize(960,200);
        groundBound.setDebugBodyColor(0xFACADE);
        groundBound.setCollideWorldBounds(true);
        this.physics.add.collider(this.hand, this.gtruck);


        // this.truckGroup = this.add.group({
        //     runChildUpdate: true    // make sure update runs on group children
        // });
        // // wait a few seconds before spawning barriers
        // this.time.delayedCall(2500, () => { 
        //     this.addTruck();
        // });
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }


    update(){
        this.plx_back.tilePositionX += 5;
        // if(!this.gameOver) {
        //     this.gtruck.update();
        // }
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.hand.anims.play('jump');
        }
    }
}