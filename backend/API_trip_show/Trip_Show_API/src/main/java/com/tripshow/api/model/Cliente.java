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

//Classe modelo de clientes
@Entity
@Table(name =  "Clientes")
public class Cliente {

	//A anotação Id juntamente com a generatedValue indica um Id com auto incremento.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_cliente;
	
	private String nome_cliente;
	
	private String email_cliente;
	
	private String data_nascimento;
	
	private String estado_cliente;
	
	private String cidade_cliente;
	
	private String data_ida;
	
	private String data_volta;
	

	/*
	A entidade "clientes" está fortemente relacionada com a entidade "Passagens".
	A anotação @OneToMany indica que é um relacionamento de Um Cliente para muitas passagens, e por
	ser muitas passagens é necessário criar uma lista de passagens para entidade, facilitando o mapeamento.
	
	@JsonIgnore é uma anotação que indicq que essa lista na hora de retornar um Json de Clientes.
	*/

	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	private List<Passagem> passagens = new ArrayList<Passagem>();
	
	
	//Métodos acessores (GETs e SETs)
	public List<Passagem> getPassagens() {
		return passagens;
	}

	public Long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(Long id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getNome_cliente() {
		return nome_cliente;
	}

	public void setNome_cliente(String nome_cliente) {
		this.nome_cliente = nome_cliente;
	}

	public String getEmail_cliente() {
		return email_cliente;
	}

	public void setEmail_cliente(String email_cliente) {
		this.email_cliente = email_cliente;
	}

	public String getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(String data_nascimento) {
		this.data_nascimento = data_nascimento;
	}

	public String getEstado_cliente() {
		return estado_cliente;
	}

	public void setEstado_cliente(String estado_cliente) {
		this.estado_cliente = estado_cliente;
	}

	public String getCidade_cliente() {
		return cidade_cliente;
	}

	public void setCidade_cliente(String cidade_cliente) {
		this.cidade_cliente = cidade_cliente;
	}

	public String getData_ida() {
		return data_ida;
	}

	public void setData_ida(String data_ida) {
		this.data_ida = data_ida;
	}

	public String getData_volta() {
		return data_volta;
	}

	public void setData_volta(String data_volta) {
		this.data_volta = data_volta;
	}
	
}
