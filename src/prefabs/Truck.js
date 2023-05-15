class Truck extends Phaser.Physics.Arcade.Sprite {
    constructor(scene,x,y,texture,frame){
        super(scene, x,y,texture,frame);
        this.parentScene = scene;               // maintain scene context
        // set up physics sprite
        this.parentScene.add.existing(this);    // add to existing scene, displayList, updateList
        this.parentScene.physics.add.existing(this);    // add to physics system
        this.setVelocityX(-100);            // make it go!
        this.setImmovable();     
        this.body.allowGravity = false;
        this.body.onCollide = true;
        // this.newTruck = true;                 // custom property to control Truck spawning
        // // scene.add.existing(this);   // add to existing, displayList, updateList
        //this.body.setSize(500,200);
        //this.body.setOffset=(1500,0);
        // set up barrier group
    }

    update() {
        if(this.newTruck && this.x < 350) {
            // (recursively) call parent scene method from this context
            this.parentScene.addTruck(this.parent, this.velocity);
            this.newTruck = false;
            console.log("new truck");
        }
        // destroy paddle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
        }
    }
    // create(){

    //     this.body.setSize(400,300);
    //     this.setDebugBodyColor(0x00FF00);
    //     this.setImmovable(true);
    //     this.body.allowGravity = false;
    //     this.setVelocityX(50);

    // }
}