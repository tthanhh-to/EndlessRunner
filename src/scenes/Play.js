class Play extends Phaser.Scene {
     
    constructor() {
      super("playScene");
    } 

    create(){
        this.physics.world.gravity.y = 2600;
        let scoreConfig = {
            fontFamily: 'Edu SA Beginner',
            fontSize: '28px',
            backgroundColor: '#ffeb7a',
            color: '#843605',
            align: 'right',
            padding: {
                top: 3,
                bottom: 3,
            }
        }
        this.score = 0;
        this.scoreLeft = this.add.text(300,300, "score\n"+this.score, scoreConfig);

        this.plx_back=this.add.tileSprite(0,-30,2150,1646,'plx_back').setOrigin(0,0).setScale(.45);
        this.gtruck=new Truck(this,450,500,'platform').setScale(.8);
        this.add.sprite(400,200,"window").setScale(.8 );
        //adding hand sprite
        this.hand=this.physics.add.sprite(300,100,'hand_atlas','hand1');
        this.hand.setCollideWorldBounds(true);
        this.hand.body.setSize(250,200);
        // this.hand.setImmovable();
        this.hand.body.onCollide = true;
        this.hand.setOffset(20,320)
        this.hand.setDebugBodyColor(0x00FF00);
        this.hand.setBounce(0);
        this.hand.destroyed=false;
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

        //boundary for if hand hits-game over
        this.groundBound = this.physics.add.sprite(960, 640);
        this.groundBound.body.setSize(960,200);
        this.groundBound.setDebugBodyColor(0xFACADE);
        this.groundBound.setCollideWorldBounds(true);
        this.physics.add.collider(this.hand, this.groundBound);
        this.physics.add.collider(this.hand, this.gtruck);

        this.truckGroup = this.add.group({
            runChildUpdate: true    // make sure update runs on group children
        });
        // wait a few seconds before spawning barriers
        this.time.delayedCall(2500, () => { 
            this.addTruck();
        });
        this.music =  this.sound.add('play_music', {
            volume: 0.2,
            loop: true
        })
        this.music.play()
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    addTruck() {
        let truck = new Truck(this,-450);
        this.truckGroup.add(truck);
    }
    handCollision() {
        this.hand.destroyed=true;
        this.hand.destroy();
    }
    update(){
        this.plx_back.tilePositionX += 9;
        //if the hand's hitbox is touching the ground
        this.hand.isGrounded = this.hand.body.touching.down;
        if(!this.hand.destroyed) {
            this.gtruck.update();

            // check for player input
            if (this.hand.isGrounded&&Phaser.Input.Keyboard.JustDown(keySPACE)){
                this.hand.anims.play('jump');
                this.hand.setVelocityY(-1000);       
            }    
            // check for collisions
            if(this.physics.world.collide(this.hand, this.groundBound, null, this)){
                this.handCollision();
                console.log("yes");
            }
        }
    }



}