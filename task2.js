//I want you to return the value "InfiniteTiers" in a variable called "bestCompany" from the following:
//var companies = {"hardware": ["company1", "globalTech", "company2"], "software": ["Asal", "Infinite Tiers", "Exhausted"], "networking": ["company3", "company4", "company5"]};

var companies = {
  
};

let bestCompany;
console.log(companies[0])

for (var key in companies) {
  if (companies[key].includes("InfiniteTiers")) {
    bestCompany = "InfiniteTiers";
    break;
  }
}

console.log(bestCompany); 