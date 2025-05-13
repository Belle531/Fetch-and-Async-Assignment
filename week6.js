const baseurl = "https://pokeapi.co/api/v2/"

async function getApiData(url, endpoint = '') {
    let response = {};
  
    try {
      const data = await fetch(`${url}${endpoint}`);
  
      response = await data.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  
    return response;
  }

  const apiData = getApiData(baseurl, "pokemon/squirtle");
  const apiData2 = getApiData(baseurl, "pokemon/pikachu");
  const apiData3 = getApiData(baseurl, "pokemon/jigglypuff");
  const apiData4 = getApiData(baseurl, "pokemon/meowth");
  const apiData5 = getApiData(baseurl, "pokemon/eevee");
  
  
console.log("Api Data in Promise:", apiData);

apiData.then((data) => {
  console.log("Api Data in Object:", data); 
  console.log(data.name);
  console.log(data.base_experience);
 
});

  apiData2.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.types); 
  });

  apiData3.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.weight); 
  });

  apiData4.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.height);
    console.log(data.weight) 
  });

  apiData5.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.abilities);
  });

 //Group 2

 const apiData6 = getApiData(baseurl, "pokemon/");
 
 apiData6.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.results[1].name);
    
  });

  const apiData7 = getApiData(baseurl, "berry-flavor/");

  apiData7.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.results[0].name);

  });

  const apiData8 = getApiData(baseurl, "ability/1/");

  apiData8.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.effect_changes[0].effect_entries[1].effect);

  });

  const apiData9 = getApiData(baseurl, "item/");

  apiData9.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);
    console.log(data.cost);

  });

  const apiData10 = getApiData(baseurl, "type/");

  apiData10.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log(data.name);

  });

  //Group 3

  const apiData11 = getApiData(baseurl, "ability/1/");

  apiData11.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log("ability Name:",data.name);
    console.log("effect:", data.effect_entries[0].effect);

  });

  const apiData12 = getApiData(baseurl, "item/1/");

  apiData12.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log("item Name:",data.name);
    console.log("category:", data.category.name);

  });

  const apiData13 = getApiData(baseurl, "type/10/");

  apiData13.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log("type Name:",data.name);
    console.log("Double Damage From:", data.damage_relations.double_damage);

  });

  const apiData14 = getApiData(baseurl, "nature/1/");

  apiData14.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log("Nature Name:",data.name);
    console.log("Characteristic:", data.hates_flavor);

  });

  const apiData15 = getApiData(baseurl, "pokemon/25/");

  apiData15.then((data) => {
    console.log("Api Data in Object:", data); 
    console.log("Pokemon Name:",data.name);
    console.log("Abilities:", data.abilities.map(a => a.ability.name).join(","));

  });