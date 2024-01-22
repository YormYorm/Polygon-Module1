const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i = 1; i <= 5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `Yorm NFT Data #${i}`,
      description: `Happy African Child Image #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmUpJtRzwLvXd4fJDNLiNnBTp8AhDCXht2zJTZSRhaoyiK/${i}.jpeg`
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'nftDataCollection', String(i)),
    JSON.stringify(json)
  );
}
