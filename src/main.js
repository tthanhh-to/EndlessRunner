// keep me honest
'use strict';
// console.log("hello world!");
// // define and configure main Phaser game object
let config = {
//     parent: 'myGame',
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
//     physics: {
//         default: 'arcade',
//         arcade: {
//             //debug: true,
//             gravity: {
//                 x: 0,
//                 y: 0
//             }
//         }
//     },

    scene: [ Title, Play ]
          //, Play, GameOver]
}

// define game
let game = new Phaser.Game(config);
 let keyF, keyR, keyLEFT, keyRIGHT, keySPACE;