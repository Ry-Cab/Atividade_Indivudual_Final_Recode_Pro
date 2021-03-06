package com.tripshow.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tripshow.api.model.Passagem;

@Repository
public interface PassagemRepository extends JpaRepository<Passagem, Long> {
    	//Repositório extendido do JPA que possibilita usar as funções CRUD na tabela "Passagens"
}
