// ChatGPT Q&A
// https://chat.openai.com/c/a1d62ee3-0cae-4b41-ae7c-4ae8b7ea4c54

class RailNetwork {
  constructor() {
    this.stations = new Map(); // Map to store station objects
  }

  // Add a station to the network
  addStation(stationName) {
    this.stations.set(stationName, []);
  }

  // Connect two stations bi-directionally
  connectStations(station1Name, station2Name) {
    this.stations.get(station1Name).push(station2Name);
    this.stations.get(station2Name).push(station1Name);
  }

  // Find the shortest path between two stations using BFS
  shortestPath(fromStationName, toStationName) {
    if (
      !this.stations.has(fromStationName) ||
      !this.stations.has(toStationName)
    ) {
      return fromStationName; // One or both stations do not exist
    }

    const visited = new Set(); // Set to keep track of visited stations
    const queue = []; // Queue for BFS traversal
    const predecessor = {}; // Object to store predecessor stations (the station that wa before the current station)

    queue.push(fromStationName);
    visited.add(fromStationName);

    while (queue.length > 0) {
      const currentStation = queue.shift();

      if (currentStation === toStationName) {
        // Found the shortest path
        const path = [currentStation];
        let predecessorStation = predecessor[currentStation];
        console.log("predecessorStation", predecessorStation);
        while (predecessorStation !== undefined) {
          console.log("before path", path);
          path.unshift(predecessorStation);
          console.log("afters path", path);

          predecessorStation = predecessor[predecessorStation];
        }
        return path;
      }

      for (const neighbor of this.stations.get(currentStation)) {
        console.log("neighbor", neighbor);
        if (!visited.has(neighbor)) {
          console.log("not seen neighbor", neighbor);
          queue.push(neighbor);
          visited.add(neighbor);
          predecessor[neighbor] = currentStation;
        }
      }
    }
    return null; // No path found
  }
}

// need to get all the station names (string)
// then need to connect them
// then run this code

// Example usage:
const railNetwork = new RailNetwork();
railNetwork.addStation("A");
railNetwork.addStation("B");
railNetwork.addStation("C");
railNetwork.addStation("D");
railNetwork.connectStations("A", "B");
railNetwork.connectStations("A", "C");
railNetwork.connectStations("B", "C");
railNetwork.connectStations("C", "D");

console.log('"A" -> "D"', railNetwork.shortestPath("A", "D")); // Output: [ 'A', 'C', 'D' ]
// console.log('"A" -> "C"', railNetwork.shortestPath("A", "C")); // Output: [ 'A', 'C']
// console.log('"A" -> "B"', railNetwork.shortestPath("A", "B")); // Output: [ 'A', 'B']
