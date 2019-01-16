package com.test.chess.controller;

import com.test.chess.engine.Algorithm;
import com.test.chess.engine.Move;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

//http://localhost:8080

@RestController
public class Home {

    private Map<String, Algorithm> algorithms = new HashMap<>();

    @GetMapping("/")
    public Move comp(@RequestParam(value="move", required=false) String move, @RequestParam("tableId") String tableId) {
        //algorithm.board().copyBoard(testBoards.test0);

        Algorithm algorithm = algorithms.get(tableId);

        if (algorithm == null) {
            algorithm = new Algorithm();
            algorithms.put(tableId, algorithm);
        }

        if (move != null) {

            move=move.toLowerCase();

            Move GENERATED = algorithm.makeMove('B', 'b');

            algorithm.board().makeMove('B', GENERATED);

            return GENERATED;
        }

        throw new IllegalArgumentException("move is null");
    }

    @GetMapping("/enter")
    public Move comp2(@RequestParam(value="enter", required=false) String move, @RequestParam("tableId") String tableId) {
        //algorithm.board().copyBoard(testBoards.test0);
        Algorithm algorithm = algorithms.get(tableId);

        if (algorithm == null) {
            algorithm = new Algorithm();
            algorithms.put(tableId, algorithm);
        }

        if (move != null) {

            move=move.toLowerCase();

            Move ENTERED = new Move();

            algorithm.board().generateMoves('W', 1);

            for (int i = 0; i < algorithm.board().getMovesDepth1().size(); i++) {

                if ((algorithm.board().getMovesDepth1().get(i).getPos1_X() == move.charAt(0) - 96) && (algorithm.board().getMovesDepth1().get(i).getPos1_Y() == move.charAt(1) - 48)
                        && (algorithm.board().getMovesDepth1().get(i).getPos2_X() == move.charAt(3) - 96) && (algorithm.board().getMovesDepth1().get(i).getPos2_Y() == move.charAt(4) - 48)) {
                    ENTERED = algorithm.board().getMovesDepth1().get(i);

                    algorithm.board().makeMove('W', ENTERED);
                }
            }

//            if(ENTERED.getCapturePiece()){
//                for(int i=0; i<19; i++){
//                    if((algorithm.board().blackPieces[i].getPosX() == move.charAt(3) - 96)
//                            && (algorithm.board().blackPieces[i].getPosY() == move.charAt(4) - 48)){
//                        ENTERED.setCaptureIndex(i);
//                    }
//                }
//            }

            return ENTERED;
        }

        throw new IllegalArgumentException("move is null");
    }



}

//http://localhost:8080