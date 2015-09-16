package br.com.aedes.domain.model.filtros.impl;

import br.com.aedes.domain.model.Prevencao;
import br.com.aedes.domain.model.filtros.ComoSepararTemplate;

public class ComoSepararPorMes implements ComoSepararTemplate<Integer>{

	@Override
	public Integer comoSeparar(Prevencao prevencao) {
		return prevencao.getMesDataPrazo();
	}

}