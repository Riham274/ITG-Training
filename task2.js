//I want you to return the value "InfiniteTiers" in a variable called "bestCompany" from the following:
//var companies = {"hardware": ["company1", "globalTech", "company2"], "software": ["Asal", "Infinite Tiers", "Exhausted"], "networking": ["company3", "company4", "company5"]};

var companies = {
  "hardware": ["company1", "globalTech", "company2"], 
  "software": ["Asal", "Infinite Tiers", "Exhausted"], 
  "networking": ["company3", "company4", "company5"]
  
};



let bestCompany = Object.values(companies).flat().find(name => name === "Infinite Tiers");


console.log(bestCompany); 