const { ShelbyClient } = require('@shelby-xyz/sdk');
const { AptosClient } = require('aptos');
require('dotenv').config();

const shelby = new ShelbyClient({ 
    apiKey: process.env.SHELBY_API_KEY,
    secret: process.env.SHELBY_SECRET 
});

const aptosClient = new AptosClient("https://fullnode.testnet.aptoslabs.com");

async function runProvenancePipeline() {
    console.log("🚀 [1/3] Uploading data to Shelby Global Fiber Network...");
    try {
        const upload = await shelby.upload("./data/ai-dataset.json", {
            bucket: "verifiable-ai-assets",
            isPublic: true
        });
        console.log(`✅ Success! Data URL: ${upload.url}`);
        
        console.log("⛓️ [2/3] Anchoring provenance on Aptos Blockchain...");
        const tx = await shelby.anchorToAptos(upload.hash);
        
        console.log(`✅ Provenance established! TX: ${tx.hash}`);
        console.log("🎯 [3/3] Done. Asset is now global and verifiable.");
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

runProvenancePipeline();
