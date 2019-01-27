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

        Algorithm algorithm = algorithms.get(tableId);

        if (algorithm == null) {
            algorithm = new Algorithm();
            algorithms.put(tableId, algorithm);
        }

        if (move != null) {

            move=move.toLowerCase();

            Move ENTERED = new Move();

            algorithm.GenerateSequences('W');
            algorithm.CheckCheckmate('W');
            algorithm.RemoveCheckmates();

            if (move.length() >= 5) {

                for (int i = 0; i < algorithm.sequences.size(); i++) {

                    if ((algorithm.sequences.get(i).move(0).getPos1_X() == move.charAt(0) - 96) && (algorithm.sequences.get(i).move(0).getPos1_Y() == move.charAt(1) - 48)
                            && (algorithm.sequences.get(i).move(0).getPos2_X() == move.charAt(3) - 96) && (algorithm.sequences.get(i).move(0).getPos2_Y() == move.charAt(4) - 48)) {
                        ENTERED = algorithm.sequences.get(i).move(0);

                        algorithm.board().makeMove('W', ENTERED);
                    }
                }
            }

            return ENTERED;
        }

        throw new IllegalArgumentException("move is null");
    }



}

//http://localhost:8080