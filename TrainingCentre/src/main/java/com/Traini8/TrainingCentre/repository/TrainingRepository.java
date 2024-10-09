package com.Traini8.TrainingCentre.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Traini8.TrainingCentre.dto.TrainingCenter;

public interface TrainingRepository extends JpaRepository<TrainingCenter, Long>{
	
}
