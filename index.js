function findMatching(drivers, searchName) {
   
    const matchingDrivers = [];
    for (const driver of drivers) {
      // Convert both driver name and search name to lowercase for case-insensitive matching
      if (searchName.toLowerCase().includes(driver.toLowerCase())) {
        matchingDrivers.push(driver);
      }
    }
    return matchingDrivers;
  }
  

  function fuzzyMatch(drivers, query) {
    
    const lowerQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
      const lowerDriver = driver.toLowerCase();
      return lowerDriver.startsWith(lowerQuery);
    });
  
    return matchingDrivers;
  }
  
  function matchName(drivers, searchTerm) {
   
    const lowerTerm = searchTerm.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.name.toLowerCase().includes(lowerTerm));
  
    return matchingDrivers;
  }
  