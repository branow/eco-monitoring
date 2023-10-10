# SET GLOBAL local_infile=1;
# OPT_LOCAL_INFILE=1

LOAD DATA LOCAL INFILE "D:/java-project/kpi/eco/eco-monitor/src/main/resources/sql/critical_organ.txt"
    INTO TABLE eco_monitoring.critical_organ
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (organ_id, organ_name);

LOAD DATA LOCAL INFILE "D:/java-project/kpi/eco/eco-monitor/src/main/resources/sql/company.txt"
    INTO TABLE eco_monitoring.company
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (company_id, company_name, ownership, economic_activity, address);

LOAD DATA LOCAL INFILE "D:/java-project/kpi/eco/eco-monitor/src/main/resources/sql/pollutant.txt"
    INTO TABLE eco_monitoring.pollutant
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (pollutant_id, pollutant_name, mass_consumption, gdk, rfc, sf, hazard_class);

LOAD DATA LOCAL INFILE "D:/java-project/kpi/eco/eco-monitor/src/main/resources/sql/pollutant_impact.txt"
    INTO TABLE eco_monitoring.pollutant_impact
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (pollutant_impact_id, pollutant, organ);

LOAD DATA LOCAL INFILE "D:/java-project/kpi/eco/eco-monitor/src/main/resources/sql/pollution.txt"
    INTO TABLE eco_monitoring.pollution
    FIELDS TERMINATED BY '\t'
    LINES TERMINATED BY '\r\n'
    IGNORE 1 LINES
    (pollution_id, company, pollutant, emission_mass, concentration, year);

select * from critical_organ;
select * from company;
select * from pollutant;
select * from pollution;
select * from pollutant_impact;


delete from pollution;
delete from pollutant_impact;
delete from pollutant;
delete from company;
delete from critical_organ;