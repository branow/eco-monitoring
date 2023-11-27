create table settlement (
    settlement_id int primary key auto_increment,
    settlement_name varchar(50) not null,
    settlement_type varchar(50)
);

create table population_size_factor (
    factor_id int primary key auto_increment,
    factor double(3, 2) not null,
    min_size int not null,
    max_size int not null
);

create table settlement_type_factor (
    factor_id int primary key auto_increment,
    factor double(3, 2) not null,
    settlement_type varchar(500) not null
);

create table settlement_factors (
    settlement_id int primary key,
    population_size_factor int not null,
    type_factor int not null,
    constraint fk_settlement_factors_settlement
        foreign key (settlement_id)
        references settlement(settlement_id)
        on update cascade
        on delete cascade,
    constraint fk_settlement_factors_population_size_factor
        foreign key (population_size_factor)
            references population_size_factor(factor_id)
            on update cascade,
    constraint fk_settlement_factors_settlement_type_factor
        foreign key (type_factor)
            references settlement_type_factor(factor_id)
            on update cascade
);


create table company (
    company_id int primary key auto_increment,
    company_name varchar(100) not null,
    ownership varchar(100) not null,
    economic_activity varchar(200),
    address varchar(500),
    settlement int not null,
    constraint fk_company_settlement
        foreign key (settlement)
        references settlement(settlement_id)
        on update cascade
);

create table pollutant (
    pollutant_id int primary key auto_increment,
    pollutant_name varchar(100) unique not null,
    mass_consumption double(10, 5) not null,
    gdk double(10, 5) not null,
    rfc double(12, 8),
    sf double(10, 5),
    hazard_class int
);

create table pollution (
    pollution_id int primary key auto_increment,
    company int not null,
    pollutant int not null,
    emission_mass double(10, 2) not null,
    concentration double(10, 2) not null,
    year int check (pollution.year >= 1991),
    constraint fk_pollution_company
        foreign key (company)
        references company(company_id)
        on update cascade
        on delete cascade,
    constraint fk_pollution_pollutant
        foreign key (pollutant)
        references pollutant(pollutant_id)
        on update cascade
        on delete cascade
);

create table critical_organ (
    organ_id int primary key auto_increment,
    organ_name varchar(100) unique not null
);

create table pollutant_impact (
    pollutant int,
    organ int,
    primary key (pollutant, organ),
    constraint fk_pollutant_impact_pollutant
        foreign key (pollutant)
        references pollutant(pollutant_id)
        on update cascade
        on delete cascade,
    constraint fk_pollutant_impact_organ
        foreign key (organ)
        references critical_organ(organ_id)
        on update cascade
        on delete cascade
);


create table pollutant_tax_rate (
    pollutant int primary key,
    tax double(10, 2) not null,
    constraint fk_pollutant_pollutant_tax_rate
        foreign key (pollutant)
        references pollutant(pollutant_id)
        on update cascade
        on delete cascade
);


create table pollutant_class_tax_rate (
    hazard_class int primary key,
    tax double(10, 2) not null
);


create table pollutant_gdk_tax_rate (
    tax_id int primary key,
    gdk_min double(12, 5) not null,
    gdk_max double(12, 5) not null,
    tax double(10, 2) not null
);

create table emergency (
    emergency_id int primary key auto_increment,
    company int not null,
    year int not null,
    emergency_name varchar(100) not null,
    minor_accident int,
    major_accident int,
    disability int,
    dead int,
    lps decimal(9, 3),
    lnps decimal(9, 3),
    lfp decimal(9, 3),
    ls decimal(9, 3),
    constraint fk_emergency_company
       foreign key (company)
       references company(company_id)
       on update cascade
       on delete cascade
);

