package com.karmelshoes.domain.models;

import java.util.List;

import com.karmelshoes.persistency.entity.ColorEntity;
import com.karmelshoes.persistency.entity.SizeEntity;

public class ModelColorsSizes {
    
    private List<ColorEntity> colorList;
    private List<SizeEntity> sizeList;


    public List<ColorEntity> getColorList() {
        return colorList;
    }

    public void setColorList(List<ColorEntity> colorList) {
        this.colorList = colorList;
    }

    public List<SizeEntity> getSizeList() {
        return sizeList;
    }

    public void setSizeList(List<SizeEntity> sizeList) {
        this.sizeList = sizeList;
    }
}
