package com.tripshow.api;

import com.tripshow.api.model.Cliente;
import com.tripshow.api.model.Destino;
import com.tripshow.api.repo.ClienteRepository;
import com.tripshow.api.repo.DestinoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Área de execução da API

@SpringBootApplication
public class TripShowApiApplication {

	@Autowired
	DestinoRepository destinoRepo;

	

	@Autowired
	ClienteRepository clienteRepo;

	Cliente cliente;
	
	public static void main(String[] args) {
		SpringApplication.run(TripShowApiApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception{
		
		for(int i = 0; i < 5; i++){
		Destino destino = new Destino();

		destino.setCidade_destino("Rio de janeiro");
		destino.setEstado_destino("RJ");
		destino.setDesconto_destino(0);
		destino.setImagemURL_destino("https://www.fazcomex.com.br/blog/wp-content/uploads/2020/08/brazil-4809015_640.jpg");
		destino.setPreco_destino(Float.parseFloat("170.82"));

		destinoRepo.save(destino);
	}

	}
	
}
