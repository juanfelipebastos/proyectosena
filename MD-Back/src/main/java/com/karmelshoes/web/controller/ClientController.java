package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:5173")
public class ClientController {
    @Autowired
    private IClientService iClientService;

    public ClientController() {
    }

    @GetMapping("/getAll/{page}/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAll(@PathVariable("page") Integer page,@PathVariable("size") Integer size){
        return iClientService.getAll(page, size);
    }

    @GetMapping("/getAllAdmin/{page}/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdmin(@PathVariable("page") Integer page,@PathVariable("size") Integer size){
        return iClientService.getAllAdmin(page, size);
    }

    @GetMapping("/getAllAdminByName/{page}/{size}/{name}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByName(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("name") String name
    ){
        return iClientService.getAllAdminByName(page, size, name);
    }

    @GetMapping("/getAllAdminByAddress/{page}/{size}/{address}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByAddress(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("address") String address
    ){
        return iClientService.getAllAdminByAddress(page, size, address);
    }

    @GetMapping("/getAllAdminByPhone/{page}/{size}/{phone}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByPhone(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("phone") String phone
    ){
        return iClientService.getAllAdminByPhone(page, size, phone);
    }

    @GetMapping("/getAllAdminByEmail/{page}/{size}/{email}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByEmail(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("email") String email
    ){
        return iClientService.getAllAdminByEmail(page, size, email);
    }

    @GetMapping("/getAllAdminByStatus/{page}/{size}/{status}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByStatus(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("status") Boolean status
    ){
        return iClientService.getAllAdminByStatus(page, size, status);
    }

    @GetMapping("/getAllAdminByIdentification/{page}/{size}/{identification}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllAdminByIdentification(
            @PathVariable("page") Integer page,
            @PathVariable("size") Integer size,
            @PathVariable("identification") String identification
    ){
        return iClientService.getAllAdminByIdentification(page, size, identification);
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto getById(@PathVariable("id") Long id) {
        return iClientService.getById(id);
    }

    @GetMapping("/getByName/{name}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto getByName(@PathVariable("name") String name) {
        return iClientService.getByName(name);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ClientDto create(@Valid @RequestBody ClientEntity client) {
        return iClientService.create(client);
    }

    @PutMapping("/updateAll/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto updateAll(@PathVariable("id") Long id,@Valid @RequestBody ClientEntity client) {
        return iClientService.updateAllField(id, client);
    }

    @PatchMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Long id) {
        iClientService.deleteById(id);
    }

    @PatchMapping("/deleteAdminById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto deleteAdminById(@PathVariable("id") Long id) {
        return iClientService.deleteAdminById(id);
    }

    @PatchMapping("/updatePassword")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto updatePassword(
            @RequestParam("email") String email,
            @RequestParam("identification") String identification,
            @RequestParam("newPassword") String newPassword
    ) {
        return iClientService.updateFieldPassword(email, identification, newPassword);
    }

    @GetMapping("/getAllUser/{page}/{size}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody Page<ClientDto> getAllUser(@PathVariable("page") Integer page,@PathVariable("size") Integer size) {
        return iClientService.getAllUser(page, size);
    }
}
