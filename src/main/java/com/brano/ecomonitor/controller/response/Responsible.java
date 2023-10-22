package com.brano.ecomonitor.controller.response;

public interface Responsible<T> {

    T respond() throws Exception;

}
