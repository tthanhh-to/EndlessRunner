/*
 Thanh To
 game title
 approximate hours spent on project
 creative tilt justification
help with sprites: https://www.youtube.com/watch?v=ElAmJj8Tfo8
 */
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
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Load, Title, Play ]
          //, Play, GameOver]
}

// define game
let game = new Phaser.Game(config);
 let keySPACE;