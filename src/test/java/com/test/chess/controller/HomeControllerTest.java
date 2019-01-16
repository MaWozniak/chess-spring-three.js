package com.test.chess.controller;

import com.test.chess.engine.Move;
import org.assertj.core.api.Assertions;
import org.junit.Test;

public class HomeControllerTest {

    @Test
    public void comp() {
//        final Algorithm algorithmMock = Mockito.mock(Algorithm.class);

        final Home home = new Home();

        final Move response = home.comp("d4 e4", "someTableId");

        Assertions.assertThat(response).isNotNull();
    }
}