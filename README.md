Things to be installed:
1. Maven
2. JRE (Java 11 or higher)

Steps to create the jar file:
1. Navigate to the trip_factory_assignment folder.
2. Open command prompt ot terminal from this folder.
3. Run the command mvn clean install -DskipTests
4. The target folder will be generated and the hotel-0.0.1-SNAPSHOT.jar will be present in this folder.

Steps to start and run the application:
1. Navigate to the trip_factory_assignment\target folder.
2. Open command prompt ot terminal from this folder.
3. Run the command java -jar hotel-0.0.1-SNAPSHOT.jar
4. Open any web browser and go to the URL localhost:9090 . The home page for the application will be visible.
5. The Country and City are mandatory filed which has to be selected before you can search for hotels.
6. After you have searched for the list of hotels a new page opens where you can see the list of hotels.(If there are no hotels available for the inputs the table will be empty.)
7. To view the details of each hotel you can click the details link for each hotel in the table.
8. A new webpage opens up where you can see the details of each hotel.(If there are no rooms available in the hotel for the inputs the table will show a Nil row)