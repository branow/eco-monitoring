package com.brano.ecomonitor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DefaultController {

    @GetMapping("/main-page")
    public ModelAndView indexMain() {
        return new ModelAndView("main-page");
    }

    @GetMapping("/atmosphere-page")
    public ModelAndView indexAtmosphere() {
        return new ModelAndView("atmosphere-page");
    }

}
