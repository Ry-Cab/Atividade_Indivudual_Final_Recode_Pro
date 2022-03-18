package com.tripshow.api.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

//Classe modelo de destino

@Entity
@Table(name = "Destinos")
public class Destino {

	//A anotação Id juntamente com a generatedValue indica um Id com auto incremento
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_destino;
	
	private String imagemURL_destino;
	
	private String cidade_destino;
	
	private String estado_destino;
	
	private float preco_destino;
	
	private int desconto_destino;
	
	/*
	A entidade "destinos" está fortemente relacionada com a entidade "Passagens".
	A anotação @OneToMany indica que é um relacionamento de Um Destino para muitas passagens, e por
	ser muitas passagens é necessário criar uma lista de passagens para entidade, facilitando o mapeamento.
	
	@JsonIgnore é uma anotação que indicq que essa lista na hora de retornar um Json de Destinos.
	*/
	@JsonIgnore
	@OneToMany(mappedBy = "destino")
	private List<Passagem> passagens = new ArrayList<Passagem>();
	
	//Métodos acesspres (GETs e SETs).

	public List<Passagem> getPassagens() {
		return passagens;
	}

	public Long getId_destino() {
		return id_destino;
	}

	public void setId_destino(Long id_destino) {
		this.id_destino = id_destino;
	}
	
	

	public String getImagemURL_destino() {
		return imagemURL_destino;
	}




	public void setImagemURL_destino(String imagemURL_destino) {
		this.imagemURL_destino = imagemURL_destino;
	}




	public String getCidade_destino() {
		return cidade_destino;
	}

	public void setCidade_destino(String cidade_destino) {
		this.cidade_destino = cidade_destino;
	}

	public String getEstado_destino() {
		return estado_destino;
	}

	public void setEstado_destino(String estado_destino) {
		this.estado_destino = estado_destino;
	}

	public float getPreco_destino() {
		return preco_destino;
	}

	public void setPreco_destino(float preco_destino) {
		this.preco_destino = preco_destino;
	}

	public int getDesconto_destino() {
		return desconto_destino;
	}

	public void setDesconto_destino(int desconto_destino) {
		this.desconto_destino = desconto_destino;
	}

	

}
