class Play extends Phaser.Scene {
     
    constructor() {
      super("playScene");
    } 
    create(){
        this.physics.world.gravity.y = 2600;
        this.plx_back=this.add.tileSprite(0,-30,2150,1646,'plx_back').setOrigin(0,0).setScale(.45);
        //const platforms = this.physics.add.staticGroup();
        // let gtruck=platforms.create(450, 500, 'platform').setScale(.8);
        this.gtruck=new Truck(this,450,500,'platform').setScale(.8);
        this.add.sprite(440,317,"window").setScale(.49);
        this.hand=this.physics.add.sprite(200,190,'char','hand1');
        this.hand.setBounce(0.2);
        this.hand.setCollideWorldBounds(true);
        /*
         The next power of two value from the height of the Fill Pattern frame.
        */

        //  this.potWidth = GetPowerOfTwo(displayFrame.width);
        // this.potHeight = displayFrame.height;
        // this.fillCanvas = CanvasPool.create2D(this, this.potWidth, this.potHeight);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        this.plx_back.tilePositionX += 2.5;
        if(!this.gameOver) {
            this.gtruck.update();
        }
        let jump= this.add.sprite(200,190,'hand');
        
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            jump.anims.play('jump');
        }
	    // // this.hand.isGrounded = this.hand.body.touching.down;
	    // if(this.hand.isGrounded) {
	    // 	this.jumps = this.MAX_JUMPS;
	    // 	this.jumping = false;
	    // } else {
	    // 	this.alien.anims.play('jump');
	    // }
        // // allow steady velocity change up to a certain key down duration
        // // see: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.html#.DownDuration__anchor
	    // if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
	    //     this.alien.body.velocity.y = this.JUMP_VELOCITY;
	    //     this.jumping = true;
	    //     this.upKey.tint = 0xFACADE;
	    // } else {
	    // 	this.upKey.tint = 0xFFFFFF;
	    // }
        // // finally, letting go of the UP key subtracts a jump
        // // see: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.html#.UpDuration__anchor
	    // if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
	    // 	this.jumps--;
	    // 	this.jumping = false;
        // }
    }
}