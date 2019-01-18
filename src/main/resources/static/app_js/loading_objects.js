//-----------BIG LOADING OBJECTS--------------------------------------//
//--------------------------------------------------------------------//

function load_all() {


//objects: board:
    loader.load('/objects/board_white.obj', function (object) {
          obj_boardA = object;
          obj_boardA.traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_B_white;
            } );
          obj_boardA.position.set(4.5, 0, -4.5);
          scene.add( obj_boardA );},
          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);
    loader.load('/objects/board_black.obj', function (object) {
          obj_boardB = object;
          obj_boardB.traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_B_dark;
            } );
          obj_boardB.position.set(4.5, 0, -4.5);
          scene.add( obj_boardB );},
          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);
    loader.load('/objects/nums.obj', function (object) {
            nums = object;
            nums.traverse(function (obj) {
                if (obj.isMesh) obj.material = mat_white;
            });
            nums.position.set(4.5, 0, -4.5);
            scene.add(nums);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.log('An error happened');
        }
    );

//objects: pawns:
loader.load('/objects/pawn.obj',function ( object ) {

          white_piece[0] = object;
          white_piece[0].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );

            for(var i=1; i<8; i++){
                  white_piece[i] = white_piece[0].clone();
            }
          white_piece[0].position.set( 1, 0, -2);
          white_piece[1].position.set( 2, 0, -2);
          white_piece[2].position.set( 3, 0, -2);
          white_piece[3].position.set( 4, 0, -2);
          white_piece[4].position.set( 5, 0, -2);
          white_piece[5].position.set( 6, 0, -2);
          white_piece[6].position.set( 7, 0, -2);
          white_piece[7].position.set( 8, 0, -2);

          black_piece[0] = white_piece[0].clone();
          black_piece[0].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );
            for(var i=1; i<8; i++){
                  black_piece[i] = black_piece[0].clone();
            }

          black_piece[0].position.set( 1, 0, -7);
          black_piece[1].position.set( 2, 0, -7);
          black_piece[2].position.set( 3, 0, -7);
          black_piece[3].position.set( 4, 0, -7);
          black_piece[4].position.set( 5, 0, -7);
          black_piece[5].position.set( 6, 0, -7);
          black_piece[6].position.set( 7, 0, -7);
          black_piece[7].position.set( 8, 0, -7);

          for(var i=0; i<8; i++){
               scene.add( white_piece[i] )
               scene.add( black_piece[i] )
          }
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);

//objects: figures:
loader.load('/objects/rock.obj',function ( object ) {

          white_piece[8] = object;
          white_piece[8].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );
          white_piece[15] = white_piece[8].clone();

          white_piece[8].position.set( 1, 0, -1);
          white_piece[15].position.set( 8, 0, -1);

          black_piece[8] = white_piece[8].clone();
          black_piece[8].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );
          black_piece[15] = black_piece[8].clone();

          black_piece[8].position.set( 1, 0, -8);
          black_piece[15].position.set( 8, 0, -8);

          scene.add( white_piece[8] )
          scene.add( white_piece[15] )
          scene.add( black_piece[8] )
          scene.add( black_piece[15] )
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);

loader.load('/objects/knight.obj',function ( object ) {

          white_piece[9] = object;
          white_piece[9].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );
          white_piece[14] = white_piece[9].clone();

          white_piece[9].position.set( 2, 0, -1);
          white_piece[9].rotation.y = -Math.PI/2;
          white_piece[14].position.set( 7, 0, -1);
          white_piece[14].rotation.y = -Math.PI/2;

          black_piece[9] = white_piece[9].clone();
          black_piece[9].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );
          black_piece[14] = black_piece[9].clone();

          black_piece[9].position.set( 2, 0, -8);
          black_piece[9].rotation.y = Math.PI/2;
          black_piece[14].position.set( 7, 0, -8);
          black_piece[14].rotation.y = Math.PI/2;

          scene.add( white_piece[9] )
          scene.add( white_piece[14] )
          scene.add( black_piece[9] )
          scene.add( black_piece[14] )
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);

loader.load('/objects/bishop.obj',function ( object ) {

          white_piece[10] = object;
          white_piece[10].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );
          white_piece[13] = white_piece[10].clone();

          white_piece[10].position.set( 3, 0, -1);
          white_piece[13].position.set( 6, 0, -1);

          black_piece[10] = white_piece[10].clone();
          black_piece[10].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );
          black_piece[13] = black_piece[10].clone();

          black_piece[10].position.set( 3, 0, -8);
          black_piece[13].position.set( 6, 0, -8);

          scene.add( white_piece[10] )
          scene.add( white_piece[13] )
          scene.add( black_piece[10] )
          scene.add( black_piece[13] )
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);

loader.load('/objects/queen.obj',function ( object ) {

          white_piece[11] = object;
          white_piece[11].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );

          white_piece[11].position.set( 4, 0, -1);

          //3 more Queens for promotion pawns
          white_piece[16] = white_piece[11].clone();
          white_piece[17] = white_piece[11].clone();
          white_piece[18] = white_piece[11].clone();

          white_piece[16].position.set( 4, 1000, -9);
          white_piece[17].position.set( 4, 1000, -10);
          white_piece[18].position.set( 4, 1000, -11);

          black_piece[11] = white_piece[11].clone();
          black_piece[11].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );

          black_piece[11].position.set( 4, 0, -8);

          //3 more Queens for promotion pawns
          black_piece[16] = black_piece[11].clone();
          black_piece[17] = black_piece[11].clone();
          black_piece[18] = black_piece[11].clone();

          black_piece[16].position.set( 4, 1000, 0);
          black_piece[17].position.set( 4, 1000, 1);
          black_piece[18].position.set( 4, 1000, 2);

          scene.add( white_piece[11] );
          scene.add( black_piece[11] );

          scene.add( white_piece[16] );
          scene.add( white_piece[17] );
          scene.add( white_piece[18] );
          scene.add( black_piece[16] );
          scene.add( black_piece[17] );
          scene.add( black_piece[18] )
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);

loader.load('/objects/king.obj',function ( object ) {

          white_piece[12] = object;
          white_piece[12].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_white;
            } );

          white_piece[12].position.set( 5, 0, -1);

          black_piece[12] = white_piece[12].clone();
          black_piece[12].traverse( function ( obj ) {
              if ( obj.isMesh ) obj.material = mat_dark;
            } );

          black_piece[12].position.set( 5, 0, -8);

          scene.add( white_piece[12] )
          scene.add( black_piece[12] )
          ;},

          function ( xhr ) {console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
          function ( error ) {console.log( 'An error happened' );}
);
}
/*

//shadows:  ??

for(var i=0; i<16; i++){
      white_piece[i].castShadow = true;
      white_piece[i].recieveShadow = true;
      black_piece[i].castShadow = true;
      black_piece[i].recieveShadow = true;
};
obj_boardA.castShadow = true;
obj_boardA.recieveShadow = true;
obj_boardB.castShadow = true;
obj_boardB.recieveShadow = true;
*/



//-----------BIG LOADING OBJECTS-------------------------------------------------//
//-------------------------------------------------------------------------------//
