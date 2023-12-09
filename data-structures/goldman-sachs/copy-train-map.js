// create a railway with different stations

// each station has an Map of collections
// StationName, connectionsArray of stationNames
// be able to add a connection by passing two stationName

class RailNetwork {
  constructor() {
    this.stations = new Map();
  }

  addStation(stationName) {
    this.stations.set(stationName, []);
  }

  connectionStations(station1Name, station2Name) {
    // have them points at each other, bi-directional, undirection graph
    this.stations.get(station1Name).push(station2Name);
    this.stations.get(station2Name).push(station1Name);
  }

  shortestPath(fromStationName, toStationName) {
    if (
      !this.stations.get(fromStationName) ||
      !this.stations.get(toStationName)
    ) {
      return fromStationName;
    }

    // create queue as an array with the first station in the queue
    const queue = [fromStationName];
    // create previouslyVisitedStation as an object
    const previouslyVisitedStation = {};
    // created set of visited stations
    // add the first station to the visited list
    const visited = new Set(fromStationName);

    while (queue.length > 0) {
      // get the first item from the queue
      const currentStationName = queue.shift();

      // if we have arrived
      if (currentStationName === toStationName) {
        // create the path
        const path = [currentStationName];
        let previousStationName = previouslyVisitedStation[currentStationName];
        while (previousStationName !== undefined) {
          // update previouslyVisitedStation
          // unshift that into path
          path.unshift(previousStationName);
          previousStationName = previouslyVisitedStation[previousStationName];
        }
        return path;
      }

      // map over each of the connections of the station we are currently on
      for (let connection of this.stations.get(currentStationName)) {
        // if we haven't seen that station
        if (!visited.has(connection)) {
          // add it to the visited Set
          visited.add(connection);
          // push the connection into the queue as we want to explore that Stations' connections
          queue.push(connection);
          // inside of previouslyVisitedStation: set the currentStationName as the previous visited statoin for the next Station we are going to explore
          previouslyVisitedStation[connection] = currentStationName;
        }
      }
    }
    return null;
  }
}

const railNetwork = new RailNetwork();
railNetwork.addStation("A");
railNetwork.addStation("B");
railNetwork.addStation("C");
railNetwork.addStation("D");
railNetwork.addStation("E");
railNetwork.addStation("F");
railNetwork.connectionStations("A", "B");
railNetwork.connectionStations("A", "C");
railNetwork.connectionStations("B", "C");
railNetwork.connectionStations("C", "D");
railNetwork.connectionStations("C", "F");
console.log("shortestPath", railNetwork.shortestPath("A", "D"));
