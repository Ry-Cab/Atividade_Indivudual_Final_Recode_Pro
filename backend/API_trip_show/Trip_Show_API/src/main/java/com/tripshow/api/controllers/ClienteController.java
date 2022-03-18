package com.tripshow.api.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tripshow.api.exception.ResourceNotFoundException;
import com.tripshow.api.model.Cliente;
import com.tripshow.api.repo.ClienteRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/")
public class ClienteController {
	//Chamando o Repositório para usar as funções CRUD
		@Autowired
		ClienteRepository clienteRepo;
		
		@GetMapping("/clientes")
		public List<Cliente> listAllClientes(){
			return clienteRepo.findAll();
			//Usando a função GET para listar todos os clientes registrados
		}
		
		//Usando a função Post para criar Destinos
		@PostMapping("/clientes")
		public Cliente createCliente(@RequestBody Cliente cliente) {
			return clienteRepo.save(cliente);
		}
		
		//Usando a função GET para obter um destino pelo ID
		@GetMapping("/clientes/{id_cliente}")
		public ResponseEntity<Cliente> getClienteById(@PathVariable Long id_cliente){
			Cliente cliente = clienteRepo.findById(id_cliente).orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado com o id: " + id_cliente));
			return ResponseEntity.ok(cliente);
		}
		
		//Usando a função PUT para atualizar um Destino 
		@PutMapping("/clientes/{id_cliente}")
		public ResponseEntity<Cliente> updateCliente(@PathVariable Long id_cliente, @RequestBody Cliente clienteDetails){
			Cliente cliente = clienteRepo.findById(id_cliente).orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado com o id: " + id_cliente));
			cliente.setNome_cliente(clienteDetails.getNome_cliente());
			cliente.setData_nascimento(clienteDetails.getData_nascimento());
			
			cliente.setEmail_cliente(clienteDetails.getEmail_cliente());
			cliente.setEstado_cliente(clienteDetails.getEstado_cliente());
			cliente.setCidade_cliente(clienteDetails.getCidade_cliente());
	
			cliente.setData_volta(clienteDetails.getData_volta());
			cliente.setData_ida(clienteDetails.getData_ida());
			
			Cliente updatedCliente = clienteRepo.save(cliente);
			
			return ResponseEntity.ok(updatedCliente);
		}
		
		//Usando a função DELETE para deletar um destino
		@DeleteMapping("/clientes/{id_cliente}")
		public ResponseEntity<Map<String, Boolean>> deleteCliente(@PathVariable Long id_cliente){
			Cliente cliente = clienteRepo.findById(id_cliente).orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado com o id: " + id_cliente));
			clienteRepo.delete(cliente);
			Map<String, Boolean> response = new HashMap<>();
			
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
