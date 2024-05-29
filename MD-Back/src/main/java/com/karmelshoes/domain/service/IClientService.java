package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public interface IClientService {
    Page<ClientDto> getAll(Integer page, Integer size);
    Page<ClientDto> getAllAdmin(Integer page, Integer size);
    Page<ClientDto> getAllAdminByName(Integer page, Integer size, String name);
    Page<ClientDto> getAllAdminByAddress(Integer page, Integer size, String address);
    Page<ClientDto> getAllAdminByPhone(Integer page, Integer size, String phone);
    Page<ClientDto> getAllAdminByEmail(Integer page, Integer size, String email);
    Page<ClientDto> getAllAdminByStatus(Integer page, Integer size, Boolean status);
    Page<ClientDto> getAllAdminByIdentification(Integer page, Integer size, String identification);
    ClientDto getById(Long id);
    ClientDto getByName(String name);
    ClientDto create(ClientEntity clientEntity);
    ClientDto updateAllField(Long id, ClientEntity client);
    void deleteById(Long id);
    ClientDto deleteAdminById(Long id);
    ClientDto updateFieldPassword(String email, String identification, String newPassword);
    Page<ClientDto> getAllUser(Integer page, Integer size);
}
