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
import com.tripshow.api.model.Passagem;
import com.tripshow.api.repo.PassagemRepository;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/")
public class PassagemController {
	//Chamando o Repositório para usar as funções CRUD
		@Autowired
		PassagemRepository passagemRepo;
		
		@GetMapping("/passagens")
		public List<Passagem> listAllPassagens(){
			return passagemRepo.findAll();
			//Usando a função GET para listar todos as passagens registradas
		}
		
		//Usando a função Post para registrar passagens
		@PostMapping("/passagens")
		public Passagem createPassagem(@RequestBody Passagem passagem) {
			return passagemRepo.save(passagem);
		}
		
		//Usando a função GET para acessar uma passagem pelo ID
		@GetMapping("/passagens/{id_passagem}")
		public ResponseEntity<Passagem> getPassagemById(@PathVariable Long id_passagem){
			Passagem passagem = passagemRepo.findById(id_passagem).orElseThrow(() -> new ResourceNotFoundException("Passagem não encontrado com o id: " + id_passagem));
			return ResponseEntity.ok(passagem);
		}
		
		//Usando a função PUT para atualizar uma Passagem 
		@PutMapping("/passagens/{id_passagem}")
		public ResponseEntity<Passagem> updatePassagem(@PathVariable Long id_passagem, @RequestBody Passagem passagemDetails){
			Passagem passagem = passagemRepo.findById(id_passagem).orElseThrow(() -> new ResourceNotFoundException("Passagem não encontrada com o id: " + id_passagem));
			
			passagem.setData_compra(passagemDetails.getData_compra());
			passagem.setDestino(passagemDetails.getDestino());
			passagem.setCliente(passagemDetails.getCliente());
			
			Passagem updatedPassagem = passagemRepo.save(passagem);
			
			return ResponseEntity.ok(updatedPassagem);
		}
		
		//Usando a função DELETE para deletar uma Passagem
		@DeleteMapping("/passagens/{id_passagem}")
		public ResponseEntity<Map<String, Boolean>> deleteDestino(@PathVariable Long id_passagem){
			Passagem passagem = passagemRepo.findById(id_passagem).orElseThrow(() -> new ResourceNotFoundException("Passagem não encontrada com o id: " + id_passagem));
			passagemRepo.delete(passagem);
			Map<String, Boolean> response = new HashMap<>();
			
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
