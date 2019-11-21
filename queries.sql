
-- There are currently XXX elevators deployed in the XXX buildings of your XXX customers
-- XXX Batteries are deployed across XXX cities
 SELECT COUNT(elevators.id) AS elevators_count
 		,COUNT(DISTINCT buildings.id) AS buildings_count
 		,COUNT(DISTINCT batteries.id) AS batteries_count
 		,COUNT(DISTINCT customers.id) AS customers_count
 		,COUNT(DISTINCT addresses.city) AS cities_count
 FROM buildings
 LEFT JOIN addresses ON buildings.address_id = addresses.id
 LEFT JOIN customers ON buildings.customer_id = customers.id
 LEFT JOIN batteries ON batteries.building_id = buildings.id
 LEFT JOIN columns ON batteries.id = columns.battery_id
 LEFT JOIN elevators ON columns.id = elevators.column_id


--  Currently, XXX elevators are not in Running Status and are being serviced
 SELECT COUNT(elevators.id) as not_running_elevators, COUNT(DISTINCT batteries.id) as serviced_batteries
 FROM elevators
 LEFT JOIN columns ON columns.id = elevators.column_id
 LEFT JOIN batteries ON batteries.id = columns.battery_id
 WHERE elevators.status != "On"


--  On another note you currently have XXX quotes awaiting processing
 SELECT COUNT(quotes.id) FROM quotes

--  You also have XXX leads in your contact requests
 SELECT COUNT(leads.id)
 FROM leads LEFT OUTER JOIN customers ON customers.id = leads.customer_id
 WHERE leads.customer_id IS NULL


--  get elevator status
 SELECT elevators.status FROM elevators WHERE elevators.id = 2
