package com.brano.ecomonitor.service;

import com.brano.ecomonitor.dto.emergencydamage.*;
import com.brano.ecomonitor.model.Emergency;
import com.brano.ecomonitor.model.Pollution;
import com.brano.ecomonitor.repository.EmergencyRepository;
import com.brano.ecomonitor.repository.PollutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class EmergencyDamageCalculator {

    private final EmergencyRepository emergencyRepository;
    private final PollutionRepository pollutionRepository;
    private final NumberRounder rounder;

    public CompanyEmergencyDamage calculate(Integer companyId, Integer year) {
        List<Emergency> emergencies = emergencyRepository.findAllByCompanyIdAndYear(companyId, year);
        List<PeopleDamageDto> pd = calculatePeopleDamage(emergencies);
        List<PropertyDamageDto> prd = calculatePropertyDamage(emergencies);
        List<AtmosphericDamageDto> ad = calculateAtmosphericDamage(emergencies);
        List<EmergencyDamageDto> ed = calculateEmergencyDamage(pd, prd, ad, emergencies);
        double sum = ed.stream().mapToDouble(EmergencyDamageDto::getLosses).sum();
        return CompanyEmergencyDamage.builder()
                .ed(ed)
                .ad(ad)
                .pd(pd)
                .prd(prd)
                .sum(rounder.round(sum, 3))
                .build();
    }


    private List<PeopleDamageDto> calculatePeopleDamage(List<Emergency> emergencies) {
        return emergencies.stream().map(e -> {
            double lp = e.getMinorAccident() * 0.25 + e.getMajorAccident() * 6.5 + e.getDisability() * 37 + e.getDead() * 47;
            double lh = 12 * 0.15 * e.getDead();
            double lpp = 12 * 0.037 * e.getDead() / 2;
            double sum = lp + lh + lpp;
            return PeopleDamageDto.builder()
                    .emergencyName(e.getEmergencyName())
                    .lh(rounder.round(lh, 3))
                    .lp(rounder.round(lp, 3))
                    .pd(rounder.round(sum, 3))
                    .lpp(rounder.round(lpp, 3))
                    .build();
        }).toList();
    }

    private List<PropertyDamageDto> calculatePropertyDamage(List<Emergency> emergencies) {
        return emergencies.stream().map(e -> {
            double lps = e.getLps();
            double lnps = e.getLnps();
            double lfp = e.getLfp();
            double ls = e.getLs();
            double lp = lps + lnps + ls + lfp;
            return PropertyDamageDto.builder()
                    .emergencyName(e.getEmergencyName())
                    .lp(rounder.round(lp, 3))
                    .ls(ls)
                    .lfp(lfp)
                    .lps(lps)
                    .lnps(lnps)
                    .build();
        }).toList();
    }

    private List<AtmosphericDamageDto> calculateAtmosphericDamage(List<Emergency> emergencies) {
        return emergencies.stream().map(e -> {
            Pollution pollution = pollutionRepository
                    .findAllByCompanyCompanyIdAndYearAndPollutantPollutantId(
                            e.getCompany().getCompanyId(), e.getYear(), 4);

            double mass = (pollution.getEmissionMass() / 50) * random(e.getEmergencyId());
            double tax = 1.1 * switch (e.getYear()) {
                case 2016 -> 1.6;
                case 2017 -> 3.2;
                case 2018 -> 3.723;
                case 2019 -> 4.173;
                case 2020 -> 5;
                case 2021 -> 6.25;
                default -> 6.6;
            };
            double dc = 1 / (pollution.getPollutant().getGdk() / 10) * random(e.getEmergencyId());
            double tc = e.getCompany().getSettlement().getFactors().getPopulationSizeFactor().getFactor()
                    * e.getCompany().getSettlement().getFactors().getSettlementTypeFactor().getFactor();
            double ec = pollution.getConcentration() / (pollution.getPollutant().getGdk() / 100) * random(e.getEmergencyId());
            double ad = mass * tax * dc * tc * ec;
            return AtmosphericDamageDto.builder()
                    .emergencyName(e.getEmergencyName())
                    .ad(rounder.round(ad, 3))
                    .tc(rounder.round(tc, 3))
                    .ec(rounder.round(ec, 3))
                    .mass(rounder.round(mass, 3))
                    .dc(rounder.round(dc, 3))
                    .tax(rounder.round(tax, 3))
                    .build();
        }).toList();
    }

    private List<EmergencyDamageDto> calculateEmergencyDamage(
            List<PeopleDamageDto> pd, List<PropertyDamageDto> prd, List<AtmosphericDamageDto> ad, List<Emergency> e) {
        List<EmergencyDamageDto> ed = new ArrayList<>();
        for (int i=0; i<pd.size(); i++) {
            double pdv = pd.get(i).getPd();
            double lpv = prd.get(i).getLp();
            double adv = ad.get(i).getAd();
            double sum = pdv + lpv + adv;
            ed.add(EmergencyDamageDto.builder()
                    .emergencyName(e.get(i).getEmergencyName())
                    .pd(rounder.round(pdv, 3))
                    .lp(rounder.round(lpv, 3))
                    .ad(rounder.round(adv, 3))
                    .losses(rounder.round(sum, 3))
                    .build());
        }
        return ed;
    }

    private double random(int seed) {
        seed = new Random(seed).nextInt();
        return  0.7 + new Random(seed).nextDouble() / 1.5;
    }

}
