package com.karmelshoes.web.controller;

import com.karmelshoes.domain.models.ModelColorsSizes;
import com.karmelshoes.domain.service.IModelColorsSizesService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/list")
@CrossOrigin(origins = "http://localhost:5173")
public class ModelColorsSizesController {

    private final IModelColorsSizesService iModelColorsSizesService;

    public ModelColorsSizesController(IModelColorsSizesService iModelColorsSizesService) {
        this.iModelColorsSizesService = iModelColorsSizesService;
    }

    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ModelColorsSizes getData() {
        return iModelColorsSizesService.getData();
    }
}
