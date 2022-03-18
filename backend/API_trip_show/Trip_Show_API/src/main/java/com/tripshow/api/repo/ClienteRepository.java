package com.tripshow.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tripshow.api.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	//Repositório extendido do JPA que possibilita usar as funções CRUD na tabela "Clientes"
}
