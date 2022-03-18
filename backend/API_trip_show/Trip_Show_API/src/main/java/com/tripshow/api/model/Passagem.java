package com.tripshow.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

//Classe de modelo de passagens
@Entity
@Table(name = "Passagens")
public class Passagem {

	//A anotação Id juntamente com a generatedValue indica um Id com auto incremento.
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_passagem;
	
	private String data_compra;
	
	/*
	A anotação @ManyToOne indica um relacionamento forte de muitas passagens
	para um cliente.
	 */
	@ManyToOne
	@JoinColumn(name = "cliente_id_cliente")
	private Cliente cliente;
	
	/*
	Anotação @ManyToOne
	Muitas passagens para um destino
	*/
	@ManyToOne
	@JoinColumn(name = "destino_id_destino")
	private Destino destino;
	
	
	//Métodos acessores (GETs e SETs)
	public Long getId_passagem() {
		return id_passagem;
	}

	public void setId_passagem(Long id_passagem) {
		this.id_passagem = id_passagem;
	}

	public String getData_compra() {
		return data_compra;
	}

	public void setData_compra(String data_compra) {
		this.data_compra = data_compra;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Destino getDestino() {
		return destino;
	}

	public void setDestino(Destino destino) {
		this.destino = destino;
	}
	
	
}
