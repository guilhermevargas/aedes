package br.com.aedes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.aedes.domain.entity.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long>{
	@Query("select e.estado from endereco e order by e.estado")
	List<String> listarEstados();

	@Query("select e.cidade from endereco e where e.estado = ?1 order by e.estado")
	List<String> listarCidadesPorEstado(String estado);

	@Query("select e.bairro from endereco e where UPPER(e.bairro) like UPPER(?1) and e.cidade = ?2 and e.estado = ?3 order by e.bairro")
	List<String> listarBairrosPorCidadeEEstado(String bairro, String cidade, String estado);
}