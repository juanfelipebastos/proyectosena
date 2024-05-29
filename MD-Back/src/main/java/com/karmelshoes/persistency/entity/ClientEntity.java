package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "client")
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @NotBlank(message = "El campo name no puede estar vacio")
    @Size(min = 4, max = 70, message = "El campo name no puede ser menor de 4 caracteres o mayor de 70")
    @Column(name = "name", length = 70)
    private String name;
    @Email(message = "El email no tiene el formato correcto")
    @Size(min = 15, max = 100)
    @Column(name = "email", length = 100, unique = true)
    private String email;
    @NotBlank(message = "El campo phone no puede estar vacio")
    @Pattern(regexp = "\\+57 \\d{10}", message = "El formato del phone debe ser +57 seguido de 10 dígitos")
    @Column(name = "phone", length = 16)
    private String phone;
    @NotBlank(message = "El campo address no puede estar vacio")
    @Size(min = 8, max = 200, message = "el campo address debe contener minimo 8 caracteres o maximo 200")
    @Column(name = "address")
    private String address;
    @NotBlank(message = "El campo identification no puede estar vacío")
    @Pattern(regexp = "\\d{8,10}", message = "El campo identification debe tener un máximo de 10 números y un mínimo de 8 números. Solo se admiten números.")
    @Column(name = "identification", nullable = false, length = 11, unique = false)
    private String identification;

    @Column(name = "status", nullable = false)
    private Boolean status;

    @Column(name = "admin")
    private Boolean admin;

    @NotBlank(message = "El campo password no puede estar vacio")
    @Pattern.List({
            @Pattern(regexp = ".*[A-Z].*", message = "La contraseña debe contener al menos una letra mayúscula"),
            @Pattern(regexp = ".*[a-z].*", message = "La contraseña debe contener al menos una letra minúscula"),
            @Pattern(regexp = ".*\\d.*", message = "La contraseña debe contener al menos un número")
    })
    @Column(name = "password")
    private String password;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "clients_roles",
            joinColumns = @JoinColumn(name = "client_id"),
            inverseJoinColumns = @JoinColumn(name = "roles_id"),
            uniqueConstraints = {
                    @UniqueConstraint(columnNames = {"client_id", "roles_id"})
            }
    )
    private List<RoleEntity> roles = new ArrayList<>();

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
