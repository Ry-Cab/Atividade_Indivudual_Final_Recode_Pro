package com.tripshow.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tripshow.api.model.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long>{
	
	//Repositório extendido do JPA que possibilita usar as funções CRUD na tabela "Destinos"
}
