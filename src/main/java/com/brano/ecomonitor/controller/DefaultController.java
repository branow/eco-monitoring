package com.brano.ecomonitor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DefaultController {

    @GetMapping("/")
    public ModelAndView index() {
        return new ModelAndView("main-page");
    }

    @GetMapping("/main-page")
    public ModelAndView indexMain() {
        return new ModelAndView("main-page");
    }

    @GetMapping("/atmosphere-page")
    public ModelAndView indexAtmosphere() {
        return new ModelAndView("atmosphere-page");
    }
    @GetMapping("/health-risk-page")
    public ModelAndView indexHealthRisk() {
        return new ModelAndView("health-risk-page");
    }

    @GetMapping("/test")
    public ModelAndView indexTest() {
        return new ModelAndView("test");
    }

}
