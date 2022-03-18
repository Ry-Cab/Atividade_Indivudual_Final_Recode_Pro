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
import com.tripshow.api.model.Destino;
import com.tripshow.api.repo.DestinoRepository;

//O Cross origin permite que a API seja acessada por essa URL, caso contrário, eu não conseguiria usar essa API no projeto React
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/")
public class DestinoController {
	
	//Chamando o Repositório para usar as funções CRUD
	@Autowired
	DestinoRepository destinoRepo;
	
	@GetMapping("/destinos")
	public List<Destino> listAllDestinos(){
		return destinoRepo.findAll();
		//Usando a função GET para listar todos os destinos registrados
	}
	
	//Usando a função Post para criar Destinos
	@PostMapping("/destinos")
	public Destino createDestino(@RequestBody Destino destino) {
		return destinoRepo.save(destino);
	}
	
	//Usando a função GET para obter um destino pelo ID
	@GetMapping("/destinos/{id_destino}")
	public ResponseEntity<Destino> getDestinoById(@PathVariable Long id_destino){
		Destino destino = destinoRepo.findById(id_destino).orElseThrow(() -> new ResourceNotFoundException("Destino não encontrado com o id: " + id_destino));
		return ResponseEntity.ok(destino);
	}
	
	//Usando a função PUT para atualizar um Destino 
	@PutMapping("/destinos/{id_destino}")
	public ResponseEntity<Destino> updateDestino(@PathVariable Long id_destino, @RequestBody Destino destinoDetails){
		Destino destino = destinoRepo.findById(id_destino).orElseThrow(() -> new ResourceNotFoundException("Destino não encontrado com o id: " + id_destino));
		destino.setCidade_destino(destinoDetails.getCidade_destino());
		destino.setImagemURL_destino(destinoDetails.getImagemURL_destino());
		destino.setEstado_destino(destinoDetails.getEstado_destino());
		destino.setPreco_destino(destinoDetails.getPreco_destino());
		destino.setDesconto_destino(destinoDetails.getDesconto_destino());
		
		
		Destino updatedDestino = destinoRepo.save(destino);
		
		return ResponseEntity.ok(updatedDestino);
	}
	
	//Usando a função DELETE para deletar um destino
	@DeleteMapping("/destinos/{id_destino}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino(@PathVariable Long id_destino){
		Destino destino = destinoRepo.findById(id_destino).orElseThrow(() -> new ResourceNotFoundException("Destino não encontrado com o id: " + id_destino));
		destinoRepo.delete(destino);
		Map<String, Boolean> response = new HashMap<>();
		
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
