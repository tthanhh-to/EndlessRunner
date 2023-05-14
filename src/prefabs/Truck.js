class Truck extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing, displayList, updateList
        //this.setImmovable(true);
        //this.allowGravity = false;
        // this.body.setCircle(this.width/2);

        //this.body.setSize(500,200);
        //this.body.setOffset=(1500,0);
        
    }

}