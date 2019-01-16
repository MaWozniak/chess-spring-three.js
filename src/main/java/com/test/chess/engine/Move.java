package com.test.chess.engine;

import java.util.ArrayList;

public class Move
        //maximum simplycity
{
    private int pieceIndex = 0;
    private int pos1_X = 0;
    private int pos1_Y = 0;
    private int pos2_X = 0;
    private int pos2_Y = 0;
    private boolean capturePiece = false;
    private int specialMove = 0;

    //sequence
    public ArrayList<Move> sequence = new ArrayList<>(); //depth 1-4

    public Move(int piece, int X1, int Y1, int X2, int Y2, boolean takePiece) {
        this.pieceIndex = piece;
        this.pos1_X = X1;
        this.pos1_Y = Y1;
        this.pos2_X = X2;
        this.pos2_Y = Y2;
        this.capturePiece = takePiece;
    }

    public Move(int piece, int X1, int Y1, int X2, int Y2, boolean takePiece, int specialMove) {
        this.pieceIndex = piece;
        this.pos1_X = X1;
        this.pos1_Y = Y1;
        this.pos2_X = X2;
        this.pos2_Y = Y2;
        this.capturePiece = takePiece;
        this.specialMove = specialMove;
    }

    public Move() {
    }

    public int getPieceIndex() {
        return pieceIndex;
    }

    public int getPos1_X() {
        return this.pos1_X;
    }

    public int getPos1_Y() {
        return this.pos1_Y;
    }

    public int getPos2_X() {
        return this.pos2_X;
    }

    public int getPos2_Y() {
        return this.pos2_Y;
    }

    public boolean getCapturePiece() {
        return this.capturePiece;
    }


    public int getSpecialMove() {
        return this.specialMove;
    }

    public void introduce() {
        System.out.print(" p-" + (this.pieceIndex + 1) + "  " + (char) (this.pos1_X + 96) + this.pos1_Y + " - " + (char) (this.pos2_X + 96) + this.pos2_Y + "  " + this.capturePiece);
    }

    public String moveToString() {
        return (" " + (char) (this.pos1_X + 96) + this.pos1_Y + " " + (char) (this.pos2_X + 96) + this.pos2_Y);
    }

    public void introduceShort() {
        System.out.print("(" + (char) (this.pos1_X + 96) + this.pos1_Y + "-" + (char) (this.pos2_X + 96) + this.pos2_Y + ")");
    }

    public void showSequence() {
        for (int i = 0; i < this.sequence.size(); i++) {
            this.sequence.get(i).introduceShort();
        }
    }

    public String pieceInitial() {
        String initial = "";
        if (this.pieceIndex == 8 || this.pieceIndex == 15) {
            initial = initial + "R";
        }
        if (this.pieceIndex == 9 || this.pieceIndex == 14) {
            initial = initial + "N";
        }
        if (this.pieceIndex == 10 || this.pieceIndex == 13) {
            initial = initial + "B";
        }
        if (this.pieceIndex == 11 || this.pieceIndex == 16 || this.pieceIndex == 17 || this.pieceIndex == 18) {
            initial = initial + "Q";
        }
        if (this.pieceIndex == 12) {
            initial = initial + "K";
        }
        return initial;
    }

}
