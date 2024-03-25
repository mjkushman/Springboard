-- Design the schema for a medical center.

-- - A medical center employs several doctors
-- - A doctors can see many patients
-- - A patient can be seen by many doctors
-- - During a visit, a patient may be diagnosed to have one or more diseases.


DROP DATABASE IF EXISTS medical_centers_db;

CREATE DATABASE medical_centers_db;

\c medical_centers;

CREATE TABLE medical_centers
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
);

CREATE TABLE doctors
(
    id SERIAL PRIMARY KEY,
    first_name NOT NULL,
    medical_center_id INTEGER REFERENCES medical_centers ON DELETE SET NULL
);

CREATE TABLE patients
(
    id SERIAL PRIMARY KEY,
    first_name NOT NULL,
    doctor_id INTEGER REFERENCES doctors ON DELETE SET NULL
);

CREATE TABLE visits
(
    id SERIAL PRIMARY KEY,
    doctor_id REFERENCES doctors(id) ON DELETE CASCADE,
    patient_id REFERENCES patients(id) ON DELETE CASCADE,
    reason TEXT
);


CREATE TABLE diagnoses
(
    id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(id) ON DELETE SET NULL,
    patient_id INTEGER REFERENCES patients(id) ON DELETE SET NULL,
    doctor_id INTEGER REFERENCES doctors(id) ON DELETE SET NULL,
    doctor_notes TEXT
);

CREATE TABLE diseases
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE diagoses_diseases
(
    id SERIAL PRIMARY KEY,
    disease_id INTEGER REFERENCES disease ON DELETE CASCADE,
    diagnosis_id INTEGER REFERENCES diagnoses ON DELETE CASCADE
);