package com.brano.ecomonitor.service;

import com.brano.ecomonitor.model.Pollutant;
import com.brano.ecomonitor.model.PollutantClassTaxRate;
import com.brano.ecomonitor.model.PollutantGdkTaxRate;
import com.brano.ecomonitor.model.PollutantTaxRate;
import com.brano.ecomonitor.repository.PollutantClassTaxRateRepository;
import com.brano.ecomonitor.repository.PollutantGdkTaxRateRepository;
import com.brano.ecomonitor.repository.PollutantTaxRateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TaxRateService {

    private final PollutantTaxRateRepository pollutantTaxRateRepository;
    private final PollutantClassTaxRateRepository pollutantClassTaxRateRepository;
    private final PollutantGdkTaxRateRepository pollutantGdkTaxRateRepository;

    public double getTaxRateByPollutant(Pollutant pollutant) {
        Optional<PollutantTaxRate> pollutantTaxRate =
                pollutantTaxRateRepository.findById(pollutant.getPollutantId());
        if (pollutantTaxRate.isPresent()) {
            return pollutantTaxRate.get().getTax();
        }
        Optional<PollutantClassTaxRate> pollutantClassTaxRate =
                pollutantClassTaxRateRepository.findById(pollutant.getHazardClass());
        if (pollutantClassTaxRate.isPresent()) {
            return pollutantClassTaxRate.get().getTax();
        }
        Optional<PollutantGdkTaxRate> pollutantGdkTaxRate = pollutantGdkTaxRateRepository.findByGdk(pollutant.getGdk());
        return pollutantGdkTaxRate
                .orElseThrow(() -> new IllegalStateException("Tax rate for pollutant not found: " + pollutant.getPollutantId()))
                .getTax();
    }

}
