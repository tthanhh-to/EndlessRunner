class Truck extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing, displayList, updateList
        //this.body.setSize(500,200);
        //this.body.setOffset=(1500,0);
        
    }

    create(){
        this.body.setSize(400,300);
        this.setDebugBodyColor(0x00FF00);
        this.setImmovable(true);
        this.allowGravity = false;
        this.setVelocityX(50);

    }
}