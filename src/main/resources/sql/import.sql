
load data local infile "src/main/resources/sql/data/settlement.txt"
    into table settlement
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (settlement_id, settlement_name, settlement_type);

load data local infile "src/main/resources/sql/data/population_size_factor.txt"
    into table population_size_factor
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (factor_id, factor, min_size, max_size);

load data local infile "src/main/resources/sql/data/settlement_type_factor.txt"
    into table settlement_type_factor
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (factor_id, factor, settlement_type);

load data local infile "src/main/resources/sql/data/settlement_factors.txt"
    into table settlement_factors
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (settlement_id, population_size_factor, type_factor);

load data local infile "src/main/resources/sql/data/company.txt"
    into table company
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (company_id, company_name, ownership, economic_activity, address, settlement);

load data local infile "src/main/resources/sql/data/pollutant.txt"
    into table pollutant
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (pollutant_id, pollutant_name, mass_consumption, gdk, rfc, sf, hazard_class);

load data local infile "src/main/resources/sql/data/pollution.txt"
    into table pollution
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (pollution_id, company, pollutant, emission_mass, concentration, year);

load data local infile "src/main/resources/sql/data/critical_organ.txt"
    into table critical_organ
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (organ_id, organ_name);

load data local infile "src/main/resources/sql/data/pollutant_impact.txt"
    into table pollutant_impact
    fields terminated by '\t'
    lines terminated by '\r\n'
    ignore 1 lines
    (pollutant, organ);

