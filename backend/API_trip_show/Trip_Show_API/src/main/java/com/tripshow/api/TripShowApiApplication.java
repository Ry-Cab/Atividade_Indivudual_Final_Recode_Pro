package com.tripshow.api;

import javax.annotation.PostConstruct;

import com.tripshow.api.model.Cliente;
import com.tripshow.api.model.Destino;
import com.tripshow.api.repo.ClienteRepository;
import com.tripshow.api.repo.DestinoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Classe de execução da API
@SpringBootApplication
public class TripShowApiApplication {

	//Chamando o Repositories de Destino e cliente para persistir dados no BD
	@Autowired
	DestinoRepository destinoRepo;

	@Autowired
	ClienteRepository clienteRepo;

	//Área de execução da API
	public static void main(String[] args) {
		SpringApplication.run(TripShowApiApplication.class, args);
	
	}

	//Instanciando objetos e persistindo no Banco de dados
	@PostConstruct
	public void init(){
		
		//Criando destinos sem desconto
		for(int i = 0; i < 5; i++){
		Destino destino = new Destino();

		destino.setCidade_destino("Rio de janeiro");
		destino.setEstado_destino("RJ");
		destino.setDesconto_destino(0);
		destino.setImagemURL_destino("https://www.fazcomex.com.br/blog/wp-content/uploads/2020/08/brazil-4809015_640.jpg");
		destino.setPreco_destino(170);

		destinoRepo.save(destino);

		}
		//Criando destinos com desconto
		for(int j = 0; j < 5; j++){
			Destino destino = new Destino();
	
			destino.setCidade_destino("Gramado");
			destino.setEstado_destino("RS");
			destino.setDesconto_destino(20);
			destino.setImagemURL_destino("https://media-cdn.tripadvisor.com/media/photo-s/15/95/b8/d0/gramado-rio-grande-do.jpg");
			destino.setPreco_destino(480);
	
			destinoRepo.save(destino);
	
		}
		//Criando clientes 
		for(int k = 0; k < 5; k++){
			Cliente cliente = new Cliente();

			cliente.setNome_cliente("Lorem Ipsum");
			cliente.setData_nascimento("09/09/1999");
			cliente.setEstado_cliente("São Paulo");
			cliente.setCidade_cliente("SP");
			cliente.setEmail_cliente("loremLindo@hotmail.com");
			cliente.setData_ida("09/03/2022");
			cliente.setData_volta("14/04/2022");
			
			clienteRepo.save(cliente);
		}
		
	}
	
}
