package com.brano.ecomonitor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DefaultController {

    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("test-table-creators");
    }

}
