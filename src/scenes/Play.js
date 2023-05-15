class Play extends Phaser.Scene {
     
    constructor() {
      super("playScene");
    } 

    create(){
        this.physics.world.gravity.y = 2600;
        this.plx_back=this.add.tileSprite(0,-30,2150,1646,'plx_back').setOrigin(0,0).setScale(.45);
        this.gtruck=new Truck(this,450,500,'platform').setScale(.8);
        this.add.sprite(440,317,"window").setScale(.49);
        //adding hand sprite
        this.hand=this.physics.add.sprite(700,100,'hand_atlas','hand1');
        this.hand.body.setSize(250,200);
        this.hand.body.onCollide = true;
        this.hand.setOffset(20,320)
        this.hand.setDebugBodyColor(0x00FF00);
        this.hand.setBounce(0);
        this.hand.setCollideWorldBounds(true);
        //hand jump animation
        this.anims.create({
            key:"jump",
            frameRate:10,
            frames: this.anims.generateFrameNames("hand_atlas", {
                prefix:"hand",
                start: 1,
                end:5
            })
        });

        //boundary preventing hand from sliding
        let leftBound= this.physics.add.sprite(0,0);
        leftBound.body.setSize(400,640);
        leftBound.body.onCollide = true;
        leftBound.setDebugBodyColor(0x00FF00);
        leftBound.setCollideWorldBounds(true);
        leftBound.body.allowGravity = false;
        this.physics.add.collider(leftBound,this.hand.body);

        //boundary for if hand hits-game over
        let groundBound = this.physics.add.sprite(960, 640);
        groundBound.body.setSize(960,200);
        groundBound.setDebugBodyColor(0xFACADE);
        groundBound.setCollideWorldBounds(true);
        this.physics.add.collider(this.hand, groundBound);
        this.physics.add.collider(this.hand, this.gtruck);


        // this.truckGroup = this.add.group({
        //     runChildUpdate: true    // make sure update runs on group children
        // });
        // // wait a few seconds before spawning barriers
        // this.time.delayedCall(2500, () => { 
        //     this.addTruck();
        // });
        this.music =  this.sound.add('play_music', {
            volume: 0.2,
            loop: true
        })
        this.music.play()
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }


    update(){
        this.plx_back.tilePositionX += 5;
        //if the hand's hitbox is touching the ground
        this.hand.isGrounded = this.hand.body.touching.down;
        //allows jump if hand is touching the ground
        if (this.hand.isGrounded&&Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.hand.anims.play('jump');
            this.hand.setVelocityY(-1000);       
        }
        if(!this.gameOver) {
            this.gtruck.update();
        }
    }
}