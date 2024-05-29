package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.List;

@Entity
@Table(name = "product")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Size(min = 2, max = 200, message = "El nombre debe tener entre 2 y 200 caracteres")
    @Column(name = "name", length = 200)
    private String name;

    @Size(min = 8, message = "La descripción debe tener al menos 8 caracteres")
    @NotBlank(message = "La descripción no puede estar en blanco")
    @Column(name = "description")
    private String description;

    @Min(value = 0 , message = "El precio debe ser mayor o igual a 0.00")
    @Column(name = "price", nullable = false)
    private Double price;

    @Min(value = 0, message = "El valor debe ser igual o mayor que cero")
    @Column(name = "stock")
    private Integer stock;

    @NotBlank(message = "El tipo de producto no puede estar en blanco")
    @Size(min = 4, max = 50, message = "El tipo de producto debe tener entre 4 y 200 caracteres")
    @Column(name = "product_type", length = 50)
    private String productType;

    @NotBlank(message = "La marca no puede estar en blanco")
    @Size(min = 4, max = 200, message = "La marca debe tener entre 4 y 200 caracteres")
    @Column(name = "mark", length = 200)
    private String mark;

    @NotBlank(message = "El modelo no puede estar en blanco")
    @Size(min = 4, max = 20, message = "El modelo debe tener entre 4 y 200 caracteres")
    @Column(name = "model", length = 20)
    private String model;

    @ElementCollection
    @CollectionTable(
            name = "product_sizes",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @Size(min = 1, message = "La lista de tallas no puede estar vacía")
    @Column(name = "size")
    private List<Integer> sizes;

    @ElementCollection
    @CollectionTable(
            name = "product_colors",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @Size(min = 1, message = "La lista de colores no puede estar vacía")
    @Column(name = "color")
    private List<String> color;

    @NotBlank(message = "El género debe ser 'M' o 'F'")
    @Pattern(regexp = "CABALLERO|NIÑO|NIÑA|DAMA", message = "El género debe ser 'CABALLERO', 'NIÑO', 'NIÑA' o 'DAMA'")
    @Size(min = 4, max = 10, message = "El género debe tener 1 carácter")
    @Column(name = "gender", length = 10)
    private String gender;

    @Column(name = "img")
    private String imgPath;

    @Column(name = "status", nullable = false)
    private Boolean status;

    @Size(min = 5, message = "El campo code debe tener minimo 5 digitos")
    @Column(name = "code", unique = true)
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public List<Integer> getSizes() {
        return sizes;
    }

    public void setSizes(List<Integer> sizes) {
        this.sizes = sizes;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<String> getColor() {
        return color;
    }

    public void setColor(List<String> color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "ProductEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stock=" + stock +
                ", productType='" + productType + '\'' +
                ", mark='" + mark + '\'' +
                ", model='" + model + '\'' +
                ", sizes=" + sizes +
                ", color=" + color +
                ", gender='" + gender + '\'' +
                ", imgPath='" + imgPath + '\'' +
                ", status=" + status +
                ", code='" + code + '\'' +
                '}';
    }
}
